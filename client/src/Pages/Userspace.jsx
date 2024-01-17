import HeaderResto from "../components/header/HeaderResto";
import "./userspace.css"
// import { UserContext } from "context/UserContext";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import SideNav from "../components/sideNav/SideNav";
import { Link } from "react-router-dom";



const UserVisitor = () => {
    const { user, setUser } = useContext(UserContext);
    return (
        <>
            <HeaderResto /> 
            <div>
          <h1 className="username" style={{ margin: 10, textTransform: 'capitalize' }}> Hello {user?.lastname},</h1>
        </div>
            <div className="lolo">
            <SideNav/>
          <section className="details">
            <div style={{ display:'flex', flexDirection: 'column', alignItems: 'center'}}>
              <h2 className='title-product' style={{ paddingTop :'40px', paddingBottom :'10px'}}>Details du restaurant</h2>
            </div>
            
            <ul>
              <li>{user?.lastname}</li>
              <li>{user?.nom}</li>
              <li>{user?.apercu}</li>
              <li>{user?.adresse}</li>
              <li>{user?.email}</li>
              <li>{user?.numero}</li>
            </ul>
            <div className="update-restaurant-button">
              <Link to={`/restaurant/${user.restaurant_id}`} className="add-update-restaurant">Ajouter/Modifier</Link>
            </div>
            </section>
            </div>
        </>
    )
}
 
export default UserVisitor