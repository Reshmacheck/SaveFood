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

// const getVisitorById = async(data) => {
//     const sql = `SELECT visitor.* 
//     FROM savefood.vistor 
//     WHERE visitor.id = :id;
//     `
//     try {
        
//         const [results] = await dbConnection.execute(sql, data);
//         return results;
//     } catch (error) {
//         return error;
//     }

// };

const createOneVisitor = async (data) => {

    const transaction = dbConnection.beginTransaction();

    const sql = [
        {
            query: 'INSERT INTO savefood.visitor VALUES (NULL, :lastname, :email, :motdepasse, :ville, :role_id, NULL);',
            sqlData: data,
        },
    ];

    if (data.role_id == 3) {
        sql.push({
            query: 'SET @visitor = LAST_INSERT_ID();'
        });

        sql.push({
            query: 'INSERT INTO savefood.restaurant VALUES (NULL, NULL, NULL, NULL, NULL, NULL, NULL);',
        });

        sql.push({
            query: 'SET @restaurant = LAST_INSERT_ID();'
        });

        sql.push({
            query: 'UPDATE savefood.visitor SET visitor.restaurant_id = @restaurant WHERE visitor.id = @visitor;',
        });
    }

    // console.log(sql);

    let sqlPromises = [];

    sql.map(async(data) => sqlPromises.push( await dbConnection.execute(data.query, data?.sqlData)  ));

    // console.log(sqlPromises);

    try {
        await Promise.all(sqlPromises);
        await dbConnection.commit();
        return transaction;
    } catch (error) {
        await dbConnection.rollback();
        return error;
    }

};


export { getAllVisitor, createOneVisitor }