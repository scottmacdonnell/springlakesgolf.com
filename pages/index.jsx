import Page from '../components/Page'
import Banner from '../components/Banner'
import Hallway from '../components/Hallway'
import Footer from '../components/Footer'

export default function Index() {
  return (
    <Page 
      className="Index"
    >
      <header id="header">
        <Banner 
          title="Spring Lakes Golf Club"
          image="/images/banner/index.jpg"
          chevron="/#main"
        />
      </header>

      <main id="main">
        <Hallway />
      </main>

      <footer id="footer">
        <Footer />
      </footer>
    </Page>
  )
}