import Link from 'next/link'
import { motion } from 'framer-motion'

import Page from '../components/Page'
import Container from '../components/Container'
import Paragraph from '../components/Paragraph'
import Header from '../components/Header'

import { useAuth } from '../lib/auth'

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
}

const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } },
}

export default function Game() {
  const auth = useAuth()

  return (
    <Page
      className="Game"
      pageName="Game Improvement"
      slug="/game"
    >
      <header>
        <Header
          title="Game Improvement"
          image="/images/header/contact.jpg"
        />
      </header>

      <main id="main">
        <motion.div className="single" initial="exit" animate="enter" exit="exit">
          <motion.div className="back" variants={backVariants}>
            <Container>
              <Link href="/">
                <a>Index</a>
              </Link>

              <br/>

              <Link href="/about">
                <a>About Us</a>
              </Link>

              <br/>

              <Link href="/memberships">
                <a>Memberships</a>
              </Link>

              <br/>

              <Link href="/game">
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
        </motion.div>
      </main>

      <footer id="footer">
        <Container>
          <Paragraph>© 2021 Spring Lakes Golf Club. All Rights Reserved.</Paragraph>
        </Container>
      </footer>
    </Page>
  )
}