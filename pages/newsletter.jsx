import Page from '../components/Page'
import Maintenance from '../components/Maintenance'
import Footer from '../components/Footer'

import { useAuth } from '../lib/auth'

export default function Newsletter() {
  // const auth = useAuth()
  const auth = false

  return (
    <Page
      className="Newsletter"
      slug="newsletter"
    >
      <header>
      </header>

      <main>
        <Maintenance />
      </main>

      <footer>
      </footer>
    </Page>
  )
}