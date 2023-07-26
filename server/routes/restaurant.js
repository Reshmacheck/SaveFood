 import express from 'express';
 import { index }  from '../controllers/restaurantController.js';

 const restaurantRouter = express.Router();

 restaurantRouter.get('/', index);

 export default restaurantRouter;

