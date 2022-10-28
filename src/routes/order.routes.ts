import { Router } from 'express';
import OrderController from '../controllers/order.controller';
import ordersValidate from '../middlewares/order.validate';
import tokenAuthorization from '../middlewares/authToken.validate';

const orderRouter = Router();

const orderController = new OrderController();

orderRouter.get('/', orderController.getAll);
orderRouter.post('/', tokenAuthorization, ordersValidate, orderController.create);

export default orderRouter;