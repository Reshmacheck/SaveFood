import express  from 'express';
import { allVisitor, createVisitor, visitorById, updateVisitor, deleteVisitor, checkVisitorLogin } from '../controllers/visitorController.js';


const visitorRouter = express.Router();

visitorRouter.get('/', allVisitor) ;
visitorRouter.get('/:id', visitorById);
visitorRouter.post('/signup', createVisitor);
visitorRouter.post('/login', checkVisitorLogin);
visitorRouter.put('/:id', updateVisitor);
visitorRouter.delete('/:id', deleteVisitor);

export default visitorRouter;