import Page from '../../components/Page'
import Navbar from '../../components/Navbar'
import PrivacyPolicy from '../../components/PrivacyPolicy'
import Footer from '../../components/Footer'

export default function Privacy() {
  return (
    <Page
      className="Privacy"
      pageName="Privacy Policy"
      slug="/legal/privacy"
    >
      <header>
        <Navbar mainNav invert />
      </header>

      <main>
        <PrivacyPolicy />
      </main>

      <footer>
        <Footer />
      </footer>
    </Page>
  )
}