import Page from '../components/Page'
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
        <Navbar />
      </header>

      <main>
        <h1>Memberships</h1>
      </main>

      <footer>
        <Footer />
      </footer>
    </Page>
  )
}