import { getAllProduct, createOneProduct } from "../repositories/productRepo.js"

const allProduct = (req, res) => {
    getAllProduct().then(data => {
        return res.status(200).json({
            status: 200,
            message: "OK",
            data: data,
        });
    })
}

const createProduct = (req, res) => {
      console.log(req.body)
   createOneProduct(req.body).then(data => {
       return res.status(200).json({
          status: 200,
          message: "OK",
          data: data,
       });
   }) 
}




export { allProduct, createProduct };