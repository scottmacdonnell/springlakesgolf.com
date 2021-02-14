import Page from '../components/Page'
import Container from '../components/Container'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Events() {
  return (
    <Page 
      className="Events"
      pageName="Events"
      slug="/events"
    >
      <header>
        <Container>
          <Navbar />
        </Container>
      </header>

      <main>
        <Container>
          <h1>Events</h1>
        </Container>
      </main>

      <footer>
        <Footer />
      </footer>
    </Page>
  )
}