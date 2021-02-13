import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/components/Hallway.module.scss'

export default function Hallway() {
  return (
    <div className={styles.Hallway}>
      <HallwayCard
        title="About Us"
        link="/about"
        image="/images/hallway/about.jpg"
      />
      <HallwayCard
        title="Memberships"
        link="/memberships"
        image="/images/hallway/memberships.jpg"
      />
      <HallwayCard
        title="Game Improvement"
        link="/game"
        image="/images/hallway/game.jpg"
      />
      <HallwayCard
        title="Clubhouse & Dining"
        link="/clubhouse"
        image="/images/hallway/clubhouse.jpg"
      />
      <HallwayCard
        title="Events"
        link="/events"
        image="/images/hallway/events.jpg"
      />
      <HallwayCard
        title="Contact Us"
        link="/contact"
        image="/images/hallway/contact.jpg"
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