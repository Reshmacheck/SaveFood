import express  from 'express';
import { visitor, createVisitor } from '../controllers/visitorController.js';


const visitorRouter = express.Router();

visitorRouter.get('/', visitor);
visitorRouter.post('/', createVisitor);

export default visitorRouter;