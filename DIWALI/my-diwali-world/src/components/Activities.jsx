
import '../styles/Activities.css';

function Activities() {
  const activities = [
    {
      number: '01',
      icon: '🌅',
      title: 'Morning Vibes',
      description:
        'Waking up early, getting ready and starting the beautiful festival day with happiness.',
      tag: 'A Fresh Beginning'
    },
    {
      number: '02',
      icon: '🥳',
      title: 'Fun with Friends',
      description:
        'Spending quality time with friends, playing games, sharing jokes and capturing memories.',
      tag: 'Friends Forever'
    },
    {
      number: '03',
      icon: '🍬',
      title: 'Sweet Moments',
      description:
        'Enjoying delicious sweets, traditional snacks and special festival food with everyone.',
      tag: 'Taste of Happiness'
    },
    {
      number: '04',
      icon: '🪔',
      title: 'Decoration Time',
      description:
        'Creating beautiful rangoli designs, decorating the home and lighting glowing diyas.',
      tag: 'Let There Be Light'
    },
    {
      number: '05',
      icon: '❤️',
      title: 'Family Celebration',
      description:
        'Sharing love, happiness, smiles and unforgettable moments with family members.',
      tag: 'Togetherness'
    },
    {
      number: '06',
      icon: '🎆',
      title: 'Fireworks Night',
      description:
        'Enjoying the beautiful night sky filled with sparkling lights and celebration.',
      tag: 'A Magical Night'
    }
  ];

  return (
    <section className="activities-section" id="activities">

      <div className="activities-heading">
        <p className="activities-label">✦ MY FESTIVAL JOURNEY ✦</p>

        <h2>
          My Diwali <span>Celebration</span>
        </h2>

        <p className="activities-intro">
          Six beautiful moments that make this festival
          special, memorable and full of happiness.
        </p>
      </div>

      <div className="activities-grid">
        {activities.map((activity) => (
          <article className="activity-card" key={activity.number}>

            <div className="activity-card-top">
              <span className="activity-number">
                {activity.number}
              </span>

              <span className="activity-icon">
                {activity.icon}
              </span>
            </div>

            <span className="activity-tag">
              {activity.tag}
            </span>

            <h3>{activity.title}</h3>

            <p>{activity.description}</p>

            <div className="activity-card-bottom">
              <span>DIWALI MEMORY</span>
              <span>✦</span>
            </div>

          </article>
        ))}
      </div>

    </section>
  );
}

export default Activities;
