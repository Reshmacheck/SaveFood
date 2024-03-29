import { useContext, useEffect, useState } from "react";
import HeaderVisitor from "../components/header/HeaderVisitor"
import './visitorspace.css'
import { UserContext } from "../context/UserContext";
import { getAllProduct } from "../service/api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart} from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';


const Visitorspace = () => {

    const [product, setProduct] = useState([]);
    const navigate = useNavigate()
    const [error, setError] = useState(null);
    const { user, updateUserLikedProducts } = useContext(UserContext);

    useEffect(() => {
        // console.log(user);


        getAllProduct()
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
    
    

    const handleHeartClick = (index) => {
        const updatedProduct = [...product];
        updatedProduct[index].isLiked = !updatedProduct[index].isLiked;
        setProduct(updatedProduct);

        const likedProduct = updatedProduct[index];

         updateUserLikedProducts(likedProduct);
          
         navigate('/favoris')


    };
   
    

    if (error) {
        return <p>Error: {error}</p>;
    }
    

    return (
        <>
            <HeaderVisitor /> 
            <h2 className="produit">Nos Produits</h2>
                    

            <div className="flex-box">
                {product.map((p, index) => (
                
                    <div key={index}className="card">
                        <div className="img" style={{ backgroundImage: `url('https://localhost:3000/img/${p.image}')` }}>
                       
                        <h2  style={{ textTransform: 'capitalize' }} className="restaurantName">{p.restaurantName}</h2>
                        </div>
                    <div className="title">
                            <p style={{ textTransform: 'capitalize' }}className="nom">{p.nom}</p>
                            <p className="apercu">{p.apercu}</p>
                         <div className="description">
                          <p className="prix">{p.price}€</p>
                          <Link to={`/details/${p.id}`} className="button-product">
                           En savoir plus
                          </Link>
                         </div>
                            <FontAwesomeIcon
                                icon={faHeart}
                                style={{ color: p.isLiked ? '#ac0606' : 'white' }}
                                onClick={() => handleHeartClick(index)}
                            ></FontAwesomeIcon>
                     </div>
                </div>
                   ))}
                
            </div>
        </>
    )
}
 
export default Visitorspace