import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

import Navbar from './Navbar'

import styles from '../styles/components/Banner.module.scss'

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

const chevronVariants = {
  exit: { y: '0%', opacity: 0, transition },
  enter: {
    y: '0%',
    opacity: 1,
    transition,
  },
}

export default function Banner({
  title,
  image,
  chevron
}) {
  return (
    <div className={styles.Banner}>
      <motion.div className="single" initial="exit" animate="enter" exit="exit">
        <motion.div className={styles.BannerImage} variants={imageVariants}>
          <Image 
            src={image}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </motion.div>

        <motion.div className={styles.BannerContent} variants={imageVariants}>
          <div className={styles.BannerContentWrapper}>
            <div className={styles.BannerContainer}>
              <div className={styles.BannerGrid}>
                <div className={styles.BannerHeader}>
                  <Navbar />
                </div>

                <div className={styles.BannerMain}>
                  <motion.div variants={titleVariants}>
                    <h1>{title}</h1>
                  </motion.div>
                </div>

                <div className={styles.BannerFooter}>
                  <motion.div variants={chevronVariants}>
                    <Link href={chevron} scroll={true} shallow>
                      <a>
                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision">
                          <path d="M6 9l6 6 6-6"/>
                        </svg>
                      </a>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}