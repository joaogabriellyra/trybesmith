import { Pool, RowDataPacket } from 'mysql2/promise';
import { Order } from '../interfaces/order.interface';

export default class OrderModel {
  public connection: Pool;

  constructor(connectionDB: Pool) {
    this.connection = connectionDB;
  }

  public async getAll(): Promise<Order []> {
    const [orders] = await this.connection.execute<RowDataPacket[]>(
      `SELECT ord.id, ord.userId, 
      JSON_ARRAYAGG(Trybesmith.Products.id) AS productsIds
      FROM Trybesmith.Orders AS ord INNER JOIN Trybesmith.Products
      ON ord.id = Trybesmith.Products.orderId
      GROUP BY ord.id
      ORDER BY ord.userId`,
    );
    return orders as Order[];
  }
}