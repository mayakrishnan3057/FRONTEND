
import '../styles/Home.css';

import Activities from '../components/Activities';
import Gallery from '../components/Gallery';

function Home() {
  const highlights = [
    {
      icon: '🌅',
      title: 'Morning Vibes',
      description: 'A beautiful beginning to a special day.'
    },
    {
      icon: '🥳',
      title: 'Fun with Friends',
      description: 'Laughs, games and unforgettable moments.'
    },
    {
      icon: '🍬',
      title: 'Sweet Moments',
      description: 'Delicious sweets and festive treats.'
    },
    {
      icon: '🪔',
      title: 'Decoration Time',
      description: 'Beautiful rangoli and glowing diyas.'
    },
    {
      icon: '❤️',
      title: 'Family Celebration',
      description: 'Sharing love and happiness together.'
    },
    {
      icon: '🎆',
      title: 'Fireworks Night',
      description: 'A sparkling night full of excitement.'
    }
  ];

  return (
    <main className="home-page">

      <nav className="navbar">
        <a href="#home" className="nav-logo">
          Diwali<span>World.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#highlights">Highlights</a>
          <a href="#activities">Activities</a>
          <a href="#gallery">Gallery</a>
          <a href="#memories">Memories</a>
        </div>
      </nav>

      <section className="hero-section" id="home">
        <div className="hero-content">
          <p className="hero-tag">✨ THE FESTIVAL OF LIGHTS ✨</p>

          <h1>
            My Diwali
            <span> Celebration</span>
          </h1>

          <p className="hero-description">
            A Festival of Lights & Happiness
          </p>

          <p className="hero-text">
            Every light tells a story.
            Every moment creates a memory.
            Let's celebrate happiness together!
          </p>

          <a href="#highlights" className="hero-button">
            Explore Celebration <span>→</span>
          </a>
        </div>

        <div className="hero-decoration hero-decoration-one">🪔</div>
        <div className="hero-decoration hero-decoration-two">✨</div>
        <div className="hero-decoration hero-decoration-three">🎆</div>

        <div className="scroll-indicator">
          SCROLL TO EXPLORE ↓
        </div>
      </section>

      <section className="highlights-section" id="highlights">
        <div className="section-heading">
          <p>✨ SPECIAL MOMENTS ✨</p>
          <h2>Diwali <span>Highlights</span></h2>
          <div className="heading-line"></div>
        </div>

        <div className="highlights-grid">
          {highlights.map((item, index) => (
            <div className="highlight-card" key={index}>
              <div className="highlight-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="card-number">0{index + 1}</span>
            </div>
          ))}
        </div>
      </section>

      <Activities />

      <Gallery />

    </main>
  );
}

export default Home;
