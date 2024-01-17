import { getAllRestaurant, createOneRestaurant } from "../repositories/restaurantRepo.js";
import dbConnection from "../service/dbconnexion.js";

const allRestaurant = (req, res) => {
    getAllRestaurant().then(data => {
        return res.status(200).json({
            status: 200,
            message: "fine",
            data: data,
        });
    })
}

const createRestaurant = (req, res) => {
    createOneRestaurant(req.body).then(data => {
        return res.status(200).json({
            status: 200,
            message: "OK",
            data: data,
        })
       })
}


const updateRestaurant = async (req, res) => {
    try {
        const { nom, adresse, apercu, numero} = req.body
        const { id } = req.params
        const sql = "update restaurant set nom = ?, adresse = ?, apercu= ?, numero = ? where id = ?"
        const [rows, fields] = await dbConnection.query(sql, [nom, adresse, apercu, numero, id])
        res.json({
            status: 200,
            message: "updated succesfully",
            data: rows
        })
    } catch (error) {
        console.log(error);
        res.json({
            status: 500 ,
            message: "not updated"
        });
    } 
}

const restaurantById = async (req, res) => {
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


export { allRestaurant, createRestaurant, updateRestaurant }