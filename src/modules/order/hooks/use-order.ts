import { useCallback, useEffect, useRef, useState } from 'react';
import moment from 'moment';
import { OrderFilterParams } from 'types/order';
import { DEFAULT_ORDER_FILTER_PARAMS } from 'constants/order';
import { useFilterOrders } from './use-filter-order';

export default function useOrder() {
  const [filterParams, setFilterParams] = useState<OrderFilterParams>(
    DEFAULT_ORDER_FILTER_PARAMS
  );
  const intervalRef = useRef<any>(null);

  const {
    total,
    data: orders,
    totalWarn,
    totalLate,
  } = useFilterOrders(filterParams);
  const [isLoading, setIsLoading] = useState(false);

  const handleTableChange = (pagination: any) => {
    setFilterParams({
      ...filterParams,
      pageSize: pagination.pageSize,
      pageIndex: pagination.current,
    });
  };

  const handleApplyFilter = (values: any) => {
    setFilterParams({
      ...filterParams,
      filterBy: values,
    });
  };

  const handleReload = useCallback(() => {
    setIsLoading(true);
    setFilterParams({
      ...filterParams,
      version: moment().millisecond().toString(),
    });
    setIsLoading(false);
  }, [filterParams]);

  useEffect(() => {
    const id = setInterval(() => {
      handleReload();
    }, 10000);

    intervalRef.current = id;
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return {
    handleReload,
    handleTableChange,
    filterParams,
    isLoading,
    orders,
    total,
    handleApplyFilter,
    totalWarn,
    totalLate,
  };
}
