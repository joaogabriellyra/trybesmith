import { Request, Response } from 'express';
import OrderService from '../services/order.service';

class OrderController {
  constructor(private orderService = new OrderService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const orders = await this.orderService.getAll();
    res.status(200).json(orders);
  };

  public create = async (req: Request, res: Response) => {
    const { userId } = req.headers;
    const { productsIds } = req.body;
    await this.orderService.create(productsIds, Number(userId));
    return res.status(201).json({ userId, productsIds });
  };
}

export default OrderController;