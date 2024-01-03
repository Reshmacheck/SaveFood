import dbConnection from "../service/dbconnexion.js";

const getAllProduct = async () => {
    const sql = ` SELECT product.*,restaurant.nom as restaurantName, restaurant.adresse as restaurantAdresse, restaurant.photo as restoImage, restaurant.apercu as description, restaurant.numero as restoNumero
        FROM savefood.product
        JOIN savefood.restaurant
       ON product.restaurant_id = restaurant.id ;
    `
    try {
        const [results] = await dbConnection.execute(sql);
        return results;
    } catch (error){
        return error;
    }
};


// const getProductByRestaurantId = async (req, res) => {
//     try {
//         const {  restaurant_id } = req.params;
//         const [rows, fields] = await dbConnection.query("select product.* FROM savefood.product   WHERE restaurant_id = ?", [restaurant_id]);
//         return rows.length > 0 ? rows : null; 
        
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({
//             status: 500
//         });
//     }
// };

const createOneProduct = async (data) => {
    const sql = `
       INSERT INTO savefood.product VALUES 
       (NULL, :nom, :apercu, :image, :dateexpiration, :price, :initial_price, :quantity, :restaurant_id );
    `;

    try {
      const [results] = await dbConnection.execute(sql, data);
      return results;
   } catch (error){
     return error;
   } 
}

export { getAllProduct, createOneProduct}

