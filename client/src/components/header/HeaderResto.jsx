import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import Logout from '../deconnexion/Logout';
import "./headerVisitor.css";
import {Link} from 'react-router-dom'

const HeaderResto = () => {
    
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
                        <Link to="/Register" className="panier">
                            Contact
                        </Link>
                        <Link to="/"className="deconnexion" onClick={Logout}>
                            <FontAwesomeIcon icon={faRightFromBracket} />
                        </Link>
        
       
        
                    </div>
                </div>
            </nav>
        </header>


    </>
    



};
 
export  default HeaderResto