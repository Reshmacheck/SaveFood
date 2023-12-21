import "./header.css";
// import bol from "../../assets/bol.jpg";
import {Link} from 'react-router-dom'


const Header = () => {
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
              <Link to="/Register" className="a-propos">
              A propos
            </Link>
            <Link to="/Register" className="connexion">
              Connexion
            </Link>
            <Link to="/Contact" className="contact">
              Contact
            </Link>
            
           
            
            </div>
          </div>
        </nav>
      </header>
  
  
  </>
    
        
    
};
export default Header