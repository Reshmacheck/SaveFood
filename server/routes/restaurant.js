 import express from 'express';
 import { allRestaurant, createRestaurant }  from '../controllers/restaurantController.js';

 const restaurantRouter = express.Router();

restaurantRouter.get('/', allRestaurant);
restaurantRouter.post('/',createRestaurant)

 export default restaurantRouter;

