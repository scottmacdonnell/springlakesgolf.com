import Page from '../../components/Page'
import Navbar from '../../components/Navbar'
import PrivacyPolicy from '../../components/PrivacyPolicy'
import Footer from '../../components/Footer'

import { useAuth } from '../../lib/auth'

export default function Privacy() {
  const auth = useAuth()
  const authStatus = auth.user ? true : false

  return (
    <Page
      className="Privacy"
      pageName="Privacy Policy"
      slug="/legal/privacy"
    >
      <header>
        <Navbar auth={auth} mainNav invert />
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