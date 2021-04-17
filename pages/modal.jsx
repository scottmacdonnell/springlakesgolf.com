import Page from '../components/Page'
import Modal from '../components/ui/Modal'
import Banner from '../components/Banner'
import Hallway from '../components/Hallway'
import Footer from '../components/Footer'

import { useAuth } from '../lib/auth'
import { useModalState } from '../lib/useModalState'

export default function Index() {
  const auth = useAuth()
  const authStatus = auth.user ? true : false

  return (
    <Page
      className="Index"
      slug="/"
    >
      <header>
      </header>

      <main>
      </main>

      <footer>
      </footer>
    </Page>
  )
}