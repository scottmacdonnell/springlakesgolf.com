import Page from '../components/Page'
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
        <Navbar />
      </header>

      <main>
        <h1>Events</h1>
      </main>

      <footer>
        <Footer />
      </footer>
    </Page>
  )
}