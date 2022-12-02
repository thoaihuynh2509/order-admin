import { Button, Card, Divider } from 'antd';
import useOrder from './hooks/use-order';
import OrderStatistic from './order-statistic';
import OrderFilter from './order-filter';
import OrderList from './order-list';

const Order = () => {
  const {
    isLoading,
    handleApplyFilter,
    filterParams,
    total,
    orders = [],
    handleReload,
    handleTableChange,
    totalLate,
    totalWarn,
  } = useOrder();

  return (
    <Card
      style={{ background: "white" }}
      title={
        <OrderStatistic
          total={total}
          totalLate={totalLate}
          totalWarn={totalWarn}
        />
      }
      extra={
        <Button type="primary" loading={isLoading} onClick={handleReload}>
          {' '}
          {isLoading ? 'Loading' : 'Reload'}
        </Button>
      }
    >
      <OrderFilter onFinish={handleApplyFilter} />
      <Divider />
      <OrderList
        orders={orders}
        loading={!orders}
        onChange={handleTableChange}
        pagination={{
          current: filterParams.pageIndex,
          pageSize: filterParams.pageSize,
          total,
        }}
      />
    </Card>
  );
};

export default Order;
