import HeaderVisitor from "../components/header/headerVisitor";
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
          <h1 style={{ margin: 10, textTransform: 'capitalize' }}> Hi {user.lastname}</h1>
        </div>
            <div className="lolo">
            <SideNav/>
            <section className="contenu">
          <p >Restaurant details</p>
            </section>
            </div>
        </>
    )
}
 
export default UserVisitor