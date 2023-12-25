import { useContext } from "react";
import "./form.css";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const Form = () => {

  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const apiURL = import.meta.env.VITE_API_URL;

  const handleSubmitSignup = async (e) => {
    e.preventDefault();
    const values = Object.fromEntries(new FormData(e.target));
    const requestInfos = new Request(`${apiURL}/visitor/signup`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
    const request = await fetch(requestInfos);
    const response = await request.json();
    
    // console.log(response);

    if (response.status === 200) {
      setUser(response.data);
      navigate('/');
    }
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    const values = Object.fromEntries(new FormData(e.target));
    const requestInfos = new Request(`${apiURL}/visitor/login`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
    const request = await fetch(requestInfos);
    const response = await request.json();
    
    // stocker le user dans le contexte
    if (response.status === 200) {
      setUser(response.data);
      const roleId = response.data.role_id
      if (roleId === 3) {
        navigate(`/uservisitor`); 
      }
      if (roleId === 1) {
        navigate(`/visitor`); 
        
      }
    }
    // console.log(response);
    
  }


    return <>
         <div className="login-wrap">
  <div className="login-html">
    <input
      id="tab-1"
      type="radio"
      name="tab"
      className="sign-in"
      defaultChecked={true}
    />
    <label htmlFor="tab-1" className="tab">
      Se connecter
    </label>
    <input id="tab-2" type="radio" name="tab" className="sign-up" />
    <label htmlFor="tab-2" className="tab">
      S'inscrire
    </label>
    <div className="login-form">
      <form className="sign-in-htm" onSubmit={handleSubmitLogin}>
        <div className="group">
          <label htmlFor="user" className="label">
            Email
          </label>
          <input id="user" type="text" className="input" name="email" required/>
        </div>
        <div className="group">
          <label htmlFor="pass" className="label">
            Mot de passe
          </label>
          <input
            id="pass"
            type="password"
            className="input"
                  data-type="password"
                  name="motdepasse"
                  required
          />
        </div>
        <div className="group">
          <input
            id="check"
            type="checkbox"
            className="check"
                  defaultChecked=""
                  name="connected"
          />
          <label htmlFor="check">
            <span className="icon" /> Rester connecter
          </label>
        </div>
        <div className="group">
          <input type="submit" className="button" defaultValue="Sign In" />
        </div>
        <div className="hr" />
        <div className="foot-lnk">
          <a href="#forgot">Mot de passe oublié?</a>
        </div>
      </form>

            



      <form className="sign-up-htm" onSubmit={handleSubmitSignup}>
        <div className="group">
          <label htmlFor="user-role" className="label">
            Je suis :
          </label>
          <div>
            <input
              type="radio"
              id="visiteur"
              name="role_id"
                    // defaultValue="email"
                    value="1"
                    required
            />
            <label htmlFor="contactChoice1" className="role">
              Visiteur
            </label>
            <input
              type="radio"
              id="Restaurateur"
              name="role_id"
              // defaultValue="telephone"
                    value="3"
            />
            <label htmlFor="contactChoice2" className="role">
              Restaurateur
            </label>
          </div>
        </div>
        <div className="group">
          <label htmlFor="user" className="label">
            Nom
          </label>
                <input
                  // id="user"
                  type="text" className="input" name="lastname" required />
        </div>
        <div className="group">
          <label htmlFor="pass" className="label">
            Mot de passe
          </label>
          <input
            // id="pass"
            type="password"
            className="input"
                  data-type="password"
                  name="motdepasse"
                  required
          />
        </div>
        {/* <div className="group">
          <label htmlFor="pass" className="label">
            Confirmée le mot de passe
          </label>
          <input
            id="pass"
            type="password"
            className="input"
            data-type="password"
          />
        </div> */}
        <div className="group">
          <label htmlFor="pass" className="label">
            Adresse email 
          </label>
                <input
                  // id="pass"
                  type="text"
                  className="input" name="email" required />
              </div>
            <div className="group">
          <label htmlFor="pass" className="label">
            Ville 
          </label>
          <input id="ville" type="text" className="input" name="ville" />
        </div>
        <div className="group">
          <input type="submit" className="button" defaultValue="Sign Up" />
        </div>
        <div className="hr" />
        <div className="foot-lnk">
          <label htmlFor="tab-1">Déj Membre?</label>
        </div>
      </form>
    </div>
  </div>
</div>
    </>
      
          
      
};
  
  export default Form
