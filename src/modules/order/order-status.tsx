import { Tag } from 'antd';
import { STATUS_COLORS } from 'constants/order';

interface IOrderStatusProps {
  status: string
}

const OrderStatus = ({status}: IOrderStatusProps) => {
  return (<>
    <Tag color={STATUS_COLORS[status]}>{status}</Tag>
  </>);
};

export default OrderStatus;
