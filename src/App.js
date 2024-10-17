import React, { useState } from 'react';

// Style pour les liens de navigation
const navLinkStyle = {
  textDecoration: 'none',
  color: '#fff', // Couleur blanche pour les liens dans le header
  fontSize: '18px',
  fontWeight: 'bold',
  whiteSpace: 'nowrap', // Assurer que les liens restent sur une seule ligne
};

// Style pour le header
const headerStyle = {
  backgroundColor: '#9054e3', // Mise à jour de la couleur du header
  width: '100vw',
  padding: '20px 0',
  boxSizing: 'border-box',
  position: 'sticky',
  top: '0',
  zIndex: '100',
};

// Style pour le footer
const footerStyle = {
  backgroundColor: '#431880',
  color: '#fff',
  textAlign: 'center',
  padding: '20px 0',
  width: '100vw',
  position: 'fixed',
  bottom: '0',
};

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div style={{ backgroundColor: darkMode ? '#1a1a2e' : '#f9f9f9', width: '100vw', height: '100vh', margin: '0', padding: '0' }}>
      {/* Header */}
      <header style={headerStyle}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="/SocialeSafe.png" alt="Logo Social Safe" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
            <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#fff' }}>Social Safe</span> {/* Couleur blanche */}
          </div>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '20px' }}> {/* Ajustement pour aligner les liens avec le bouton dark mode */}
            <a href="#" style={navLinkStyle}>Accueil</a>
            <a href="#" style={navLinkStyle}>À propos</a>
            <a href="#" style={navLinkStyle}>Contact</a>
            <button onClick={toggleDarkMode} style={{ 
              ...navLinkStyle, 
              cursor: 'pointer', 
              background: 'none', 
              border: 'none', 
              padding: '0',
              marginLeft: '10px' // Ajustement pour éviter que le bouton soit trop à droite
            }}>
              {darkMode ? '☀️' : '🌙'}
            </button>
          </nav>
        </div>
      </header>

      {/* Body */}
      <main style={{ padding: '20px', maxWidth: '1400px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', color: '#431880' }}>Bienvenue sur Social Safe</h1>
        <p style={{ textAlign: 'center', color: darkMode ? '#fff' : '#000' }}>
          Votre plateforme d'apprentissage en ligne de confiance pour comprendre et naviguer dans les complexités des interactions sociales à l'ère numérique.
        </p>
        {/* Ajout d'une marge supérieure pour espacer le texte des cartes */}
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '40px' }}> {/* Augmenter la marge ici */}
          <div style={{ 
            backgroundColor: '#431880', 
            padding: '20px', 
            borderRadius: '8px', 
            color: '#fff', 
            width: '45%', 
            textAlign: 'center', // Centrer tout le contenu
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between', // Alignement vertical
            alignItems: 'center', // Centrer horizontalement le contenu
          }}>
            <div style={{ maxWidth: '90%' }}> {/* Limiter la largeur du texte */}
              <h3>Quiz +18 ans</h3>
              <p>
                Testez vos connaissances sur les sujets avancés de la sécurité en ligne, de la confidentialité et de la citoyenneté numérique. Adapté aux adultes et aux adolescents plus âgés.
              </p>
            </div>
            <div style={{ marginTop: '20px', width: '100%' }}> {/* Ajuster la largeur ici */}
              <a href="/PreQuizz" style={{ // Ajout de l'élément <a> pour le lien
                padding: '10px 20px', 
                backgroundColor: '#fff', 
                color: '#431880', 
                border: 'none', 
                borderRadius: '5px', 
                cursor: 'pointer', 
                display: 'inline-block', // Changer le display pour être un lien
                width: '80%', // Largeur uniforme pour les boutons
                maxWidth: '300px', // Largeur maximale pour éviter qu'ils soient trop larges
                textAlign: 'center' // Centrer le texte du lien
              }}>
                Commencer le Quiz +18 ans
              </a>
            </div>
          </div>
          <div style={{ 
            backgroundColor: '#9c4ccf', 
            padding: '20px', 
            borderRadius: '8px', 
            color: '#fff', 
            width: '45%', 
            textAlign: 'center', // Centrer tout le contenu
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between', // Alignement vertical
            alignItems: 'center', // Centrer horizontalement le contenu
          }}>
            <div style={{ maxWidth: '90%' }}> {/* Limiter la largeur du texte */}
              <h3>Quiz -18 ans</h3>
              <p>
                Apprenez la sécurité sur Internet, la prévention du cyberharcèlement et l'utilisation responsable des médias sociaux. Conçu pour les enfants et les jeunes adolescents.
              </p>
            </div>
            <div style={{ marginTop: '20px', width: '100%' }}> {/* Ajuster la largeur ici */}
              <a href="/" style={{ // Ajout de l'élément <a> pour le lien
                padding: '10px 20px', 
                backgroundColor: '#fff', 
                color: '#431880', 
                border: 'none', 
                borderRadius: '5px', 
                cursor: 'pointer', 
                display: 'inline-block', // Changer le display pour être un lien
                width: '80%', // Largeur uniforme pour les boutons
                maxWidth: '300px', // Largeur maximale pour éviter qu'ils soient trop larges
                textAlign: 'center' // Centrer le texte du lien
              }}>
                Commencer le Quiz -18 ans
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={footerStyle}>
        <p>&copy; 2024 Social Safe. Tous droits réservés.</p>
      </footer>
    </div>
  );
}


export default App;
