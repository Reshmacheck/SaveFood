import express  from 'express'; 
import { roles } from '../controllers/roleController.js';

const rolesRouter = express.Router();

rolesRouter.get('/', roles);

export default rolesRouter;