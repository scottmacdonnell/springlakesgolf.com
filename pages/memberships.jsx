import Page from '../components/Page'
import Container from '../components/Container'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Memberships() {
  return (
    <Page 
      className="Memberships"
      pageName="Memberships"
      slug="/memberships"
    >
      <header>
        <Container>
          <Navbar />
        </Container>
      </header>

      <main>
        <Container>
          <h1>Memberships</h1>
        </Container>
      </main>

      <footer>
        <Footer />
      </footer>
    </Page>
  )
}