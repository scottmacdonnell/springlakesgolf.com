import Page from '../components/Page'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Hallway from '../components/Hallway'
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
        <h5>Coming Soon</h5>
      </main>

      <footer>
      </footer>
    </Page>
  )
}