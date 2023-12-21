import HeaderVisitor from "../components/header/headerVisitor";

const CreateProduct = () => {
    return (
        <>
            <HeaderVisitor /> 
            <div>
          <h1 style={{ margin: 10, textTransform: 'capitalize' }}> Hi {user.lastname}</h1>
            </div>  
            <div className="lolo">
            <SideNav/> 
            </div>
        </>
    
    );
}

export default CreateProduct