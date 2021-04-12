import Page from '../../components/Page'
import Navbar from '../../components/Navbar'
import TermsOfService from '../../components/TermsOfService'
import Footer from '../../components/Footer'

export default function Terms() {
  return (
    <Page
      className="Terms"
      pageName="Terms of Service"
      slug="/legal/terms"
    >
      <header>
        <Navbar mainNav invert />
      </header>

      <main>
        <TermsOfService />
      </main>

      <footer>
        <Footer />
      </footer>
    </Page>
  )
}