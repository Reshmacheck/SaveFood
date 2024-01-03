import express  from 'express';
import { allProduct, createProduct, productById, productByRestaurantId } from '../controllers/productController.js';
import config from '../config/config.js';

const productRouter = express.Router();

productRouter.get('/', allProduct);
productRouter.get('/restaurant/:id', productByRestaurantId)
productRouter.get('/:id', productById)
productRouter.post('/create', config.multer.any(), createProduct)

export default productRouter;