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
        <section id="banner">
          <Banner 
            title="Spring Lakes Golf Club"
            image="/images/index/banner.jpg"
            chevron="#hallway"
            index
          />
        </section>

        <section id="hallway">
          <Hallway>
            <HallwayCard
              title="About Us"
              link="/about"
              image="/images/index/hallway-about.jpg"
            />
            <HallwayCard
              title="Memberships"
              link="/memberships"
              image="/images/index/hallway-memberships.jpg"
            />
            <HallwayCard
              title="Game Improvement"
              link="/game"
              image="/images/index/hallway-game.jpg"
            />
            <HallwayCard
              title="Clubhouse & Dining"
              link="/clubhouse"
              image="/images/index/hallway-clubhouse.jpg"
            />
            <HallwayCard
              title="Events"
              link="/events"
              image="/images/index/hallway-events.jpg"
            />
            <HallwayCard
              title="Contact Us"
              link="/contact"
              image="/images/index/hallway-contact.jpg"
            />
          </Hallway>
        </section>
      </main>

      {/* <footer id="footer">
        <Container>
          <p>© 2021 Spring Lakes Golf Club. All Rights Reserved.</p>
        </Container>
      </footer> */}
    </Page>
  )
}