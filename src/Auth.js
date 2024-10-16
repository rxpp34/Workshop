import React, { useEffect } from "react";
import "./Assets/CSS/Auth.css"
import { useState } from "react";
import DATA from "./Data/User.json"
import { useNavigate } from "react-router-dom"; 
import Cookies from "js-cookie"; 


function App () {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [userInfo, setUserInfo] = useState(null);
  const navigation=useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = DATA.users.find(user => user.email === email);

    useEffect(() => { //Vérifier les cookies 
        const userCookie = Cookies.get('user');
        if (userCookie) {
            navigate("/home"); 
          }
    } , [])

    if (user) {
        // Si l'utilisateur existe, vérifie le mot de passe
        if (user.password === password) {
          setError(null)
          Cookies.set('Connected', 'True', { expires: 7 });
          navigation("/Quizz")
           
        } else {
          setError('Mot de passe incorrect');
        }
      } else {
        setError('Email ou mot de passe incorrect');
      }


  };

    return(
        <div className="login-container">
        <h2>SocialSafe</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="email"> Adresse mail </label>
                <input type="email" id="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required  
                placeholder="dupont@mail.com" />
            </div>

            <div className="form-group">
                <label htmlFor="password">Mot de passe</label>
                <input type="password" id="password"
                className="form-control" value={password}
                onChange={(e) => setPassword(e.target.value)} required placeholder="**********" />
            </div>
            {error && <p className="error-message" style={{ color: 'red' }}>{error}</p>}

            <button type="submit" className="btn btn-primary" style={{backgroundColor :'#9054e3'}}>  Login </button>
        </form>

        <p style={{textAlign : 'center', marginTop : '20px'}}> Pas de compte ? <span style={{textDecoration: 'underline', cursor : 'grap'}}> Inscrivez-vous dès maintenant ! </span></p>

        <p style={{textDecoration: 'underline', textAlign : 'center'}}> Mot de passe oublié. </p>
    </div>
    )
}


export default App ; 