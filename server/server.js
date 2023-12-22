import * as fs from 'node:fs/promises';
import  express  from 'express';
import https from 'node:https';
import * as dotenv from 'dotenv';
import restaurantRouter from './routes/restaurant.js';
import rolesRouter from './routes/role.js';
import visitorRouter from './routes/visitor.js';
import productRouter from './routes/product.js';
import cors from 'cors';
import http from 'http';


// routeur
const app = express();
const router = express.Router();
app.use(router);

app.use(cors(
    {
        origin: [""],
        methods: ["POST, GET"],
        credentials: true

    }
))

router.use(cors());
router.use(express.json());
router.use(express.static('public'));

// liste des routeurs
// router.get('/', (req, res) => res.status(200).json('coucou'));
// router.use('/api/restaurant', restaurantRouter);
router.use('/api/roles', rolesRouter);
router.use('/api/visitor', visitorRouter);
router.use('/api/product', productRouter);
router.use('/api/restaurant', restaurantRouter);

// https
const options = {
    key: await fs.readFile('ca/key.pem'),
    cert: await fs.readFile('ca/cert.pem'),
};

// const server =
//     process.env.NODE_ENV 
// https.createServer(options, app);
const server = process.env.NODE_ENV === "dev" ? https.createServer(options, app) : http.createServer(app);

export default server;