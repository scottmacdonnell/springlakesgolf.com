import Page from '../components/Page'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import GameShowcase from '../components/GameShowcase'
import Footer from '../components/Footer'

export default function Game() {
  return (
    <Page
      className="Game"
      pageName="Game Improvement"
      slug="/game"
    >
      <header>
        <Navbar mainNav />
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