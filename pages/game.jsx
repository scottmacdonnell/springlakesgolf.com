import Page from '../components/Page'
import Container from '../components/Container'
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
        <Container>
          <Navbar />
        </Container>
      </header>

      <main>
        <Container>
          <h1>Game Improvement</h1>
        </Container>
      </main>

      <footer>
        <Footer />
      </footer>
    </Page>
  )
}