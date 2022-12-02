import { Button, Col, Form, Input, Row, Select } from 'antd';
import { CUSTOMER_STATUS } from 'constants/order';

interface IOrderFilterProps {
  onFinish: (values: any) => void;
}

const OrderFilter = ({ onFinish }: IOrderFilterProps) => {
  const [form] = Form.useForm();

  return (
    <>
      <Form form={form} onFinish={onFinish}>
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item name={`id`} label={`ID`}>
              <Input placeholder="ID" />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item name={`riderName`} label={`Rider Name`}>
              <Input placeholder="Rider name" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name={`merchantName`} label={`Merchant Name`}>
              <Input placeholder="Merchant name" />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item name={`customerName`} label={`Customer Name`}>
              <Input placeholder="Customer Name" />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item name={`customerStatus`} label={`Customer Status`}>
              <Select allowClear>
                {Object.values(CUSTOMER_STATUS).map((status) => {
                  return (
                    <Select.Option value={status} key={status}>
                      {status}
                    </Select.Option>
                  );
                })}
              </Select>
            </Form.Item>
          </Col>

          <Col span={4}>
            <Form.Item name={`updatedTime`} label={`Updated Time`}>
              <Select allowClear>
                <Select.Option value={5}>Last 5 minutes</Select.Option>
                <Select.Option value={10}>Last 10 minutes</Select.Option>
                <Select.Option value={15}>Last 15 minutes</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item label={`Order late status`} name={`lateOrder`}>
              <Select allowClear>
                <Select.Option value={'normal'}>Normal</Select.Option>
                <Select.Option value={'warn'}>Warn</Select.Option>
                <Select.Option value={'late'}>Late</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">
              Search
            </Button>
            <Button
              style={{ margin: '0 8px' }}
              onClick={() => {
                form.resetFields();
                onFinish({});
              }}
            >
              Clear
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default OrderFilter;
