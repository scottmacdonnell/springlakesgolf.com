import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/components/Hallway.module.scss'

export default function Hallway(props) {
  return (
    <div className={styles.Hallway}>
      <HallwayCard
        title="About Us"
        link="/about"
        image="/images/index/hallway-about.jpg"
      />
      <HallwayCard
        title="Memberships"
        link="/memberships"
        image="/images/index/hallway-memberships.jpg"
      />
      <HallwayCard
        title="Game Improvement"
        link="/game"
        image="/images/index/hallway-game.jpg"
      />
      <HallwayCard
        title="Clubhouse & Dining"
        link="/clubhouse"
        image="/images/index/hallway-clubhouse.jpg"
      />
      <HallwayCard
        title="Events"
        link="/events"
        image="/images/index/hallway-events.jpg"
      />
      <HallwayCard
        title="Contact Us"
        link="/contact"
        image="/images/index/hallway-contact.jpg"
      />
    </div>
  )
}

function HallwayCard({
  title,
  link,
  image
}) {
  return (
    <div className={styles.HallwayCard}>
      <Link href={link}>
        <a>
          <div className={styles.HallwayCardImage}>
            <Image 
              src={image}
              alt="Card Background"
              width={800}
              height={600}
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <div className={styles.HallwayCardContent}>
            <div className={styles.HallwayCardContentWrapper}>
              <h2>{title}</h2>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}