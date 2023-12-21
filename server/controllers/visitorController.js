import dbConnection from "../service/dbconnexion.js";
import { getAllVisitor, createOneVisitor } from "../repositories/visitorRepo.js"
import argon2 from "argon2";

const allVisitor = (req, res) => {
    getAllVisitor().then(data => {
        return res.status(200).json({
            status: 200,
            message: "OK",
            data: data, 
        });
    })
}




const createVisitor = async (req, res) => {
    // const { lastname, firstname, email, motdepasse, adresse, role_id } = req.body;
    // console.log(lastname, firstname, email, motdepasse, adresse, role_id);

    // console.log(req.body);

    const body = {...req.body, ville: req.body.ville === '' ? 'NULL' : req.body.ville, motdepasse: await argon2.hash(req.body.motdepasse) }

    createOneVisitor(body).then(data => {
        return res.status(200).json({
            status: 200,
            message: "OK",
            data: data, 
        });
    })
}

// const visitorById = (req, res) => {
//     getVisitorById().then(data => {
//         return res.status(200).json({
//             status: 200,
//             message: "OK",
//             data: data,
//         });
//     })

// }

const checkVisitorLogin = async (req, res) => {
    try {
        const { email, motdepasse } = req.body

        let [visitor] = await dbConnection.query("SELECT visitor.*, role.name AS role FROM visitor JOIN role ON role.id = visitor.role_id WHERE email = ?", [email]);
        
        if (visitor.length === 0) {
            return res.status(401).json({ message: 'non trouvé', status: 401 });
        }
        
        let isPasswordValid = await argon2.verify(visitor[0].motdepasse, motdepasse);
        // console.log(visitor);
        
        if (visitor[0].role === "restaurater") {
            // visitor = await dbConnection.query("SELECT visitor.*, role.name AS role FROM visitor JOIN role ON role.id = visitor.role_id  WHERE email = ?", [email]);
            visitor = await dbConnection.query("SELECT visitor.*, role.name AS role, restaurant.id AS restaurant_id, restaurant.nom, restaurant.adresse, restaurant.photo, restaurant.apercu, restaurant.numero, restaurant.status FROM visitor JOIN role ON role.id = visitor.role_id JOIN restaurant ON restaurant.id = visitor.restaurant_id WHERE email = ?", [email]);

            // console.log(visitor);

            isPasswordValid = await argon2.verify(visitor[0][0].motdepasse, motdepasse);
        }
        
        // console.log(visitor);
        // console.log(visitor[0].motdepasse, motdepasse);

        // console.log(isPasswordValid)
        if (isPasswordValid) {
            // console.log(visitor[0][0].role);
            // si restaurateur
            if (visitor[0][0]?.role === "restaurater") {
                return res.status(200).json({ message: 'Connexion réussie', status: 200, data: visitor.shift().shift()});
            }
            // Password is correct
            // si visitor
            return res.status(200).json({ message: 'Connexion réussie', status: 200, data: visitor.shift() });
        } else {
            // Password is incorrect
            return res.status(401).json({ message: 'Mot de passe incorrect', status: 401 });
        }
    } catch (error) {
        console.error('Error checking visitor login:', error);
        return res.status(400).json({ message: 'Erreur', status: 400 });
    }
}

const visitorById = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows, fields] = await dbConnection.query("select * from visitor where id = ?", [id]);
        res.json({
            data: rows,
            message : " select visitor succesfully by id"
            
        });
    } catch (error) {
        console.log(error);
        res.json({
            status: 500
        });
    }
};



const updateVisitor = async (req, res) => {
    
    try {
        const { lastname, email, motdepasse, ville, role_id } = req.body
        const { id } = req.params
        const sql = "update visitor set lastname = ?, email = ?, motdepasse = ?, ville = ?, role_id = ? where id = ?"
        const [rows, fields] = await dbConnection.query(sql, [lastname, email, motdepasse, ville, role_id, id])
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
};

const deleteVisitor = async (req, res) => {
    try { 
        const { id } = req.params
        const [rows, fields] = await dbConnection.query("delete from visitor where id = ?", [id])
        res.json({
            data: rows,
            status: 200,
            message: "delete succecfully"
        })
    } catch (error) {
        console.log(error);
        res.json({
            status: 500,
            message: "erreur interne server"
            
        });  
    }
}

export { allVisitor, createVisitor, checkVisitorLogin, visitorById, updateVisitor, deleteVisitor };