// import { createContext, useState } from "react";

// const UserContext = createContext();

// const UserProvider = ({ children }) => {
//     const [user, setUser] = useState(null);

//     return <UserContext.Provider value={{user, setUser}}>
//         { children }
//     </UserContext.Provider>
// }

// export { UserContext, UserProvider }


import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    // ... autres propriétés de l'utilisateur
    likedProducts: [],
  });

  const updateUserLikedProducts = (likedProduct) => {
    setUser((prevUser) => {
      // Assurez-vous que prevUser.likedProducts est une liste
      const likedProducts = Array.isArray(prevUser.likedProducts)
        ? prevUser.likedProducts
        : [];
  
      // Mettez à jour la liste des produits aimés
      return { ...prevUser, likedProducts: [...likedProducts, likedProduct] };
    });
  };

  return (
    <UserContext.Provider value={{ user, setUser, updateUserLikedProducts }}>
      {children}
    </UserContext.Provider>
  );
};