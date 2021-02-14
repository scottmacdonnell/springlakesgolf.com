import Page from '../components/Page'
import Container from '../components/Container'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Clubhouse() {
  return (
    <Page 
      className="Clubhouse"
      pageName="Clubhouse & Dining"
      slug="/clubhouse"
    >
      <header>
        <Container>
          <Navbar />
        </Container>
      </header>

      <main>
        <Container>
          <h1>Clubhouse & Dining</h1>
        </Container>
      </main>

      <footer>
        <Footer />
      </footer>
    </Page>
  )
}