
import { useState } from 'react';
import './Intro.css';

function Intro({ onEnter }) {
  const [exploded, setExploded] = useState(false);

  const lightCracker = () => {
    if (exploded) return;

    setExploded(true);

    setTimeout(() => {
      onEnter();
    }, 1800);
  };

  return (
    <section className="intro">
      <div className="intro-particles">✦ ✧ ✦ ✧ ✦</div>

      <div className="intro-content">
        <p className="intro-subtitle">
          LIGHTS • HAPPINESS • MEMORIES
        </p>

        <h1>Happy Diwali</h1>

        <h2>Welcome to My Diwali World</h2>

        <p className="intro-description">
          Every light tells a story.
          Every moment creates a memory.
        </p>

        <button
          className={`cracker ${exploded ? 'explode' : ''}`}
          onClick={lightCracker}
          disabled={exploded}
        >
          🧨
        </button>

        <p className="cracker-text">
          {exploded ? 'BOOM! 🎆' : 'Click the cracker to begin'}
        </p>
      </div>
    </section>
  );
}

export default Intro;
