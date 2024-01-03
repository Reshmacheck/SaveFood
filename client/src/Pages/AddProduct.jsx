import { useContext } from "react";
import HeaderVisitor from "../components/header/HeaderVisitor";
import FormProduct from "../components/product/FormProduct";
import { UserContext } from "../context/UserContext";
import SideNav from "../components/sideNav/SideNav";

const CreateProduct = () => {
    const { user, setUser } = useContext(UserContext);

    return (
        <>
            <HeaderVisitor /> 
            <div>
          <h1 style={{ margin: 10, textTransform: 'capitalize' }}> Hi {user?.lastname}</h1>
            </div>  
            <div className="lolo">
                <SideNav /> 
                <FormProduct/>
            </div>
        </>
    
    );
}

export default CreateProduct