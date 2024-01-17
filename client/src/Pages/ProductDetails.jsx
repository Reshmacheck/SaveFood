import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams, } from "react-router-dom";
import { getProducById } from "../service/api";
import HeaderVisitor from "../components/header/HeaderVisitor";
import "./productDetails.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faHeart, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from '../context/CartContext';


const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState([]);
    console.log(productId)
    const [quantity, setQuantity] = useState(1);
    const { add_to_cart } = useContext(CartContext);
    const navigate = useNavigate();


    const extractDayAndMonth = (dateString) => {
        const options = { day: 'numeric', month: 'long' };
        const dayAndMonth = new Date(dateString).toLocaleDateString('fr-FR', options);
        return dayAndMonth;
    };

    const generateQuantityOptions = () => {
        const options = [];
        for (let i = 1; i <= product[0]?.quantity; i++) {
          options.push(<option key={i} value={i}>{i}</option>);
        }
        return options;
    };
    
    const addToCart = () => {
        const selectedProduct = { ...product[0], quantity, availableQuantity: product[0]?.quantity };
        add_to_cart(selectedProduct);
        navigate('/cart');
      };
    

      useEffect(() => {
        getProducById(productId)
          .then((data) => {
            if (data && data.data) {
              setProduct(data.data);
            }
          })
          .catch((error) => {
            console.error(error);
            // Handle the error as needed
          });
      }, [productId]);


      return (
        <>
          <HeaderVisitor />
          <div className="productDetails">
            {product.map((p, index) => (
              <div key={index} className="productWrapper">
                <section className="image">
                  <img className="image-image" src={`https://localhost:3000/img/${p.image}`} alt="" />
                  <h2 className="nameresto">{p.restaurantName}</h2>
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="heart"
                    style={{ color: p.isLiked ? '#ac0606' : 'white' }}
                    onClick={() => handleHeartClick(index)}
                  ></FontAwesomeIcon>
                </section>
                <section className="description_product">
                  <div className="center">
                    <h2 className="restonom">{p.restaurantName}</h2>
                    <div className="display-flex">
                      <h3
                        className="title-product"
                        style={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '13px' }}
                      >
                        {p.nom}
                      </h3>
                      <div>
                        <p style={{ fontSize: '12px', fontWeight: '600' }}>
                          <strike>{p.initial_price}€</strike>
                        </p>
                        <p className="prix" style={{ color: '#104d4d' }}>
                          {p.price}€
                        </p>
                      </div>
                    </div>
                    <div className="time">
                      <FontAwesomeIcon icon={faClock} />
                      <p className="date">Recupérer le {extractDayAndMonth(p.dateexpiration)} à 10:00</p>
                    </div>
                    <div className="location">
                      <FontAwesomeIcon icon={faLocationDot} />
                      <p className="adresse">{p.adresse}</p>
                    </div>
                    <hr />
                    <div>
                      <p className="description">Ce que vous avez la possibilité d'obtenir</p>
                      <p className="apercu_produit" style={{ textTransform: 'capitalize' }}>
                        {p.apercu}
                      </p>
                    </div>
                    <hr />
                    <div className="quantity">
                      <p className="count">Quantité:</p>
                      <select
                        value={quantity}
                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                      >
                        {generateQuantityOptions()}
                      </select>
                    </div>
                    <div className="likediv">
                      <p className="like">Like si cette article vous a plu :</p>
                      <FontAwesomeIcon
                        icon={faHeart}
                        className="heart-e"
                        style={{ color: p.isLiked ? '#ac0606' : 'white' }}
                        onClick={() => handleHeartClick(index)}
                      ></FontAwesomeIcon>
                    </div>
                    <div className="reserver">
                      <button className="button-product-id" onClick={addToCart}>
                        Ajouter au panier
                      </button>
                    </div>
                  </div>
                </section>
              </div>
            ))}
          </div>
        </>
      );


};
export default ProductDetails