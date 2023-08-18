import express  from 'express';
import { allVisitor, createVisitor } from '../controllers/visitorController.js';


const visitorRouter = express.Router();

visitorRouter.get('/', allVisitor);
visitorRouter.post('/', createVisitor);

export default visitorRouter;