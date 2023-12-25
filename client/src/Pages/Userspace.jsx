import HeaderVisitor from "../components/header/HeaderVisitor";
import "./userspace.css"
// import { UserContext } from "context/UserContext";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import SideNav from "../components/sideNav/SideNav";



const UserVisitor = () => {
    const { user, setUser } = useContext(UserContext);
    return (
        <>
            <HeaderVisitor /> 
            <div>
          <h1 className="username" style={{ margin: 10, textTransform: 'capitalize' }}> Hello {user?.lastname},</h1>
        </div>
            <div className="lolo">
            <SideNav/>
            <section className="details">
            <p style={{ color: '#104d4d', textAlign:'center'}} >Restaurant details</p>
            <ul>
              <li>{user?.lastname}</li>
              <li>{user?.nom}</li>
              <li>{user?.apercu}</li>
              <li>{user?.adresse}</li>
              <li>{user?.email}</li>
              <li>{user?.numero}</li>
            </ul>
            </section>
            </div>
        </>
    )
}
 
export default UserVisitor