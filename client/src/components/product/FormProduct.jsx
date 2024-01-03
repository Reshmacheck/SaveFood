import { useContext } from 'react';
import { createProduct } from '../../service/api'
import { UserContext } from '../../context/UserContext';

const FormProduct = () => {
  const { user, setUser } = useContext(UserContext);
  console.log(user)
  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("restaurant_id", user.restaurant_id);
    console.log(formData)
    createProduct(formData);
  }

  
  return(
  <>
    <form className="" onSubmit={handleSubmit} encType="multipart/form-data">
      
      <div className="group">
        <label htmlFor="user" className="label">
          Nom
        </label>
              <input
                // id="nom"
                type="text" className="input" name="nom" />
      </div>
      <div className="group">
        <label htmlFor="pass" className="label">
          Description
        </label>
        <input
          // id="apercu"
          type="text"
          className="input"
                name="apercu"
        />
      </div>
      <div className="group">
        <label htmlFor="imageUpload" className="label">
          Sélectionnez une image 
        </label>
              <input
                // id="imageUpload"
                type="file"
                className="input" name="image"
                accept="image/*"
                />
            </div>
          <div className="group">
        <label htmlFor="date" className="label">
          Date d'expiration 
        </label>
        <input id="" type="date" className="input" name="dateexpiration" />
      </div>
      <div className="group">
          <label htmlFor="date" className="label">
            Prix 
          </label>
          <input id="" type="number" className="input" name="price"
          step="0.01"
          min="0.01"
          pattern="^\d+(\.\d{1,2})?$"/>
        </div>
        <div className="group">
          <label htmlFor="date" className="label">
            Prix initial
          </label>
          <input id="" type="number" className="input" name="initial_price"
            step="0.01"
            min="0.01"
            pattern="^\d+(\.\d{1,2})?$" />
        </div>
        <div className="group">
          <label htmlFor="quantite" className="label">
            Quantité:
          </label>
          <input id="" type="number" className="input" name="quantity"
            min="1"
             />
        </div>
      <div className="group">
        <input type="submit" className="button" defaultValue="Sign Up" />
        </div>
     
    </form>
    
    </>
  )
}
  
export default FormProduct

