import React from 'react'
import { Link } from 'react-router-dom'

export default function ArticlePage() {
  const [darkMode, setDarkMode] = React.useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const headerStyle = {
    backgroundColor: darkMode ? '#2a2a4a' : '#f0e6ff',
  }

  const navLinkStyle = {
    padding: '10px 20px',
    borderRadius: '5px',
    textDecoration: 'none',
    color: darkMode ? 'white' : '#431880',
    backgroundColor: darkMode ? '#431880' : 'white',
    transition: 'all 0.3s ease',
    border: `2px solid ${darkMode ? '#9054e3' : '#431880'}`,
  }

  const linkStyle = {
    color: darkMode ? '#9054e3' : '#431880',
    textDecoration: 'underline',
  }

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
            <img src="/placeholder.svg?height=40&width=40" alt="Logo Social Safe" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
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
          <h2>Les risques liés à l'utilisation des réseaux sociaux</h2>
          
          <p>Les réseaux sociaux font désormais partie intégrante de notre vie quotidienne, mais leur utilisation n'est pas sans risques. Voici quelques-uns des principaux dangers identifiés par les experts :</p>
          
          <h3>1. Cyberharcèlement et intimidation en ligne</h3>
          <p>Selon une étude de l'UNICEF, un tiers des jeunes dans 30 pays déclarent avoir été victimes de cyberharcèlement. Ce phénomène peut avoir des conséquences graves sur la santé mentale des victimes, entraînant stress, anxiété et dépression. <a href="https://www.unicef.fr/article/le-cyber-harcelement-qu-est-ce-que-c-est/" style={linkStyle} target="_blank" rel="noopener noreferrer">[Source: UNICEF]</a></p>

          <h3>2. Addiction et impact sur la santé mentale</h3>
          <p>L'utilisation excessive des réseaux sociaux peut entraîner une forme d'addiction. Une étude publiée dans la revue "Cyberpsychology, Behavior, and Social Networking" a montré que l'utilisation intensive de Facebook était associée à une diminution du bien-être et une augmentation des symptômes dépressifs. <a href="https://www.sciencedirect.com/science/article/abs/pii/S0747563216307543" style={linkStyle} target="_blank" rel="noopener noreferrer">[Source: Science Direct]</a></p>

          <h3>3. Désinformation et fake news</h3>
          <p>La propagation rapide de fausses informations sur les réseaux sociaux est un problème majeur. Selon une étude du MIT, les fausses nouvelles se propagent 6 fois plus vite que les vraies sur Twitter. Cela peut avoir des conséquences importantes sur l'opinion publique et la prise de décision. <a href="https://www.sciencespo.fr/fr/actualites/actualit%C3%A9s/comment-lutter-contre-la-desinformation-sur-les-reseaux-sociaux/4955" style={linkStyle} target="_blank" rel="noopener noreferrer">[Source: Sciences Po]</a></p>

          <h3>4. Atteinte à la vie privée</h3>
          <p>Les réseaux sociaux collectent une quantité importante de données personnelles. Selon la CNIL, 71% des Français se disent préoccupés par le niveau de protection de leurs données personnelles sur Internet. Il est crucial de bien paramétrer ses comptes et de réfléchir avant de partager des informations sensibles. <a href="https://www.cnil.fr/fr/les-conseils-de-la-cnil-pour-mieux-maitriser-son-exposition-sur-les-reseaux-sociaux" style={linkStyle} target="_blank" rel="noopener noreferrer">[Source: CNIL]</a></p>

          <h3>5. Impact sur l'estime de soi et comparaison sociale</h3>
          <p>Une étude publiée dans le "Journal of Social and Clinical Psychology" a montré que la réduction du temps passé sur les réseaux sociaux peut diminuer les sentiments de solitude et de dépression. La comparaison constante avec les autres peut avoir un impact négatif sur l'estime de soi, en particulier chez les jeunes. <a href="https://www.psychologies.com/Moi/Se-connaitre/Estime-de-soi/Articles-et-Dossiers/L-impact-des-reseaux-sociaux-sur-l-estime-de-soi" style={linkStyle} target="_blank" rel="noopener noreferrer">[Source: Psychologies]</a></p>

          <p>Il est important de prendre conscience de ces risques et d'adopter une utilisation responsable des réseaux sociaux. Cela passe par une éducation aux médias, une gestion du temps passé en ligne, et une réflexion critique sur les contenus consommés et partagés.</p>
        </article>
        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <Link 
            to="/Quizz"
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
  )
}