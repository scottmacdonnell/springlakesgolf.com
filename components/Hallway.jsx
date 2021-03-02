import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

import styles from '../styles/components/Hallway.module.scss'

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
}

const imageVariants = {
  exit: { y: '0%', opacity: 0, transition },
  enter: {
    y: '0%',
    opacity: 1,
    transition,
  },
}

const titleVariants = {
  exit: { y: '0%', opacity: 0, transition },
  enter: {
    y: '0%',
    opacity: 1,
    transition: { delay: 0.4, ...transition }
  },
}

export default function Hallway() {
  return (
    <motion.div className={styles.Hallway} initial="exit" animate="enter" exit="exit">
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
    </motion.div>
  )
}

function HallwayCard({
  title,
  link,
  image
}) {
  return (
    <motion.div className={styles.HallwayCard} variants={imageVariants}>
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
    </motion.div>
  )
}