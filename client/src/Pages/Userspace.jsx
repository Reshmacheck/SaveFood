import { useContext } from "react";
import Header from "../components/header/Header"
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const UserVisitor = () => {
    const { id } = useParams()
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
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
    return (
      <>
        <Header />
        <div>
          <h2>My CRUD App</h2>
         </div>
        <p>Hi i am the {user.lastname} </p>
        
            <button onClick={handleSubmitdelete}>delete my account</button>
                       
            
       </>     
    )
}

export default UserVisitor