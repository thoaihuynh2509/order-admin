import orderData from './mock/order-data.json';
import moment from 'moment';
import { OrderModel } from 'types/order';
import { CUSTOMER_STATUS } from 'constants/order';

export const store = {
  save: (data: any) => {
    window.localStorage.setItem('orders', JSON.stringify(data))
  },
  getOrders: () => {
    return JSON.parse(window.localStorage.getItem('orders') || '[]')
  }
}

function initData() {
  if (!store.getOrders() || !store.getOrders().length) {
    store.save(orderData.map((orderData, index) => {
      return {
        ...orderData,
        customerName: `Customer Name ${index}`
      }
    }))
  }
}

function runUpdateOrderJob() {
  setInterval(() => {
    const orders: OrderModel[] = store.getOrders() as OrderModel[];
    store.save(orders.map(order => {
      return {
        ...order,
        customerStatus: Object.values(CUSTOMER_STATUS)[Math.floor(Math.random() * Object.values(CUSTOMER_STATUS).length)],
        updatedTime: moment().add(5, 'minutes')
      }
    }))
  }, 2000)
}

export default function setupData() {
  initData();
  runUpdateOrderJob();
}
