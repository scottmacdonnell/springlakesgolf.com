import Link from 'next/link'

import Page from '../components/Page'
import Container from '../components/Container'
import Paragraph from '../components/Paragraph'
import Header from '../components/Header'
import MenuCards from '../components/MenuCards'

import { useAuth } from '../lib/auth'

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
}

const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } },
}

export default function Clubhouse() {
  const auth = useAuth()

  return (
    <Page
      className="Clubhouse"
      pageName="Clubhouse & Dining"
      slug="/clubhouse"
    >
      <header id="header">
        <Header
          title="Clubhouse & Dining"
          image="/images/header/clubhouse.jpg"
        />
      </header>

      <main id="main">
        <Container>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ipsam ducimus beatae iste soluta placeat nesciunt atque impedit, nisi quo asperiores quibusdam qui sed suscipit, sint nulla quos dicta ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sunt quidem blanditiis fuga eligendi dolore, nam esse similique optio? Maiores voluptatibus fugiat ut inventore officia ex iusto aliquam accusamus dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, harum aliquid excepturi saepe, nihil ab quasi explicabo voluptatibus quis ex culpa nisi placeat sed error cupiditate similique velit perferendis dolore!
          </Paragraph>
        </Container>

        <Container>
          <MenuCards />
        </Container>
      </main>

      <footer id="footer">
        <Container>
          <Paragraph>© 2021 Spring Lakes Golf Club. All Rights Reserved.</Paragraph>
        </Container>
      </footer>
    </Page>
  )
}