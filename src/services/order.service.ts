import connection from '../models/connection';
import OrderModel from '../models/order.model';
import { Order } from '../interfaces/order.interface';

class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAll(): Promise<Order[]> {
    const orders = await this.model.getAll();
    return orders;
  }

  public async create(productsIds: number[], userId: number) {
    const orderId = await this.model.create(userId);
    await Promise.all(productsIds.map((id) => this.model.update(id, orderId)));
  }
}

export default OrderService;