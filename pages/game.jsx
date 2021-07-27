import Page, { Animation } from '../components/Page'
import * as Content from '../components/Content'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import GameShowcase from '../components/GameShowcase'
import ContactForm from '../components/ContactForm'
import * as Footer from '../components/Footer'

import { useAuth } from '../lib/auth'

export default function Game() {
  const auth = useAuth()

  return (
    <Page
      className="Game"
      pageName="Game Improvement"
      slug="/game"
    >
      <Animation>
        <header>
          <Navbar auth={auth} mainNav />
        </header>

        <main>
          <Banner 
            title="Game Improvement"
            image="/images/game/banner.jpg"
          />

          <GameShowcase />
        </main>

        <footer>
          <ContactForm />
          <FooterSection />
        </footer>
      </Animation>
    </Page>
  )
}

function FooterSection() {
  return (
    <Footer.Wrapper>
      <Content.Public>
        <Footer.Public />
      </Content.Public>

      <Content.Members>
        <Footer.Members />
      </Content.Members>
    </Footer.Wrapper>
  )
}