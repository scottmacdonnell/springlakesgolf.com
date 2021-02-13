import Page from '../components/Page'
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
        <Navbar />
      </header>

      <main>
        <h1>Contact Us</h1>
      </main>

      <footer>
        <Footer />
      </footer>
    </Page>
  )
}