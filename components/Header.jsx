import Image from 'next/image'
import { motion } from 'framer-motion'

import Navbar from './Navbar'

import styles from '../styles/components/Header.module.scss'

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

export default function Header({
  title,
  image
}) {
  return (
    <div className={styles.Header}>
      <motion.div className="single" initial="exit" animate="enter" exit="exit">
        <motion.div className={styles.HeaderImage} variants={imageVariants}>
          <Image 
            src={image}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </motion.div>

        <motion.div className={styles.HeaderContent} variants={imageVariants}>
          <div className={styles.HeaderContentWrapper}>
            <div className={styles.HeaderContainer}>
              <div className={styles.HeaderGrid}>
                <div className={styles.HeaderHeader}>
                  <Navbar />
                </div>

                <div className={styles.HeaderMain}>
                  <motion.div variants={titleVariants}>
                    <h1>{title}</h1>
                  </motion.div>
                </div>

                <div className={styles.HeaderFooter}>
                  {/* Content Here */}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}