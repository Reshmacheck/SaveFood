import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import axios from 'axios';
// import HeaderVisitor from "../components/header/headerVisitor";
import SideNav from "../components/sideNav/SideNav";
import "./updateVisitor.css"
import HeaderResto from "../components/header/HeaderResto";


const UpdateVisitor = () => {
    const apiURL = import.meta.env.VITE_API_URL;
    const { user, setUser } = useContext(UserContext);
    const { id } = useParams();
    const navigate = useNavigate
    useEffect(() => {
        axios.get(`${apiURL}/visitor/${user.id}`)
            .then(res => {
                console.log(res)
                setValues({
                    ...values,
                    lastname: res.data.data[0].lastname,
                    email: res.data.data[0].email,
                    motdepasse: res.data.data[0].motdepasse,
                    ville: res.data.data[0].ville,
                    role_id: res.data.data[0].role_id
                });
            })
        .catch(err => console.log(err))
    }, [])

    const [values, setValues] = useState({
        lastname: '',
        email: '',
        motdepasse: '',
        ville: '',
        role_id: user.role_id
    })

    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put(`${apiURL}/visitor/${user.id}`, values)
        .then(res => {
            console.log(res);
            // Vérifiez si la mise à jour a réussi (statut 200 OK)
            if (res.status === 200) {
                // Mettez à jour le contexte avec les nouvelles informations de l'utilisateur
                setUser((prevUser) => ({ ...prevUser, lastname: values.lastname, email: values.email, ville: values.ville }));

                // Naviguez vers la page souhaitée
                navigate(`/uservisitor`);
            } else {
                // Gérez d'autres statuts de réponse si nécessaire
                console.log('La mise à jour a échoué avec le statut :', res.status);
            }
        })
        .catch(err => console.log(err));
    }

    return (<>
        <HeaderResto /> 
        <div>
          <h1 style={{ margin: 10, textTransform: 'capitalize' }}> Hello {user.lastname},</h1>
        </div>
        <div className="lolo">
            <SideNav/>
            <section className="contenu">
            <form className="updateform" onSubmit={handleUpdate}>
            <h2 className="profil">Profil</h2>
            
            <div>
                <label className="label" htmlFor="">Nom</label>
                <input className="inputuv" type="text" value={values.lastname} onChange={e => setValues({...values, lastname: e.target.value})} />
            </div>
            <div>
                <label className="label" htmlFor="">Email</label>
                <input className="inputuv"  type="email" value={values.email} onChange={e => setValues({...values, email: e.target.value})} />
            </div>
            <div className="password">
                <label className="label" htmlFor="">Mot de passe</label>
                <input className="inputuv" type="password" value={values.motdepasse} onChange={e => setValues({...values, motdepasse: e.target.value})} />
            </div>
            <div>
                <label className="label" htmlFor="">Ville</label>
                <input className="inputuv" type="text" value={values.ville } onChange={e => setValues({...values, ville: e.target.value})} />
            </div>
            <button className="submit" type="submit">Submit</button>
        </form>
            </section>
            </div>
        
    </>)
}

export default UpdateVisitor
