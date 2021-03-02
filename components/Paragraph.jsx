import { motion } from 'framer-motion'

import styles from '../styles/components/Paragraph.module.scss'

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
}

const paragraphVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 0.75, ...transition } },
}

export default function Paragraph(props) {
  return (
    <motion.div initial="exit" animate="enter" exit="exit">
      <motion.div className={styles.Paragraph} variants={paragraphVariants}>
        {props.children}
      </motion.div>
    </motion.div>
  )
}