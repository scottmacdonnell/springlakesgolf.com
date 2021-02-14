import Page from '../components/Page'
import Container from '../components/Container'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <Page 
      className="Contact"
      pageName="Contact Us"
      slug="/contact"
    >
      <header>
        <Container>
          <Navbar />
        </Container>
      </header>

      <main>
        <Container>
          <h1>Contact Us</h1>
        </Container>
      </main>

      <footer>
        <Footer />
      </footer>
    </Page>
  )
}