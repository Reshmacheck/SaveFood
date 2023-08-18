import dbConnection from "../service/dbconnexion.js";

const getAllVisitor = async () => {
    const sql = `SELECT visitor.*,role.name
        FROM savefood.visitor 
        JOIN savefood.role 
        ON role.id = visitor.role_id;
    `
 
    try {
        const [results] = await dbConnection.execute(sql);
        return results;
    } catch (error){
        return error;
    }
};

const createOneVisitor = async (data) => {
    const sql = `
        INSERT INTO savefood.visitor VALUES
        (NULL, :lastname, :firstname, :email, :motdepasse, :adresse, :role_id);
    `;
 
    try {
        const [results] = await dbConnection.execute(sql, data);
        return results;
    } catch (error){
        return error;
    }
};


export { getAllVisitor, createOneVisitor}