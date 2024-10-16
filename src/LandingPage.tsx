import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const headerStyle = {
    backgroundColor: darkMode ? '#2a2a4a' : '#f0e6ff',
  };

  const navLinkStyle = {
    padding: '10px 20px',
    borderRadius: '5px',
    textDecoration: 'none',
    color: darkMode ? 'white' : '#431880',
    backgroundColor: darkMode ? '#431880' : 'white',
    transition: 'all 0.3s ease',
    border: `2px solid ${darkMode ? '#9054e3' : '#431880'}`,
  };

  const cardStyle = {
    padding: '20px',
    borderRadius: '10px',
    transition: 'transform 0.3s',
  };

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      padding: 0,
      backgroundColor: darkMode ? '#1a1a2e' : '#ffffff',
      color: darkMode ? '#ffffff' : '#431880',
      transition: 'background-color 0.3s, color 0.3s',
    }}>
      <header style={headerStyle}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="/SocialeSafe.png" alt="Logo Social Safe" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
            <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#431880' }}>Social Safe</span>
          </div>
          <nav style={{ display: 'flex', gap: '10px' }}>
            <Link to="/" style={navLinkStyle}>Accueil</Link>
            <Link to="/about" style={navLinkStyle}>À propos</Link>
            <Link to="/contact" style={navLinkStyle}>Contact</Link>
            <button onClick={toggleDarkMode} style={{...navLinkStyle, cursor: 'pointer'}}>
              {darkMode ? '☀️' : '🌙'}
            </button>
          </nav>
        </div>
      </header>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <section style={{ textAlign: 'center', padding: '50px 0' }}>
          <h1 style={{ fontSize: '48px', marginBottom: '20px', color: darkMode ? '#ffffff' : '#431880' }}>Bienvenue sur Social Safe</h1>
          <p style={{ fontSize: '18px', maxWidth: '600px', margin: '0 auto', color: darkMode ? '#ffffff' : '#431880' }}>
            Votre plateforme d'apprentissage en ligne de confiance pour comprendre et naviguer dans les complexités des interactions sociales à l'ère numérique.
          </p>
        </section>

        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          <div style={{ ...cardStyle, backgroundColor: '#431880', color: 'white' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>Quiz +18 ans</h2>
            <p style={{ marginBottom: '20px' }}>
              Testez vos connaissances sur les sujets avancés de la sécurité en ligne, de la confidentialité et de la citoyenneté numérique. Adapté aux adultes et aux adolescents plus âgés.
            </p>
            <Link to="/article/18-plus" style={{...navLinkStyle, backgroundColor: 'white', color: '#431880', display: 'inline-block'}}>
              En savoir plus sur les dangers des réseaux sociaux
            </Link>
          </div>
          <div style={{ ...cardStyle, backgroundColor: '#9054e3', color: 'white' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>Quizz -18 ans</h2>
            <p style={{ marginBottom: '20px' }}>
              Apprenez la sécurité sur Internet, la prévention du cyberharcèlement et l'utilisation responsable des médias sociaux. Conçu pour les enfants et les jeunes adolescents.
            </p>
            <Link to="/article/moins-18" style={{...navLinkStyle, backgroundColor: 'white', color: '#9054e3', display: 'inline-block'}}>
              En savoir plus sur les dangers des réseaux sociaux
            </Link>
          </div>
        </section>

        <section style={{ marginTop: '50px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '30px', color: darkMode ? '#ffffff' : '#431880' }}>Pourquoi choisir Social Safe ?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            <div style={{ ...cardStyle, backgroundColor: 'rgba(67, 24, 128, 0.1)' }}>
              <h3 style={{ fontSize: '20px', marginBottom: '10px', color: '#431880' }}>Contenu adapté à l'âge</h3>
              <p>Des quiz spécialement conçus pour différents groupes d'âge, assurant un apprentissage pertinent et approprié.</p>
            </div>
            <div style={{ ...cardStyle, backgroundColor: 'rgba(144, 84, 227, 0.1)' }}>
              <h3 style={{ fontSize: '20px', marginBottom: '10px', color: '#9054e3' }}>Apprentissage interactif</h3>
              <p>Engagez-vous dans un apprentissage interactif qui rend l'éducation à la sécurité en ligne amusante et mémorable.</p>
            </div>
            <div style={{ ...cardStyle, backgroundColor: 'rgba(67, 24, 128, 0.1)' }}>
              <h3 style={{ fontSize: '20px', marginBottom: '10px', color: '#431880' }}>Mises à jour régulières</h3>
              <p>Contenu constamment mis à jour pour refléter les dernières tendances et menaces du monde numérique.</p>
            </div>
          </div>
        </section>
      </main>

      <footer style={{ textAlign: 'center', padding: '20px 0', borderTop: `1px solid ${darkMode ? '#2a2a4a' : '#eaeaea'}` }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: darkMode ? '#ffffff' : '#431880' }}>&copy; 2024 Social Safe. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}