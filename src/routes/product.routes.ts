import { Router } from 'express';
import ProductController from '../controllers/product.controller';

const productRouter = Router();

const productsController = new ProductController();

productRouter.post('/', productsController.create);

export default productRouter;