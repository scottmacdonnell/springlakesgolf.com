import Link from 'next/link'
import { motion } from 'framer-motion'

import Page from '../components/Page'
import Container from '../components/Container'

import { useAuth } from '../lib/auth'

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
}

const imageVariants = {
  exit: { y: '50%', opacity: 0, transition },
  enter: {
    y: '0%',
    opacity: 1,
    transition,
  },
}

const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } },
}

export default function Index() {
  const auth = useAuth()

  return (
    <Page 
      className="Index"
    >
      <motion.div className="single" initial="exit" animate="enter" exit="exit">
        <header>
          <motion.div
            variants={imageVariants}
          >
            <Container>
              <h1>Spring Lakes Golf Club</h1>
            </Container>
          </motion.div>
        </header>

        <main>
          <motion.div className="back" variants={backVariants}>
            <Container>
              <Link href="/about">
                <a>About Us</a>
              </Link>

              <br/>

              <Link href="/memberships">
                <a>Memberships</a>
              </Link>

              <br/>

              <Link href="/about">
                <a>Game Improvement</a>
              </Link>

              <br/>

              <Link href="/clubhouse">
                <a>Clubhouse & Dining</a>
              </Link>

              <br/>

              <Link href="/events">
                <a>Events</a>
              </Link>

              <br/>

              <Link href="/contact">
                <a>Contact Us</a>
              </Link>
            </Container>
          </motion.div>
        </main>
      </motion.div>
    </Page>
  )
}