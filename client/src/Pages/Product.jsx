
import React, { useState, useEffect, useContext } from "react";
import { getAllProduct } from "../service/api.jsx";
import HeaderVisitor from "../components/header/headerVisitor.jsx";
import { UserContext } from "../context/UserContext.jsx";
import "./product.css"
import SideNav from "../components/sideNav/SideNav.jsx";

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

   

    return (
        <>
            <HeaderVisitor />
            <div>
          <h1 style={{ margin: 10, textTransform: 'capitalize' }}> Hi {user.lastname}</h1>
            </div>
            <div className="lolo">
            <SideNav/>
            <section className="contenu">
            <ul>
                {product.map((p, index) => (
                    <li key={index}>{p.nom} {p.apercu} </li>
                ))}
            </ul>
                </section>
                </div>
      </>  
    );
};

export default AllProduct;
