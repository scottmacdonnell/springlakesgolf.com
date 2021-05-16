import Page from '../../components/Page'
import Navbar from '../../components/Navbar'
import TermsOfService from '../../components/TermsOfService'
import Footer from '../../components/Footer'

import { useAuth } from '../../lib/auth'

export default function Terms() {
  const auth = useAuth()

  return (
    <Page
      className="Terms"
      pageName="Terms of Service"
      slug="/legal/terms"
    >
      <header>
        <Navbar auth={auth} mainNav invert />
      </header>

      <main>
        <TermsOfService />
      </main>

      <footer>
        <Footer auth={auth} />
      </footer>
    </Page>
  )
}