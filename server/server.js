import * as fs from 'node:fs/promises';
import  express  from 'express';
import https from 'node:https';
import * as dotenv from 'dotenv';
import restaurantRouter from './routes/restaurant.js';
import rolesRouter from './routes/role.js';

// routeur
const app = express();
const router = express.Router();
app.use(router);

// liste des routeurs
// router.get('/', (req, res) => res.status(200).json('coucou reshma'));
// router.use('/api/restaurant', restaurantRouter);
router.use('/api/roles', rolesRouter);

// https
const options = {
    key: await fs.readFile('ca/key.pem'),
    cert: await fs.readFile('ca/cert.pem'),
};

const server = https.createServer(options, app);

export default server;