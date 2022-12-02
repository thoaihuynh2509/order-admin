export type RouteParams = { [key: string]: string | any | undefined };

export interface OrderModel {
  id: number,
  customerStatus: CustomerStatus,
  riderName: string,
  orderName: string,
  customerName: string,
  address: string,
  merchantName: string,
  merchantAddress: string,
  dishesName: string,
  dishesPrice: string,
  totalPrice: string,
  updatedTime: string,
}

export enum CustomerStatus {
  Created = 'Created',
  Accepted= 'Accepted',
  DriverAssigned = 'DriverAssigned',
  Delivering = 'Delivering',
  Canceled = 'Canceled',
  Done = 'Done',
}

export interface OrderFilterParams_FilterBy {
  id: number,
  customerStatus: CustomerStatus,
  riderName: string,
  merchantName: string,
  updatedTime: string,
}

export interface OrderFilterParams {
  pageIndex: number,
  pageSize: number,
  orderBy: string,
  version?: string,
  orderType: 'asc' | 'desc',
  filterBy?: OrderFilterParams_FilterBy
}

export interface OrderListResponseModel {
  data: OrderModel[],
  total: number,
  totalLate: number,
  totalWarn: number,
}
