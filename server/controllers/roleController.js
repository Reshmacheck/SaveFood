import { getRole } from "../repositories/roleRepo.js";

const roles = (req, res) => {
    getRole().then(data => {
        return res.status(200).json({
            status: 200,
            message: "OK",
            data: data,      
        });
    })
}
export { roles }