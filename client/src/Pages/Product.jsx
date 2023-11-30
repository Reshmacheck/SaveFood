// import { useState, useEffect } from "react";
// import { getAllProduct } from "../service/api.jsx";


// const AllProduct = () => {
//     const [product, setProduct] = useState([]);


//     useEffect(() => {
//         getAllProduct()
//             .then((data) => {
//                 if (data && data.data) {
//                     console.log(data.data[0])
//                     setProduct(data.data);
//                 }
//             })
//             .catch((error) => {
//                 console.error(error);
//             });
//     }, []);

//     return (
//         <div>
//             <h1>hello product is here</h1>
//             <p>Voici vos liste de product:{product[0]}</p>

//         </div>

//     )
   
// }
// export default AllProduct


import React, { useState, useEffect, useContext } from "react";
import { getAllProduct } from "../service/api.jsx";
import HeaderVisitor from "../components/header/headerVisitor.jsx";
import { UserContext } from "../context/UserContext.jsx";

const AllProduct = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        // console.log(user);
        getAllProduct()
            
            .then((data) => {
                if (data && data.data) {
                    // console.log(data.data);
                    setProduct(data.data);
                    setLoading(false);
                }
            })
            .catch((error) => {
                // console.error(error);
                setError("An error occurred while fetching the data.");
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    <HeaderVisitor />

    return (
        <div>
            <h1>Hello { user.lastname }, products are here</h1>
            <ul>
                {product.map((p, index) => (
                    <li key={index}>{p.nom} {p.apercu} </li>
                ))}
            </ul>
        </div>
    );
};

export default AllProduct;
