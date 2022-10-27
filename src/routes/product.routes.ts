import { Router } from 'express';
import ProductController from '../controllers/product.controller';

const productRouter = Router();

const productsController = new ProductController();

productRouter.post('/', productsController.create);
productRouter.get('/', productsController.getAll);

export default productRouter;