import dbConnection from "../service/dbconnexion.js";

const getAllRestaurant = async () => {
    const sql = `SELECT restaurant.*
        FROM savefood.restaurant;
    `
    try {
        const [results] = await dbConnection.execute(sql);
        return results;
    } catch (error){
        return error;
    }

};

const createOneRestaurant = async (data) => {
    const sql = `
       INSERT INTO savefood.restaurant VALUES (NULL, :nom, :email, :motdepasse :adress, :photo, :apercu, :numero, :status, :role_id);
       `;
    
    try {
        const [results] = await dbConnection.execute(sql, data);
        return results;
    } catch (error) {
        return error;
    }
};

export { getAllRestaurant, createOneRestaurant }
