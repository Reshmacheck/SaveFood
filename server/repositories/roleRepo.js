import dbConnection from "../service/dbconnexion.js";

const getRole = async () => {
    const sql = `
          SELECT role.*
          FROM  savefood.role;`
    
    try {
        const [results] = await dbConnection.execute(sql);
        return results;
    } catch (error) {
        return error;
    }
    
};

export { getRole } 