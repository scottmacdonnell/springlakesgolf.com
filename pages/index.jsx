import Page from '../components/Page'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Hallway from '../components/Hallway'

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
          chevron="#hallway"
          index
        />

        <Hallway id="hallway" />
      </main>

      <footer>
        
      </footer>
    </Page>
  )
}