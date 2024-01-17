 import express from 'express';
 import { allRestaurant, createRestaurant, updateRestaurant }  from '../controllers/restaurantController.js';

 const restaurantRouter = express.Router();

restaurantRouter.get('/', allRestaurant);
restaurantRouter.post('/', createRestaurant)
restaurantRouter.put('/:id', updateRestaurant)

 export default restaurantRouter;

