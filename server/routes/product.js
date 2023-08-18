import express  from 'express';
import { allProduct, createProduct } from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.get('/', allProduct);
productRouter.post('/', createProduct)

export default productRouter;