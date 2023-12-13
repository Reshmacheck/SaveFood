import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {Link, useLocation} from 'react-router-dom'
import "./sideNav.css";
import { UserContext } from "../../context/UserContext";



const SideNav = () => {
    const { id } = useParams()
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
    console.log(user)
    const handleSubmitdelete= async (e) => {
        e.preventDefault();
        // const values = Object.fromEntries(new FormData(e.target));
        const requestInfos = new Request(`https://localhost:3000/api/visitor/${user.id}`, {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json',
          },
          // body: JSON.stringify(values),
        });
        const request = await fetch(requestInfos);
        const response = await request.json();
        
        // stocker le user dans le contexte
        if (response.status === 200) {
            setUser(response.data);
            // setdelete(true)
            navigate('/');
        }
        // console.log(response);
        
  }
  const location = useLocation();
  const getLinkClassName = (path) => { 
    return location.pathname.includes(path) ? 'active-link' : 'link';
  }
    return (
      <>
        <section className="side-nav">     
          <ul>
          <li>
            <Link to={`/uservisitor`}>
                {/* <a className="link"> Restaurant details</a> */}
                <a className={getLinkClassName(`/uservisitor`)}>Restaurant details</a>
            </Link>
          </li>
          <hr color="#104d4d"/>
          <li>
            <Link to={`/updatevisitor/${user.id}`} className={getLinkClassName(`/updatevisitor/${user.id}`)}>
              <a className={getLinkClassName(`/updatevisitor/${user.id}`)}>Update personal information</a>
            </Link>
          </li>
            <hr color="#104d4d" />
            <Link to={`/product`}>
          <li><a className={getLinkClassName(`/product`)}>Voir mes products ajouter</a></li>
          </Link> 
            <hr color="#104d4d" />
          <Link to={`/upd`}>
          <li><a className={getLinkClassName(`/upd`)}>Ajouter un produit</a></li>
            </Link> 
            <hr color="#104d4d"/>
          <Link to={`/upda`}>
          <li><a className={getLinkClassName(`/upda`)} onClick={handleSubmitdelete}>Delete my account</a></li>
           </Link>    
          </ul>
          </section>
       </>     
    )
}

export default SideNav