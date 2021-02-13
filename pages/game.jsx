import Page from '../components/Page'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Game() {
  return (
    <Page 
      className="Game"
      pageName="Game Improvement"
      slug="/game"
    >
      <header>
        <Navbar />
      </header>

      <main>
        <h1>Game Improvement</h1>
      </main>

      <footer>
        <Footer />
      </footer>
    </Page>
  )
}