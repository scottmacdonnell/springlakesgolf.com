import Page from '../components/Page'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import MenuNav from '../components/MenuNav'
import Footer from '../components/Footer'

import { useAuth } from '../lib/auth'

export default function Clubhouse() {
  const auth = useAuth()
  const authStatus = auth.user ? true : false

  return (
    <Page
      className="Clubhouse"
      pageName="Clubhouse & Dining"
      slug="/clubhouse"
    >
      <header>
        <Navbar auth={auth} mainNav />
      </header>

      <main>
        <Banner 
          title="Clubhouse & Dining"
          image="/images/clubhouse/banner.jpg"
        />

        <MenuNav />
      </main>

      <footer>
        <Footer />
      </footer>
    </Page>
  )
}