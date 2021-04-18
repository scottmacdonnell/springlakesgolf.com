import Page from '../../components/Page'
import Navbar from '../../components/Navbar'
import CookiePolicy from '../../components/CookiePolicy'
import Footer from '../../components/Footer'

export default function Cookies() {
  return (
    <Page
      className="Cookies"
      pageName="Cookie Policy"
      slug="/legal/cookies"
    >
      <header>
        <Navbar mainNav invert />
      </header>

      <main>
        <CookiePolicy />
      </main>

      <footer>
        <Footer />
      </footer>
    </Page>
  )
}