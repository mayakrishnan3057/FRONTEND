
import { useState } from 'react';
import '../styles/Gallery.css';

function Gallery() {
  const photos = [
    {
      id: 1,
      title: 'Festival Lights',
      category: 'Decorations',
      image: 'https://images.unsplash.com/photo-1606293926075-69a00dbfde81?w=800',
      size: 'tall'
    },
    {
      id: 2,
      title: 'Sweet Celebration',
      category: 'Food',
      image: 'https://images.unsplash.com/photo-1605197161470-5d6e8a7c4e5a?w=800',
      size: 'normal'
    },
    {
      id: 3,
      title: 'Beautiful Flowers',
      category: 'Decorations',
      image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800',
      size: 'normal'
    },
    {
      id: 4,
      title: 'Night Celebration',
      category: 'Fireworks',
      image: 'https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?w=800',
      size: 'tall'
    },
    {
      id: 5,
      title: 'Festival Food',
      category: 'Food',
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=800',
      size: 'normal'
    },
    {
      id: 6,
      title: 'Happy Moments',
      category: 'Friends',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800',
      size: 'normal'
    },
    {
      id: 7,
      title: 'Golden Lights',
      category: 'Decorations',
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800',
      size: 'tall'
    },
    {
      id: 8,
      title: 'Together Forever',
      category: 'Family',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800',
      size: 'normal'
    }
  ];

  const categories = [
    'All',
    'Friends',
    'Family',
    'Food',
    'Decorations',
    'Fireworks'
  ];

  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const filteredPhotos =
    activeCategory === 'All'
      ? photos
      : photos.filter(
          (photo) => photo.category === activeCategory
        );

  const showNext = () => {
    const currentIndex = filteredPhotos.findIndex(
      (photo) => photo.id === selectedPhoto.id
    );

    const nextIndex = (currentIndex + 1) % filteredPhotos.length;

    setSelectedPhoto(filteredPhotos[nextIndex]);
  };

  const showPrevious = () => {
    const currentIndex = filteredPhotos.findIndex(
      (photo) => photo.id === selectedPhoto.id
    );

    const previousIndex =
      (currentIndex - 1 + filteredPhotos.length) %
      filteredPhotos.length;

    setSelectedPhoto(filteredPhotos[previousIndex]);
  };

  return (
    <section className="gallery-section" id="gallery">

      <div className="gallery-heading">
        <p>✦ CAPTURED MOMENTS ✦</p>

        <h2>
          My Diwali <span>Gallery</span>
        </h2>

        <p className="gallery-description">
          A collection of beautiful moments, colourful memories
          and unforgettable celebrations.
        </p>
      </div>

      {/* Category Filters */}

      <div className="gallery-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={
              activeCategory === category
                ? 'filter-button active'
                : 'filter-button'
            }
            onClick={() => {
              setActiveCategory(category);
              setSelectedPhoto(null);
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Masonry Gallery */}

      <div className="gallery-grid">
        {filteredPhotos.map((photo) => (
          <div
            className={`gallery-item ${photo.size}`}
            key={photo.id}
            onClick={() => setSelectedPhoto(photo)}
          >
            <img
              src={photo.image}
              alt={photo.title}
              loading="lazy"
            />

            <div className="gallery-overlay">
              <span>{photo.category}</span>
              <h3>{photo.title}</h3>
              <p>View Photo ↗</p>
            </div>
          </div>
        ))}
      </div>

      {/* Image Lightbox */}

      {selectedPhoto && (
        <div
          className="lightbox"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="lightbox-close"
            onClick={() => setSelectedPhoto(null)}
          >
            ✕
          </button>

          <button
            className="lightbox-nav previous"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
          >
            ❮
          </button>

          <div
            className="lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedPhoto.image}
              alt={selectedPhoto.title}
            />

            <h3>{selectedPhoto.title}</h3>
            <p>{selectedPhoto.category}</p>
          </div>

          <button
            className="lightbox-nav next"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
          >
            ❯
          </button>
        </div>
      )}

    </section>
  );
}

export default Gallery;
