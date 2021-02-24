import Link from 'next/link'
import { motion } from 'framer-motion'

import Page from '../components/Page'
import Container from '../components/Container'
import Paragraph from '../components/Paragraph'
import Banner from '../components/Banner'
import Hallway from '../components/Hallway'

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
}

const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } },
}

export default function Index() {
  return (
    <Page 
      className="Index"
    >
      <header id="header">
        <Banner 
          title="Spring Lakes Golf Club"
          image="/images/banner/index.jpg"
          chevron="/#main"
        />
      </header>

      <main id="main">
        <Hallway />
      </main>

      <footer id="footer">
        <Container>
          <Paragraph>© 2021 Spring Lakes Golf Club. All Rights Reserved.</Paragraph>
        </Container>
      </footer>
    </Page>
  )
}