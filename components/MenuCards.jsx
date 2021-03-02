import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

import styles from '../styles/components/MenuCards.module.scss'

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
}

const menuCardsVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 0.75, ...transition } },
}

export default function MenuCards() {
  return(
    <motion.div className={styles.MenuCards} initial="exit" animate="enter" exit="exit">
      <motion.div className={styles.MenuCardsLarge} variants={menuCardsVariants}>
        <MenuCardLarge 
          title="Restaurant Menu"
          image="/images/menucards/restaurant.jpg"
          link="#"
        />

        <MenuCardLarge 
          title="Stanley's Nest Menu"
          image="/images/menucards/stanley.jpg"
          link="#"
        />

        <MenuCardLarge
          title="Halfway House Menu"
          image="/images/menucards/halfway.jpg"
          link="#"
        />
      </motion.div>
      <motion.div className={styles.MenuCardsSmall} variants={menuCardsVariants}>
        <MenuCardSmall 
          title="Weekly Specials"
          image="/images/menucards/weekly.jpg"
          link="#"
        />
        
        <MenuCardSpacer />
        
        <MenuCardSmall 
          title="Clubhouse Refreshers"
          image="/images/menucards/refreshers.jpg"
          link="#"
        />
      </motion.div>
    </motion.div>
  )
}

function MenuCardLarge({
  title,
  image,
  link
}) {
  return (
    <Link href={link}>
      <a>
        <div className={styles.MenuCardLarge}>
          <div className={styles.MenuCardLargeTitle}>
            <div className={styles.MenuCardLargeTitleImage}>
              <Image 
                src="/images/header/events.jpg"
                width={360}
                height={360}
                layout="responsive"
                objectFit="cover"
              />
            </div>

            <div className={styles.MenuCardLargeTitleContent}>
              <div className={styles.MenuCardLargeTitleWrapper}>
                <h3>{title}</h3>
              </div>
            </div>
          </div>
          <div className={styles.MenuCardLargeImage}>
            <Image 
                src={image}
                width={1080}
                height={360}
                layout="responsive"
                objectFit="cover"
              />
          </div>
        </div>
      </a>
    </Link>
  )
}

function MenuCardSmall({
  title,
  image,
  link
}) {
  return (
    <Link href={link}>
      <a>
        <div className={styles.MenuCardSmall}>
          <div className={styles.MenuCardSmallImage}>
            <Image 
                src={image}
                width={1080}
                height={720}
                layout="responsive"
                objectFit="cover"
              />
          </div>
          
          <div className={styles.MenuCardSmallTitle}>
            <div className={styles.MenuCardSmallTitleImage}>
              <Image 
                src="/images/header/events.jpg"
                width={800}
                height={240}
                layout="responsive"
                objectFit="cover"
              />
            </div>

            <div className={styles.MenuCardSmallTitleContent}>
              <div className={styles.MenuCardSmallTitleWrapper}>
                <h3>{title}</h3>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}

function MenuCardSpacer() {
  return <div className={styles.MenuCardSpacer} />
}