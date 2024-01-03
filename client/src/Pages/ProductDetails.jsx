import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducById } from "../service/api";
import HeaderVisitor from "../components/header/HeaderVisitor";

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState([]);
    console.log(productId)
    useEffect(() => {
        getProducById(productId)
            .then((data) => {
                if (data && data.data) {
                    // console.log(data.data);
                    setProduct(data.data);
                    
                }
            })
            .catch((error) => {
                console.error(error);
                // Gérez l'erreur comme nécessaire
            });
    }, [productId]);

    console.log(product)

    return (<>
        <HeaderVisitor />
        <div className="productDetails">
            {product.map((p, index) => (
                <h1>lolo</h1>
            ))}
        </div>
    </>
    
    );


};
export default ProductDetails