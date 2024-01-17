import { useContext } from "react";
import FormProduct from "../components/product/FormProduct";
import { UserContext } from "../context/UserContext";
import SideNav from "../components/sideNav/SideNav";
import HeaderResto from "../components/header/HeaderResto";


const CreateProduct = () => {
    const { user, setUser } = useContext(UserContext);

    return (
        <>
            <HeaderResto /> 
            <div>
          <h1 style={{ margin: 10, textTransform: 'capitalize' }}> Hello {user?.lastname},</h1>
            </div>  
            <div className="lolo">
                <SideNav /> 
                <FormProduct/>
            </div>
        </>
    
    );
}

export default CreateProduct