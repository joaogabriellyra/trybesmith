import { Pool, ResultSetHeader } from 'mysql2/promise';
import { Product } from '../interfaces/products.interface';

export default class ProductModel {
  public connection: Pool;

  constructor(connectionDB: Pool) {
    this.connection = connectionDB;
  }

  public async create(product: Product): Promise<Product> {
    const { name, amount } = product;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    return { id: insertId, ...product };
  }

  public async getAll(): Promise<Product[]> {
    const result = await this.connection
      .execute('SELECT * FROM Trybesmith.Products');
    const [rows] = result;
    console.log(rows);
    return rows as Product[];
  }
}