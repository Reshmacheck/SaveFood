import { useNavigate, useParams } from "react-router-dom";
import HeaderResto from "../components/header/HeaderResto";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import SideNav from "../components/sideNav/SideNav";
import axios from "axios";

// import "./register.css";


const Restaurant = () => {
    const { restaurantId } = useParams();
    console.log(restaurantId)
    const apiURL = import.meta.env.VITE_API_URL;
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate()

    const [values, setValues] = useState({
        nom: '',
        adresse: '',
        apercu: '',
        numero: ''
    })


    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put(`${apiURL}/restaurant/${restaurantId}`, values)
        .then(res => {
            console.log(res);
            // Vérifiez si la mise à jour a réussi (statut 200 OK)
            if (res.status === 200) {
                // Mettez à jour le contexte avec les nouvelles informations de l'utilisateur
                setUser((prevUser) => ({ ...prevUser, nom: values.nom, adresse: values.adresse, apercu: values.apercu, numero: values.numero }));

                // Naviguez vers la page souhaitée
                navigate(`/uservisitor`);
            } else {
                // Gérez d'autres statuts de réponse si nécessaire
                console.log('La mise à jour a échoué avec le statut :', res.status);
            }
        })
        .catch(err => console.log(err));
    }



    return (
        <>
            <HeaderResto />
            <div>
          <h1 style={{ margin: 10, textTransform: 'capitalize' }}> Hello {user.lastname},</h1>
        </div>
        <div className="lolo">
            <SideNav/>
            <section className="contenu">
            <form className="updateform" onSubmit={handleUpdate}>
            <h2 className="profil">Modifier/Ajouter un restaurant</h2>
            
            <div>
                <label className="label" htmlFor="">Nom du restaurant</label>
                <input className="inputuv" type="text" value={values.nom} onChange={e => setValues({...values, nom: e.target.value})} />
            </div>
            <div>
                <label className="label" htmlFor="">Apercu</label>
                <input className="inputuv"  type="text" value={values.apercu} onChange={e => setValues({...values, apercu: e.target.value})} />
            </div>
            <div className="password">
                <label className="label" htmlFor="">Adresse du restaurant</label>
                <input className="inputuv" type="text" value={values.adresse} onChange={e => setValues({...values, adresse: e.target.value})} />
            </div>
            <div>
                <label className="label" htmlFor="">Numéro du restaurant</label>
                <input className="inputuv" type="text" value={values.numero } onChange={e => setValues({...values, numero: e.target.value})} />
            </div>
            <button className="submit" type="submit">Submit</button>
        </form>
            </section>
            </div>
            
            
       </>     
    )
}
export default Restaurant