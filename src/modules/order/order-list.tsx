import { Table } from 'antd';
import { TablePaginationConfig } from 'antd/es/table';
import moment from 'moment';
import OrderStatus from './order-status';
import { OrderModel } from 'types/order';

interface IOrderListProps {
  orders: OrderModel[];
  loading: boolean;
  onChange: (pagination: any) => void;
  pagination: TablePaginationConfig;
}

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    sorter: false,
    width: '10%',
  },
  {
    title: 'Order Name',
    dataIndex: 'orderName',
    sorter: false,
    width: '10%',
  },
  {
    title: 'Rider Name',
    dataIndex: 'riderName',
    sorter: false,
    width: '10%',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    sorter: false,
    width: '10%',
  },
  {
    title: 'Merchant Name',
    dataIndex: 'merchantName',
    sorter: false,
    width: '10%',
  },
  {
    title: 'Dishes',
    render: (_: string, rowData: OrderModel) => (
      <>{`${rowData.dishesName}/${rowData.dishesPrice}`}</>
    ),
    sorter: false,
    width: '10%',
  },
  {
    title: 'Total Price',
    dataIndex: 'totalPrice',
    sorter: false,
    render: (totalPrice: string) => <strong>{`$${totalPrice}`}</strong>,
    width: '10%',
  },
  {
    title: 'Status',
    dataIndex: 'customerStatus',
    sorter: false,
    render: (customerStatus: string) => <OrderStatus status={customerStatus} />,
    width: '10%',
  },
  {
    title: 'Customer Name',
    dataIndex: 'customerName',
    sorter: false,
    width: '10%',
  },
  {
    title: 'Updated Time',
    dataIndex: 'updatedTime',
    sorter: true,
    render: (updatedTime: string) => `${moment(updatedTime).fromNow()}`,
    width: '10%',
  },
];

const OrderList = ({
  orders,
  pagination,
  loading,
  onChange,
}: IOrderListProps) => {
  return (
    <>
      <Table
        columns={columns}
        rowKey={(record: OrderModel) => record.id}
        dataSource={orders}
        pagination={pagination}
        loading={loading}
        onChange={onChange}
      />
    </>
  );
};

export default OrderList;
