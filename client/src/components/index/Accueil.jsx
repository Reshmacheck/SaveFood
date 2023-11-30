import "./accueil.css";
import environnement from "../../assets/img/environnement.jpg";
import {Link} from 'react-router-dom'


const Accueil = () => {
    return <>
      <section className="image">
    <img className="header-image" src={environnement} alt="image de plante" />
    <p className="recherche">Luttons contre le gaspillage</p>
      </section>
    </>
};
export default Accueil