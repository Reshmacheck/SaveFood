import dbConnection from "../service/dbconnexion.js";

const getAllProduct = async () => {
    const sql = ` SELECT product.*,restaurant.nom
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

const createOneProduct = async (data) => {
    const sql = `
       INSERT INTO savefood.product VALUES 
       (NULL, :nom, :apercu, :photo, :dateexpiration, :price, :initial_price, :quantity, :restaurant_id );
    `;

    try {
      const [results] = await dbConnection.execute(sql, data);
      return results;
   } catch (error){
     return error;
   } 
}

export { getAllProduct, createOneProduct}

