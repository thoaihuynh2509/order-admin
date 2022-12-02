import React from 'react';
import { get, orderBy } from 'lodash';
import moment from 'moment';
import {
  OrderFilterParams,
  OrderListResponseModel,
  OrderModel,
} from 'types/order';
import { store } from 'store';
import { CUSTOMER_STATUS } from 'constants/order';

export function useFilterOrders(
  params: OrderFilterParams
): OrderListResponseModel {
  const rs = React.useMemo(() => {
    let orderFilters = [...store.getOrders()];
    if (params && params?.filterBy) {
      const queryKeys = Object.keys(params?.filterBy).filter((k) =>
        get(params?.filterBy, k)
      );

      orderFilters = orderFilters.filter(function (order: OrderModel) {
        return queryKeys.every(function (key) {
          const orderValue: OrderModel = get(order, key);
          const filterValue = get(params?.filterBy, key);
          if (key === 'updatedTime') {
            return moment(order.updatedTime).isSameOrBefore(
              moment().add(Number(filterValue), 'minutes')
            );
          } else if (
            key === 'lateOrder' &&
            filterValue === 'late' &&
            order.customerStatus === CUSTOMER_STATUS.Delivering
          ) {
            return moment(order.updatedTime)
              .add(15, 'minutes')
              .isSameOrAfter(moment());
          } else if (
            key === 'lateOrder' &&
            filterValue === 'warn' &&
            order.customerStatus === CUSTOMER_STATUS.Delivering
          ) {
            return moment(order.updatedTime)
              .add(10, 'minutes')
              .isSameOrAfter(moment());
          } else if (key === 'lateOrder' && filterValue === 'late') {
            return moment(order.updatedTime)
              .add(40, 'minutes')
              .isSameOrAfter(moment());
          } else if (key === 'lateOrder' && filterValue === 'warn') {
            return moment(order.updatedTime)
              .add(40, 'minutes')
              .isSameOrAfter(moment());
          }
          return orderValue === filterValue;
        });
      });
    }
    let ordersPaging = [...orderFilters].slice(
      (params.pageIndex - 1) * params.pageSize,
      params.pageIndex * params.pageSize
    );
    ordersPaging = orderBy(
      [...(ordersPaging || [])],
      [params.orderBy || 'updatedTime'],
      [params.orderType || 'asc']
    );
    return {
      data: ordersPaging,
      total: orderFilters.length,
      totalWarn: orderFilters.filter(
        (order) => moment(order.updatedTime).diff(moment(), 'minutes') < 10
      ).length,
      totalLate: orderFilters.filter(
        (order) => moment(order.updatedTime).diff(moment(), 'minutes') > 15
      ).length,
    };
  }, [params]);
  return rs;
}
