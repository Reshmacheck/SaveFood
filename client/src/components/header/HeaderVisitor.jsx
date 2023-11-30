import "./headerVisitor.css";
// import bol from "../../assets/bol.jpg";
import {Link} from 'react-router-dom'


const HeaderVisitor = () => {
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
                <Link to="/Register">
                <a className="a-propos">A propos</a>
              </Link>
              <Link to="/Register">
                <a className="panier">Panier</a>
              </Link>
              <Link to="/Register">
                <a className="deconnexion">Déconnexion</a>
              </Link>
              
             
              
              </div>
            </div>
          </nav>
        </header>
    
    
    </>
      
          
      
};
  
export default HeaderVisitor