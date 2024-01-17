import { useContext } from 'react';
import { createProduct } from '../../service/api'
import { UserContext } from '../../context/UserContext';
import './FormProduct.css'
import { useNavigate } from 'react-router-dom';

const FormProduct = () => {
  const { user, setUser } = useContext(UserContext);
  console.log(user)
  const navigate = useNavigate()
  const handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("restaurant_id", user.restaurant_id);
    console.log(formData)
    try {
      const response = await createProduct(formData);
  
      // Vérifiez si la réponse a réussi (statut 200 OK)
      if (response.status === 200) {
        // Redirigez l'utilisateur vers la page "/product"
        navigate('/product');
      } else {
        // Gérez d'autres statuts de réponse si nécessaire
        console.log('La création du produit a échoué avec le statut :', response.status);
      }
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la création du produit :', error);
    }

  }

  
  return(
    <>
      <div className='flex-add-product'>
      <div className='add-product-form'>
        <div className='div-title-product'>
          <h2 className='title-product'>Ajouter un produit</h2>
        </div>
        
        <form className="" onSubmit={handleSubmit}      encType="multipart/form-data">
      
      <div className="group-product">
        <label htmlFor="user" className="label-product">
          Nom
        </label>
              <input
                // id="nom"
                type="text" className="input-product" name="nom" />
      </div>
      <div className="group-product">
        <label htmlFor="pass" className="label-product">
          Description
        </label>
        <input
          // id="apercu"
          type="text"
              className="input-product"
              id="description-product"
              name="apercu"
        />
      </div>
      <div className="group-product">
        <label htmlFor="imageUpload" className="label-product">
          Sélectionnez une image 
        </label>
              <input
                // id="imageUpload"
                type="file"
                className="input-product" name="image"
                accept="image/*"
                />
            </div>
          <div className="group-product">
        <label htmlFor="date" className="label-product">
          Date d'expiration 
        </label>
        <input id="" type="date" className="input-product" name="dateexpiration" />
      </div>
      <div className="group-product">
          <label htmlFor="date" className="label-product">
            Prix 
          </label>
          <input id="" type="number" className="input-product" name="price"
          step="0.01"
          min="0.01"
          pattern="^\d+(\.\d{1,2})?$"/>
        </div>
        <div className="group-product">
          <label htmlFor="date" className="label-product">
            Prix initial
          </label>
          <input id="" type="number" className="input-product" name="initial_price"
            step="0.01"
            min="0.01"
            pattern="^\d+(\.\d{1,2})?$" />
        </div>
        <div className="group-product">
          <label htmlFor="quantite" className="label-product">
            Quantité:
          </label>
          <input id="" type="number" className="input-product" name="quantity"
            min="1"
             />
        </div>
      <div className="button-add-product">
        <input type="submit" className="button-product-submit" defaultValue="Sign Up" />
        </div>
     
        </form>
      </div>
      </div>
      
    
    
    </>
  )
}
  
export default FormProduct

