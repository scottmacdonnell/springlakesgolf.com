import { motion } from 'framer-motion'

import Page from '../components/Page'
import Container from '../components/Container'
import Paragraph from '../components/Paragraph'
import Header from '../components/Header'
import Footer from '../components/Footer'

import { useAuth } from '../lib/auth'

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
}

const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } },
}

export default function About() {
  const auth = useAuth()

  return (
    <Page 
      className="About"
      pageName="About Us"
      slug="/about"
    >
      <header id="header">
        <Header 
          title="About Us"
          image="/images/header/about.jpg"
        />
      </header>

      <main id="main">
        <motion.div className="single" initial="exit" animate="enter" exit="exit">
          <motion.div className="back" variants={backVariants}>
            <Container>
              <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ipsam ducimus beatae iste soluta placeat nesciunt atque impedit, nisi quo asperiores quibusdam qui sed suscipit, sint nulla quos dicta ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sunt quidem blanditiis fuga eligendi dolore, nam esse similique optio? Maiores voluptatibus fugiat ut inventore officia ex iusto aliquam accusamus dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, harum aliquid excepturi saepe, nihil ab quasi explicabo voluptatibus quis ex culpa nisi placeat sed error cupiditate similique velit perferendis dolore!
              </Paragraph>
            </Container>
          </motion.div>
        </motion.div>
      </main>

      <footer id="footer">
        <Footer />
      </footer>
    </Page>
  )
}