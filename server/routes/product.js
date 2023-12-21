import express  from 'express';
import { allProduct, createProduct, productByRestaurantId } from '../controllers/productController.js';
import config from '../config/config.js';

const productRouter = express.Router();

productRouter.get('/', allProduct);
productRouter.get('/:id', productByRestaurantId)
productRouter.post('/create', config.multer.any(), createProduct)

export default productRouter;