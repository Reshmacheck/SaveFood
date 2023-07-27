import { getVisitor, createOneVisitor } from "../repositories/visitorRepo.js"

const visitor = (req, res) => {
    getVisitor().then(data => {
        return res.status(200).json({
            status: 200,
            message: "OK",
            data: data, 
        });
    })
}

const createVisitor = (req, res) => {
    // const { lastname, firstname, email, motdepasse, adresse, role_id } = req.body;
    // console.log(lastname, firstname, email, motdepasse, adresse, role_id);

    createOneVisitor(req.body).then(data => {
        return res.status(200).json({
            status: 200,
            message: "OK",
            data: data, 
        });
    })
}

export { visitor, createVisitor };