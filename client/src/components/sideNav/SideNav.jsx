import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {Link, useLocation} from 'react-router-dom'
import "./sideNav.css";
import { UserContext } from "../../context/UserContext";

const apiURL = import.meta.env.VITE_API_URL;

const SideNav = () => {
    const { id } = useParams()
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
    console.log(user)
    const handleSubmitdelete= async (e) => {
        e.preventDefault();
        // const values = Object.fromEntries(new FormData(e.target));
        const requestInfos = new Request(`${apiURL}/visitor/${user?.id}`, {
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
            <Link to={`/uservisitor`} className={getLinkClassName(`/uservisitor`)}>
                {/* <a className="link"> Restaurant details</a> */}
                Restaurant details
            </Link>
          </li>
          <hr color="#104d4d"/>
          <li>
            <Link to={`/updatevisitor/${user?.id}`} className={getLinkClassName(`/updatevisitor/${user?.id}`)}>
              Modifiée les données personnelles
            </Link>
          </li>
            <hr color="#104d4d" />
           
          <li> <Link to={`/product`} className={getLinkClassName(`/product`)}>Voir mes products ajouter</Link> </li>
          
            <hr color="#104d4d" />
         
          <li> <Link to={`/createproduct`} className={getLinkClassName(`/createproduct`)}>Ajouter un produit</Link> </li>
            
            <hr color="#104d4d"/>
        
          <li>  <Link to={`/upda`} className={getLinkClassName(`/upda`)} onClick={handleSubmitdelete}>Delete my account </Link> </li>
             
          </ul>
          </section>
       </>     
    )
}

export default SideNav