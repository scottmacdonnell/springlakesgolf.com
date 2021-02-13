import Page from '../components/Page'
import Banner from '../components/Banner'
import Hallway from '../components/Hallway'
import Footer from '../components/Footer'

import { useAuth } from '../lib/auth'

export default function Index() {
  const auth = useAuth()

  return (
    <Page 
      className="Index"
    >
      <header>
        <Banner />
      </header>

      <main>
        <Hallway />
      </main>

      <footer>
        <Footer />
      </footer>
    </Page>
  )
}