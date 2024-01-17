import { createContext, useReducer } from 'react';

const initialState = {
  cart: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case 'UPDATE_QUANTITY':
      const updatedCart = state.cart.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      return {
        ...state,
        cart: updatedCart,
      };

    case 'REMOVE_FROM_CART':
      const newCart = state.cart.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        cart: newCart,
      };

    default:
      return state;
  }
};

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);
  
    const add_to_cart = (product) => {
      dispatch({ type: 'ADD_TO_CART', payload: product });
    };
  
    const update_quantity = (id, newQuantity, maxQuantity) => {
      const quantity = Math.min(newQuantity, maxQuantity);
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
    };
  
    const remove_from_cart = (id) => {
      dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
    };
  
    return (
      <CartContext.Provider value={{ ...state, add_to_cart, update_quantity, remove_from_cart }}>
        {children}
      </CartContext.Provider>
    );
  };
  
  export { CartProvider, CartContext };