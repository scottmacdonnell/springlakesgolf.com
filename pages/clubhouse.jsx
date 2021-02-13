import Page from '../components/Page'
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
        <Navbar />
      </header>

      <main>
        <h1>Clubhouse & Dining</h1>
      </main>

      <footer>
        <Footer />
      </footer>
    </Page>
  )
}