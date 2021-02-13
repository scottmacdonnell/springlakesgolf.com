import Page from '../components/Page'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <Page 
      className="About"
      pageName="About Us"
      slug="/about"
    >
      <header>
        <Navbar />
      </header>

      <main>
        <h1>About Us</h1>
      </main>

      <footer>
        <Footer />
      </footer>
    </Page>
  )
}