import { getAllProduct, createOneProduct } from "../repositories/productRepo.js"
import dbConnection from "../service/dbconnexion.js";
import fs from 'node:fs/promises';
import { getExtensionFromMimeType } from '../service/filesService.js';

const allProduct = (req, res) => {
    getAllProduct().then(data => {
        return res.status(200).json({
            status: 200,
            message: "OK",
            data: data,
        });
    })
}

const createProduct = async (req, res) => {
    console.log(req.body, req.files[0]);
    const files = req.files[0];
    const fullFileName = `${files.path}.${getExtensionFromMimeType(files.mimetype)}`;
    const fileName = `${files.filename}.${getExtensionFromMimeType(files.mimetype)}`;
    
    await fs.rename(files.path, fullFileName)

    req.body = { ...req.body, image: fileName }

    console.log(req.body)
   createOneProduct(req.body).then(data => {
       return res.status(200).json({
          status: 200,
          message: "created",
          data: data,
       });
   }) 
};


const productById = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows, fields] = await dbConnection.query("SELECT product.*, restaurant.nom as restaurantName, restaurant.adresse, restaurant.photo, restaurant.apercu as description, restaurant.numero FROM product JOIN restaurant ON restaurant.id = product.restaurant_id WHERE product.id = ?", [id]);
        res.json({
            data: rows,
            message : " select product succesfully by id"
            
        });
    } catch (error) {
        console.log(error);
        res.json({
            status: 500
        });
    }
};




const productByRestaurantId = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows, fields] = await dbConnection.query("select * from product where restaurant_id = ?", [id]);
        res.json({
            data: rows,
            message : " select product succesfully by restaurantId"
            
        });
    } catch (error) {
        console.log(error);
        res.json({
            status: 500,
            message : "error"
        });
    }
};




export { allProduct, createProduct, productByRestaurantId, productById };