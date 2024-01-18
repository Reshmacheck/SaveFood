import { useContext } from "react";
import "./headerVisitor.css";
// import bol from "../../assets/bol.jpg";
import {Link, useNavigate} from 'react-router-dom'
import { UserContext } from "../../context/UserContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import Logout from "../deconnexion/Logout";
import { CartContext } from '../../context/CartContext';


const HeaderVisitor = () => {

  // const { user, setUser } = useContext(UserContext);
  // const navigate = useNavigate()

  // const logout = () => {   
  //       setUser(null)
  //       navigate('/') }
  const { cart } = useContext(CartContext);

  return <>
    
          <header className="header">
          <nav>
            <div className="nav">
              <input type="checkbox" id="nav-check" />
              <div className="nav-header">
                <a href="/">
                  <h1 className="nav-title">SaveFood</h1>
                </a>
              </div>
              <div className="nav-btn">
                <label htmlFor="nav-check">
                  <span />
                  <span />
                  <span />
                </label>
              </div>
              <div className="nav-links">
                <Link to="/visitor" className="acceuil">
                Acceuil
              </Link>
              
            <Link to="/favoris" className="panier">
                Favoris
            </Link>
            <Link to="/cart" className="shopping">
              <FontAwesomeIcon icon={faCartShopping} />
              <p>({cart.length})</p>
            </Link>
            
              <Link to="/" className="deconnexion" onClick={Logout}>
              <FontAwesomeIcon icon={faRightFromBracket} />
              </Link>
              
             
              
              </div>
            </div>
          </nav>
        </header>
    
    
    </>
      
          
      
};
  
export default HeaderVisitor