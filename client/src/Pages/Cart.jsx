import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import HeaderVisitor from '../components/header/HeaderVisitor';
import "./cart.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
    const { cart, update_quantity, remove_from_cart } = useContext(CartContext);
  
    const handleQuantityChange = (id, newQuantity, maxQuantity) => {
      update_quantity(id, newQuantity, maxQuantity);
    };
  
    const handleRemoveFromCart = (id) => {
      remove_from_cart(id);
    };
  console.log(cart)
  
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <>
      <HeaderVisitor />
      <div>
        <h2 className="cart-title">Panier</h2>
        <ul className='panier-row'>
          {cart.map((item) => ( 
            <li key={item.id} className='panier-flex'>
              <p style={{ textTransform: 'capitalize' }} className='paragraph'>{item.nom}</p>
              <div className='quantite-flex'>
                <p className='paragraph'>Quantité:</p>
                 <input
                className='quantite-panier'
                type="number"
                value={item.quantity}
                onChange={(e) =>
                  handleQuantityChange(item.id, parseInt(e.target.value), item.availableQuantity)
                }
                max={item.availableQuantity}
                min='1'
                />
              
              </div>
              
              <p className='paragraph'>Prix: {item.price * item.quantity}€</p>
              <button className="delete-panier" onClick={() => handleRemoveFromCart(item.id)}>
                <FontAwesomeIcon
                  icon={faXmark}
                  style={{ color:'white',fontSize:'10px',padding:'0px' }}
                />
              </button>
            </li>
          ))}
          </ul>
          {cart.length > 0 && (
          <div className='panier-active'>
          <hr />
          <div className='somme'>
            <h3 className='total-title'>TOTAL:</h3>
            <p className='total'>{total}€</p>
          </div>
            
          
          
          <div className='button-reserver'>
            <button className='reserver-panier' >Réserver</button>
          </div>
          </div>
          )}
          </div>
         
       </> 
    );
  };
  
  export default Cart;