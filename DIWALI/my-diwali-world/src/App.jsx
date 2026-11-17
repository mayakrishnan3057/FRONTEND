
import React, { useEffect, useState } from "react";

import "./App.css";

const activities = [
  {
    title: "Morning Vibes",
    icon: "🌅",
    category: "Morning",
    image:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=900",
    description:
      "A beautiful festival morning begins with fresh energy, happiness and a heart full of excitement.",
  },
  {
    title: "Fun with Friends",
    icon: "🥳",
    category: "Friends",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=900",
    description:
      "Laughing, playing games, taking pictures and creating unforgettable moments with friends.",
  },
  {
    title: "Sweet Moments",
    icon: "🍬",
    category: "Food",
    image:
      "https://images.unsplash.com/photo-1571506165871-ee72a35bc9d4?w=900",
    description:
      "A Diwali celebration is incomplete without delicious sweets and special festival treats.",
  },
  {
    title: "Decoration Time",
    icon: "🪔",
    category: "Decorations",
    image:
      "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?w=900",
    description:
      "Decorating the home with beautiful diyas, colourful rangoli and glowing lights.",
  },
  {
    title: "Family Celebration",
    icon: "❤️",
    category: "Family",
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=900",
    description:
      "The happiest moments are the ones spent with family, sharing love and laughter.",
  },
  {
    title: "Fireworks Night",
    icon: "🎆",
    category: "Fireworks",
    image:
      "https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?w=900",
    description:
      "Ending the day with sparkling lights, colourful skies and beautiful memories.",
  },
];

const galleryItems = [
  {
    image:
      "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?w=1000",
    title: "Festival Lights",
    category: "Decorations",
  },
  {
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1000",
    title: "Friends Forever",
    category: "Friends",
  },
  {
    image:
      "https://images.unsplash.com/photo-1571506165871-ee72a35bc9d4?w=1000",
    title: "Sweet Happiness",
    category: "Food",
  },
  {
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1000",
    title: "Family Moments",
    category: "Family",
  },
  {
    image:
      "https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?w=1000",
    title: "Magical Night",
    category: "Fireworks",
  },
  {
    image:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1000",
    title: "Beautiful Morning",
    category: "Friends",
  },
  {
    image:
      "https://images.unsplash.com/photo-1603905179139-d4b3f4a6e3b1?w=1000",
    title: "Traditional Beauty",
    category: "Decorations",
  },
  {
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1000",
    title: "Festival Celebration",
    category: "Family",
  },
];

const sweets = [
  {
    name: "Gulab Jamun",
    emoji: "🍡",
    description: "Soft, sweet and delicious.",
  },
  {
    name: "Laddu",
    emoji: "🟠",
    description: "A traditional festival favourite.",
  },
  {
    name: "Jalebi",
    emoji: "🥨",
    description: "Crispy, colourful and sweet.",
  },
  {
    name: "Kaju Katli",
    emoji: "🍬",
    description: "A special treat for celebrations.",
  },
];

const wishes = [
  "May your life shine brighter than a thousand diyas! ✨",
  "Wishing you endless happiness, love and success! ❤️",
  "Let every diya bring a new reason to smile! 🪔",
  "May your home be filled with joy and positive energy! 🌟",
  "Have a sparkling and unforgettable Diwali! 🎆",
];

function Intro({ onEnter }) {
  const [burst, setBurst] = useState(false);

  const lightCracker = () => {
    if (burst) return;
    setBurst(true);
    setTimeout(onEnter, 1900);
  };

  return (
    <section className={`intro-screen ${burst ? "intro-burst" : ""}`}>
      <div className="intro-stars">✦　·　✧　·　✦　·　✧　·　✦</div>

      <div className="intro-content">
        <p className="intro-small">A FESTIVAL OF LIGHTS</p>
        <h1>
          Happy <span>Diwali</span>
        </h1>
        <p className="intro-welcome">Welcome to My Diwali World</p>
        <p className="intro-tagline">
          Lights • Happiness • Memories • Celebration
        </p>

        <button
          className={`cracker-button ${burst ? "cracker-active" : ""}`}
          onClick={lightCracker}
          disabled={burst}
          aria-label="Light the Diwali cracker"
        >
          <span className="cracker-emoji">🧨</span>
          <span className="cracker-text">
            {burst ? "✨ Celebrating..." : "Click the cracker"}
          </span>
        </button>

        <p className="intro-hint">
          {burst
            ? "Let the celebration begin..."
            : "Light the cracker to enter the celebration"}
        </p>
      </div>

      {burst && (
        <div className="intro-explosion">
          {Array.from({ length: 35 }).map((_, index) => (
            <span
              key={index}
              style={{ "--particle": index }}
            >
              ✦
            </span>
          ))}
        </div>
      )}
    </section>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["Activities", "#activities"],
    ["Food", "#food"],
    ["Gallery", "#gallery"],
    ["Memories", "#memories"],
    ["About", "#about"],
  ];

  return (
    <header className="navbar">
      <a href="#home" className="nav-logo">
        <span>🪔</span> Diwali<span className="gold-text">World</span>
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <nav className={menuOpen ? "nav-links show-menu" : "nav-links"}>
        {links.map(([label, link]) => (
          <a
            key={label}
            href={link}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="heading-decoration">✦ ━━━━━ ✦</div>
    </div>
  );
}

function Fireworks({ active }) {
  if (!active) return null;

  return (
    <div className="fireworks-layer">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          className="firework"
          key={index}
          style={{
            left: `${12 + index * 19}%`,
            top: `${15 + (index % 3) * 22}%`,
            animationDelay: `${index * 0.22}s`,
          }}
        >
          {Array.from({ length: 12 }).map((_, particle) => (
            <i
              key={particle}
              style={{ "--angle": `${particle * 30}deg` }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

function App() {
  const [entered, setEntered] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [fireworks, setFireworks] = useState(false);
  const [diyas, setDiyas] = useState([false, false, false, false, false]);
  const [wish, setWish] = useState("");
  const [slide, setSlide] = useState(0);

  const filters = [
    "All",
    "Friends",
    "Family",
    "Food",
    "Decorations",
    "Fireworks",
  ];

  const filteredGallery =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeFilter
        );

  const showFireworks = () => {
    setFireworks(true);
    setTimeout(() => setFireworks(false), 2600);
  };

  const lightDiya = (index) => {
    setDiyas((current) =>
      current.map((value, i) => (i === index ? !value : value))
    );
  };

  const lightAllDiyas = () => {
    setDiyas([true, true, true, true, true]);
    showFireworks();
  };

  const surpriseMe = () => {
    const randomWish =
      wishes[Math.floor(Math.random() * wishes.length)];
    setWish(randomWish);
    showFireworks();
  };

  const nextSlide = () => {
    setSlide((current) => (current + 1) % galleryItems.length);
  };

  const previousSlide = () => {
    setSlide(
      (current) =>
        (current - 1 + galleryItems.length) % galleryItems.length
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((current) => (current + 1) % galleryItems.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedImage(null);

      if (selectedImage !== null && event.key === "ArrowRight") {
        setSelectedImage((current) =>
          (current + 1) % filteredGallery.length
        );
      }

      if (selectedImage !== null && event.key === "ArrowLeft") {
        setSelectedImage((current) =>
          (current - 1 + filteredGallery.length) %
          filteredGallery.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, filteredGallery.length]);

  if (!entered) {
    return <Intro onEnter={() => setEntered(true)} />;
  }

  return (
    <div className="website">
      <Fireworks active={fireworks} />
      <Navbar />

      <main>
        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="eyebrow">✦ THE FESTIVAL OF LIGHTS ✦</p>
            <h1>
              My Diwali
              <span> Celebration</span>
            </h1>
            <h2>A Festival of Lights & Happiness</h2>
            <p className="hero-description">
              Every light tells a story. Every moment creates a memory.
              Welcome to a world filled with love, laughter and light.
            </p>
            <a href="#activities" className="gold-button">
              Explore Celebration <span>→</span>
            </a>
          </div>
          <div className="hero-bottom">
            <span>SCROLL TO EXPLORE</span>
            <span className="scroll-line" />
          </div>
          <div className="floating-diya">🪔</div>
        </section>

        {/* HIGHLIGHTS */}
        <section className="highlights section-padding">
          <SectionHeading
            eyebrow="A LITTLE BIT OF EVERYTHING"
            title="Festival Highlights"
            description="Every little moment makes this celebration special."
          />

          <div className="highlight-grid">
            {[
              ["🪔", "Lights", "A home filled with beautiful lights."],
              ["❤️", "Love", "Sharing happiness with loved ones."],
              ["🍬", "Sweets", "Delicious treats and sweet memories."],
              ["🎆", "Celebration", "A sky full of sparkling moments."],
              ["📸", "Memories", "Capturing moments to remember."],
              ["✨", "Happiness", "Spreading smiles everywhere."],
            ].map(([icon, title, description]) => (
              <div className="highlight-card" key={title}>
                <span>{icon}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ACTIVITIES */}
        <section className="activities section-padding" id="activities">
          <SectionHeading
            eyebrow="THE CELEBRATION"
            title="Diwali Activities"
            description="Six beautiful parts of a day filled with joy and excitement."
          />

          <div className="activity-grid">
            {activities.map((activity, index) => (
              <article className="activity-card" key={activity.title}>
                <div className="activity-image">
                  <img src={activity.image} alt={activity.title} />
                  <span className="activity-number">
                    0{index + 1}
                  </span>
                </div>
                <div className="activity-info">
                  <span className="activity-icon">{activity.icon}</span>
                  <h3>{activity.title}</h3>
                  <p>{activity.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* FOOD */}
        <section className="food-section section-padding" id="food">
          <SectionHeading
            eyebrow="A TASTE OF HAPPINESS"
            title="Diwali Sweet Corner"
            description="A celebration becomes sweeter with traditional treats."
          />

          <div className="sweet-grid">
            {sweets.map((sweet) => (
              <div className="sweet-card" key={sweet.name}>
                <span>{sweet.emoji}</span>
                <h3>{sweet.name}</h3>
                <p>{sweet.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* GALLERY */}
        <section className="gallery-section section-padding" id="gallery">
          <SectionHeading
            eyebrow="MOMENTS IN FRAMES"
            title="Diwali Gallery"
            description="A collection of beautiful festival moments."
          />

          <div className="gallery-filters">
            {filters.map((filter) => (
              <button
                key={filter}
                className={
                  activeFilter === filter ? "filter active" : "filter"
                }
                onClick={() => {
                  setActiveFilter(filter);
                  setSelectedImage(null);
                }}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filteredGallery.map((item, index) => (
              <button
                className="gallery-item"
                key={item.title}
                onClick={() => setSelectedImage(index)}
                aria-label={`Open ${item.title}`}
              >
                <img src={item.image} alt={item.title} />
                <div className="gallery-caption">
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                </div>
                <span className="gallery-zoom">↗</span>
              </button>
            ))}
          </div>
        </section>

        {/* LIGHTBOX */}
        {selectedImage !== null && filteredGallery.length > 0 && (
          <div
            className="lightbox"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="lightbox-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Close gallery"
            >
              ×
            </button>

            <button
              className="lightbox-arrow left"
              onClick={(event) => {
                event.stopPropagation();
                setSelectedImage(
                  (selectedImage - 1 + filteredGallery.length) %
                    filteredGallery.length
                );
              }}
            >
              ‹
            </button>

            <div
              className="lightbox-content"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={filteredGallery[selectedImage].image}
                alt={filteredGallery[selectedImage].title}
              />
              <h3>{filteredGallery[selectedImage].title}</h3>
            </div>

            <button
              className="lightbox-arrow right"
              onClick={(event) => {
                event.stopPropagation();
                setSelectedImage(
                  (selectedImage + 1) % filteredGallery.length
                );
              }}
            >
              ›
            </button>
          </div>
        )}

        {/* EXPERIENCE */}
        <section className="experience-section section-padding" id="memories">
          <SectionHeading
            eyebrow="MY SPECIAL STORY"
            title="My Diwali Experience"
            description="Some days are special. Some moments stay in our hearts forever."
          />

          <div className="experience-card">
            <div className="experience-image">
              <img
                src="https://images.unsplash.com/photo-1606293926075-69a00dbfde81?w=1200"
                alt="Diwali celebration lights"
              />
            </div>
            <div className="experience-text">
              <span className="eyebrow">A DAY FULL OF BEAUTIFUL MEMORIES</span>
              <h3>Little Moments, Big Happiness</h3>
              <p>
                Diwali is more than a festival. It is a feeling of togetherness,
                a reason to smile and a chance to create beautiful memories.
              </p>
              <p>
                From the first diya in the morning to the sparkling sky at
                night, every moment brings a special kind of happiness.
              </p>
              <blockquote>
                "Some moments become memories forever..."
              </blockquote>
            </div>
          </div>

          <div className="personal-message">
            <span>💛</span>
            <p>
              May this festival fill every heart with peace, every home with
              happiness and every life with beautiful memories.
            </p>
            <small>— My Diwali Message</small>
          </div>
        </section>

        {/* FUN ZONE */}
        <section className="fun-section section-padding" id="fun">
          <SectionHeading
            eyebrow="LET'S PLAY"
            title="Diwali Fun Zone"
            description="Make your own little celebration with lights and surprises."
          />

          <div className="fun-card">
            <h3>Light the Diyas 🪔</h3>
            <p>Click each diya to turn its light on or off.</p>

            <div className="diya-row">
              {diyas.map((isLit, index) => (
                <button
                  className={isLit ? "diya lit" : "diya"}
                  key={index}
                  onClick={() => lightDiya(index)}
                  aria-label={`Toggle diya ${index + 1}`}
                >
                  <span className="diya-flame">🔥</span>
                  <span className="diya-body">🪔</span>
                </button>
              ))}
            </div>

            <button className="gold-button" onClick={lightAllDiyas}>
              Light All Diyas ✨
            </button>
          </div>

          <div className="fun-bottom-grid">
            <div className="fun-card fireworks-card">
              <span className="fun-big-icon">🎆</span>
              <h3>Fireworks Show</h3>
              <p>Make the night sparkle with a little magic.</p>
              <button className="gold-button" onClick={showFireworks}>
                Launch Fireworks
              </button>
            </div>

            <div className="fun-card surprise-card">
              <span className="fun-big-icon">🎁</span>
              <h3>Surprise Wish</h3>
              <p>Click below to discover a special Diwali wish.</p>
              <button className="gold-button" onClick={surpriseMe}>
                Surprise Me!
              </button>
              {wish && <p className="wish-message">{wish}</p>}
            </div>
          </div>
        </section>

        {/* PHOTO SLIDER */}
        <section className="slider-section section-padding">
          <SectionHeading
            eyebrow="A FEW MORE MEMORIES"
            title="Celebration Moments"
            description="A little slideshow of beautiful festival scenes."
          />

          <div className="slider">
            <button
              className="slider-arrow"
              onClick={previousSlide}
              aria-label="Previous image"
            >
              ‹
            </button>

            <div className="slider-image">
              <img
                src={galleryItems[slide].image}
                alt={galleryItems[slide].title}
              />
              <div className="slider-caption">
                <span>{galleryItems[slide].category}</span>
                <h3>{galleryItems[slide].title}</h3>
              </div>
            </div>

            <button
              className="slider-arrow"
              onClick={nextSlide}
              aria-label="Next image"
            >
              ›
            </button>
          </div>

          <div className="slider-dots">
            {galleryItems.map((item, index) => (
              <button
                key={item.title}
                className={slide === index ? "slider-dot active" : "slider-dot"}
                onClick={() => setSlide(index)}
                aria-label={`Show slide ${index + 1}`}
              />
            ))}
          </div>
        </section>

        {/* ENDING */}
        <section className="ending-section">
          <div className="ending-diyas">🪔　🪔　🪔　🪔　🪔</div>
          <p className="eyebrow">UNTIL WE CELEBRATE AGAIN</p>
          <h2>Some Moments Become Memories Forever...</h2>
          <p>
            Thank you for being a part of this little Diwali world.
          </p>
          <h3>Thank You for Visiting! ❤️</h3>
          <button className="gold-button" onClick={showFireworks}>
            Celebrate Again ✨
          </button>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer" id="about">
        <a href="#home" className="nav-logo">
          🪔 Diwali<span className="gold-text">World</span>
        </a>

        <p>Celebrating lights, love, happiness and beautiful memories.</p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#activities">Activities</a>
          <a href="#gallery">Gallery</a>
          <a href="#memories">Memories</a>
        </div>

        <div className="social-links">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            YouTube
          </a>
        </div>

        <div className="footer-bottom">
          <span>Made with ❤️ by Me</span>
          <span>Copyright © 2026 Diwali World</span>
        </div>
      </footer>

      <button
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        ↑
      </button>
    </div>
  );
}

export default App;