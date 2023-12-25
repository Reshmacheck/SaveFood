
import React, { useState, useEffect, useContext } from "react";
import { getProducByRestaurantId } from "../service/api.jsx";
// import HeaderVisitor from "../components/header/headerVisitor.jsx";
import { UserContext } from "../context/UserContext.jsx";
import "./product.css"
import SideNav from "../components/sideNav/SideNav.jsx";
import HeaderVisitor from "../components/header/HeaderVisitor.jsx";

const AllProduct = () => {
    const [product, setProduct] = useState([]);

    const [error, setError] = useState(null);
    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        // console.log(user);


        getProducByRestaurantId(user)
            .then((data) => {
                if (data && data.data) {
                    // console.log(data.data);
                    setProduct(data.data);
                    
                }
            })
            .catch((error) => {
                // console.error(error);
                setError("An error occurred while fetching the data.");
                
            });
    }, []);

   

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
            <section className="product-add">
            <div className="paading-product">
               {product.map((p, index) => (
             <div key={index} className="product-box">
               <div>
                  <img src={p.photo} alt={p.nom} className="product-image" />
               </div>
         
               <div className="product-details">
                 <h3 className="product-name">{p.nom}</h3>
                 <p className="product-preview">{p.apercu}</p>
                 <button className="more-info-button" onClick={() => handleMoreInfoClick(p)}>En savoir plus</button>
              </div>
             </div>
              ))}
            </div>
            </section>
            </div>
            <footer>
                <h2>POPO</h2>
            </footer>
      </>  
    );
};

export default AllProduct;
