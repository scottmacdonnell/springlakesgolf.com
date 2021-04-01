import Page from '../components/Page'
import Container from '../components/Container'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Hallway from '../components/Hallway'
import HallwayCard from '../components/HallwayCard'

export default function Index() {
  return (
    <Page
      className="Index"
      slug="/"
    >
      <header id="header">
        <Navbar />
      </header>

      <main id="main">
        <Banner 
          title="Spring Lakes Golf Club"
          image="/images/index/banner.jpg"
          chevron="#hallway"
          index
        />

        <Hallway id="hallway" />
      </main>

      {/* <footer id="footer">
        <Container>
          <p>© 2021 Spring Lakes Golf Club. All Rights Reserved.</p>
        </Container>
      </footer> */}
    </Page>
  )
}