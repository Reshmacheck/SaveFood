import "./accueil.css";
import environnement from "../../assets/img/environnement.jpg";
import secondwindow from "../../assets/img/secondwindow.jpg"
import {Link} from 'react-router-dom'
import { useEffect, useState } from "react";


const Accueil = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
    };
  }, []);

  const imageUrl = windowWidth >= 800 ? environnement : secondwindow;
  
    return <>
      <section className="image">
    <img className="header-image" src={imageUrl} alt="image de plante" />
    <p className="recherche">Luttons contre le gaspillage alimentaire</p>
      </section>
    </>
};
export default Accueil