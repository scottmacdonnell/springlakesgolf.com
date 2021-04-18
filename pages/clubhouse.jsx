import Page from '../components/Page'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import MenuNav from '../components/MenuNav'
import Footer from '../components/Footer'

export default function Clubhouse() {
  return (
    <Page
      className="Clubhouse"
      pageName="Clubhouse & Dining"
      slug="/clubhouse"
    >
      <header>
        <Navbar mainNav />
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