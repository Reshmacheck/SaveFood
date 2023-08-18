import { getAllRestaurant, createOneRestaurant } from "../repositories/restaurantRepo.js";


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
export { allRestaurant, createRestaurant }