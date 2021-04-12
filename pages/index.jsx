import Page from '../components/Page'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Hallway from '../components/Hallway'
import Footer from '../components/Footer'

export default function Index() {  
  return (
    <Page
      className="Index"
      slug="/"
    >
      <header>
        <Navbar />
      </header>

      <main>
        <Banner
          title="Spring Lakes Golf Club"
          image="/images/index/banner.jpg"
          chevron="#main"
          alignImage="top"
          index
        />

        <div id="main" />
        <Hallway />
      </main>

      <footer>
        <Footer />
      </footer>
    </Page>
  )
}