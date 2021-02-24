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

export default function About() {
  const auth = useAuth()

  return (
    <Page 
      className="About"
      pageName="About Us"
      slug="/about"
    >
      <header>
        <Header 
          title="About Us"
          image="/images/header/about.jpg"
        />
      </header>

      <main id="main">
        <motion.div className="single" initial="exit" animate="enter" exit="exit">
          <motion.div className="back" variants={backVariants}>
            <br/>

            <Container>
              <h2>A Word from the Owner...</h2>

              <p>"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi."</p>
            </Container>

            <br/>

            <Container>
              <h2>Meet Our Team</h2>

              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
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