import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import HeaderVisitor from '../components/header/HeaderVisitor';
// Assurez-vous de fournir le chemin correct

const Favoris = () => {
  const { user } = useContext(UserContext);
  console.log(user)
  
  return (
    <>
      <HeaderVisitor /> 
    <div>
      <h2>Favoris</h2>
      <div className="flex-box">
        {user.likedProducts.length > 0 ? (
          user.likedProducts.map((product) => (
            <div key={product.id} className="card">
              <div className="img" style={{ backgroundImage: `url('https://localhost:3000/img/${product.image}')`}}>
                <h2 style={{ textTransform: 'capitalize' }} className="restaurantName">
                  {product.restaurantName}
                </h2>
              </div>
              <div className="title">
                <p style={{ textTransform: 'capitalize' }} className="nom">
                  {product.name}
                </p>
                <p className="apercu">{product.description}</p>
                <div className="description">
                  <p className="prix">{product.price}€</p>
                  {/* Ajoutez d'autres détails du produit si nécessaire */}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Aucun produit aimé pour le moment.</p>
        )}
      </div>
    </div>

    </>
  );
};

export default Favoris;