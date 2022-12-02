import { OrderFilterParams } from '../types/order';

export const DEFAULT_ORDER_FILTER_PARAMS: OrderFilterParams = {
  orderBy: 'updatedTime',
  orderType: 'desc',
  pageIndex: 1,
  pageSize: 10,
};

export const CUSTOMER_STATUS = {
  Created: 'Created',
  Accepted: 'Accepted',
  DriverAssigned: 'DriverAssigned',
  Delivering: 'Delivering',
  Canceled: 'Canceled',
  Done: 'Done',
};

export const STATUS_COLORS = {
  [CUSTOMER_STATUS.Created]: 'yellow',
  [CUSTOMER_STATUS.Accepted]: 'yellow',
  [CUSTOMER_STATUS.DriverAssigned]: 'yellow',
  [CUSTOMER_STATUS.Delivering]: 'yellow',
  [CUSTOMER_STATUS.Canceled]: 'red',
  [CUSTOMER_STATUS.Done]: 'green',
};
