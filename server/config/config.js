import * as dotenv from 'dotenv';
import multer from 'multer';

const upload = multer({ dest: 'public/img' })
dotenv.config();

const config = {
    environment: process.env.NODE_ENV,
    db: {
        host: process.env.DB_HOST,
        name: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
    },
    multer: upload
};



export default config;
