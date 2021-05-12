import Page from '../components/Page'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import GameShowcase from '../components/GameShowcase'
import Footer from '../components/Footer'

import { useAuth } from '../lib/auth'

export default function Game() {
  const auth = useAuth()
  const authStatus = auth.user ? true : false

  return (
    <Page
      className="Game"
      pageName="Game Improvement"
      slug="/game"
    >
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
        <Footer />
      </footer>
    </Page>
  )
}