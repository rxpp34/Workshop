import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ArticlePage() {
  const [darkMode, setDarkMode] = React.useState(false);
  const { ageGroup } = useParams();

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

  const articleContent = ageGroup === '18-plus' ? (
    <>
      <h2>Les dangers des réseaux sociaux pour les adultes</h2>
      <p>Les réseaux sociaux sont devenus une partie intégrante de notre vie quotidienne, mais ils présentent également des risques pour les adultes :</p>
      <ul>
        <li>Addiction et perte de temps : L'utilisation excessive des réseaux sociaux peut entraîner une dépendance et une perte de productivité.</li>
        <li>Cyberharcèlement : Même les adultes peuvent être victimes de harcèlement en ligne, ce qui peut avoir des conséquences graves sur la santé mentale.</li>
        <li>Vol d'identité : Les informations personnelles partagées sur les réseaux sociaux peuvent être utilisées pour usurper votre identité.</li>
        <li>Impact sur la carrière : Des publications inappropriées peuvent nuire à votre réputation professionnelle et affecter vos opportunités d'emploi.</li>
        <li>Désinformation : La propagation rapide de fausses informations sur les réseaux sociaux peut influencer les opinions et les décisions de manière négative.</li>
      </ul>
    </>
  ) : (
    <>
      <h2>Les dangers des réseaux sociaux pour les jeunes</h2>
      <p>Les réseaux sociaux peuvent être amusants, mais il est important de connaître les risques :</p>
      <ul>
        <li>Cyberharcèlement : Des personnes peuvent être méchantes en ligne et te faire du mal.</li>
        <li>Rencontres dangereuses : Certaines personnes en ligne ne sont pas qui elles prétendent être.</li>
        <li>Partage excessif : Faire attention à ne pas partager trop d'informations personnelles.</li>
        <li>Addiction : Passer trop de temps sur les réseaux sociaux peut affecter tes études et tes relations réelles.</li>
        <li>Comparaison sociale : Ne pas oublier que ce que les gens montrent en ligne n'est pas toujours la réalité.</li>
      </ul>
    </>
  );

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

      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
        <h1 style={{ fontSize: '36px', marginBottom: '20px', color: darkMode ? '#ffffff' : '#431880' }}>
          Les dangers des réseaux sociaux
        </h1>
        <article style={{ fontSize: '18px', lineHeight: '1.6', color: darkMode ? '#ffffff' : '#431880' }}>
          {articleContent}
        </article>
        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <Link 
            to={ageGroup === '18-plus' ? '/quiz-18-plus' : '/quiz-moins-18'} 
            style={{...navLinkStyle, backgroundColor: '#431880', color: 'white', display: 'inline-block', fontSize: '18px'}}
          >
            Commencer le Quiz
          </Link>
        </div>
      </main>

      <footer style={{ textAlign: 'center', padding: '20px 0', borderTop: `1px solid ${darkMode ? '#2a2a4a' : '#eaeaea'}` }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: darkMode ? '#ffffff' : '#431880' }}>&copy; 2024 Social Safe. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}