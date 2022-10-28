import { Router } from 'express';
import ProductController from '../controllers/product.controller';
import nameValidate from '../middlewares/productName.validate';
import amountValidate from '../middlewares/productAmount.validate';

const productRouter = Router();

const productsController = new ProductController();

productRouter.post('/', nameValidate, amountValidate, productsController.create);
productRouter.get('/', productsController.getAll);

export default productRouter;