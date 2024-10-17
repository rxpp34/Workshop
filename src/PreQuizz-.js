import React, { useState } from 'react';

// Styles (same as before)
const headerStyle = {
  backgroundColor: '#9054e3',
  width: '100vw',
  padding: '20px 0',
  boxSizing: 'border-box',
  position: 'sticky',
  top: '0',
  zIndex: '100',
};

const footerStyle = {
  backgroundColor: '#431880',
  color: '#fff',
  textAlign: 'center',
  padding: '20px 0',
  width: '100vw',
  position: 'fixed',
  bottom: '0',
};

const navLinkStyle = {
  textDecoration: 'none',
  color: '#fff',
  fontSize: '18px',
  fontWeight: 'bold',
  whiteSpace: 'nowrap',
};

const QuizPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Array of real articles about social network risks
  const articles = [
    {
      title: "Cyberharcèlement sur les réseaux sociaux",
      description: "Comprendre et prévenir le cyberharcèlement sur les plateformes sociales.",
      link: "https://www.service-public.fr/particuliers/actualites/A14848"
    },
    {
      title: "Vol d'identité en ligne",
      description: "Comment protéger son identité sur les réseaux sociaux et éviter le vol de données personnelles.",
      link: "https://www.economie.gouv.fr/particuliers/usurpation-identite"
    },
    {
      title: "Addiction aux réseaux sociaux",
      description: "Les signes et les conséquences de la dépendance aux médias sociaux.",
      link: "https://www.ameli.fr/assure/sante/themes/addiction-ecrans/definition-facteurs-favorisants-consequences"
    }
  ];

  return (
    <div style={{ backgroundColor: darkMode ? '#1a1a2e' : '#f9f9f9', width: '100vw', minHeight: '100vh', margin: '0', padding: '0' }}>
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
            <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#fff' }}>Social Safe</span>
          </div>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <a href="#" style={navLinkStyle}>Accueil</a>
            <a href="#" style={navLinkStyle}>À propos</a>
            <a href="#" style={navLinkStyle}>Contact</a>
            <button onClick={toggleDarkMode} style={{ 
              ...navLinkStyle, 
              cursor: 'pointer', 
              background: 'none', 
              border: 'none', 
              padding: '0',
              marginLeft: '10px'
            }}>
              {darkMode ? '☀️' : '🌙'}
            </button>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main style={{ padding: '20px', maxWidth: '1400px', margin: '0 auto', paddingBottom: '80px' }}>
        <h1 style={{ textAlign: 'center', color: '#431880' }}>Les risques liés aux réseaux sociaux</h1>
        
        {/* Video section */}
        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <h2 style={{ color: darkMode ? '#fff' : '#000', marginBottom: '10px' }}>Vidéo explicative</h2> {/* Réduit à 10px */}
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: '0', maxWidth: '800px', margin: '0 auto' }}>
            <iframe 
              style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '450px' }} // Hauteur fixe
              src="https://www.youtube.com/embed/xrpVBuUDS1s"
              title="Vidéo sur les risques des réseaux sociaux"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Articles section */}
        <div style={{ marginTop: '-200px' }}> {/* Réduction de l'espace entre la vidéo et les articles */}
          <h2 style={{ textAlign: 'center', color: darkMode ? '#fff' : '#000', marginBottom: '20px' }}>Articles sur les risques</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {articles.map((article, index) => (
              <div key={index} style={{ 
                width: 'calc(33% - 20px)', 
                marginBottom: '20px', 
                backgroundColor: darkMode ? '#2a2a3e' : '#fff',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}>
                <h3 style={{ color: '#431880' }}>{article.title}</h3>
                <p style={{ color: darkMode ? '#ddd' : '#333' }}>
                  {article.description}
                </p>
                <a href={article.link} target="_blank" rel="noopener noreferrer" style={{ color: '#9054e3', textDecoration: 'none' }}>Lire l'article</a>
              </div>
            ))}
          </div>
        </div>

        {/* Test button */}
        <div style={{ textAlign: 'center', marginTop: '40px', marginBottom: '70px' }}>
          <a href="/Quizz" style={{
            padding: '15px 30px',
            backgroundColor: '#431880',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '18px',
            textDecoration: 'none',
            display: 'inline-block',
          }}>
            Tester si j'ai bien compris les risques
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer style={footerStyle}>
        <p>&copy; 2024 Social Safe. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default QuizPage;
