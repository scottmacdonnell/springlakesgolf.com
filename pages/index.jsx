import Page from '../components/Page'
import * as Content from '../components/Content'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import * as Hallway from '../components/Hallway'
import Footer from '../components/Footer'
import Loader from '../components/utils/Loader'

import { useAuth } from '../lib/auth'

export default function Index() {
  const auth = useAuth()

  return auth.loading ? <Page><Loader /></Page> : (
    <Page
      className="Index"
      slug="/"
    >
      <header>
        <Navbar auth={auth} />
      </header>

      <main>
        <Banner
          title="Spring Lakes Golf Club"
          image={auth?.user?.role !== 'member' ? "/images/index/public/banner.jpg" : "/images/index/members/banner.jpg" }
          chevron="#main"
          alignImage="top"
          subtitle
          auth={auth}
          index
        />

        <div id="main" />
        <HallwaySection />
      </main>

      <footer>
        <Footer auth={auth} />
      </footer>
    </Page>
  )
}

function HallwaySection() {
  return (
    <Hallway.Wrapper>
      <Content.Public>
        <Hallway.Card
          title="About Us"
          link="/about"
          image="/images/index/public/hallway-about.jpg"
        />
        <Hallway.Card
          title="Memberships"
          link="/memberships"
          image="/images/index/public/hallway-memberships.jpg"
        />
        <Hallway.Card
          title="Game Improvement"
          link="/game"
          image="/images/index/public/hallway-game.jpg"
        />
        <Hallway.Card
          title="Clubhouse & Dining"
          link="/clubhouse"
          image="/images/index/public/hallway-clubhouse.jpg"
        />
        <Hallway.Card
          title="Events"
          link="/events"
          image="/images/index/public/hallway-events.jpg"
        />
        <Hallway.Card
          title="Contact Us"
          link="/contact"
          image="/images/index/public/hallway-contact.jpg"
        />
      </Content.Public>

      <Content.Members>
        <Hallway.Card
          title="The Courses"
          link="/courses"
          image="/images/index/members/hallway-courses.jpg"
        />
        <Hallway.Card
          title="Memberships"
          link="/memberships"
          image="/images/index/members/hallway-memberships.jpg"
        />
        <Hallway.Card
          title="Clubhouse & Dining"
          link="/clubhouse"
          image="/images/index/members/hallway-clubhouse.jpg"
        />
        <Hallway.Card
          title="Newsletter"
          link="/newsletter"
          image="/images/index/members/hallway-newsletter.jpg"
        />
        <Hallway.Card
          title="Events"
          link="/events"
          image="/images/index/public/hallway-events.jpg"
        />
        <Hallway.Card
          title="Contact Us"
          link="/contact"
          image="/images/index/members/hallway-contact.jpg"
        />
      </Content.Members>
      <Content.Members>
        <Hallway.Card
          title="The Courses"
          link="/courses"
          image="/images/index/members/hallway-courses.jpg"
        />
        <Hallway.Card
          title="Memberships"
          link="/memberships"
          image="/images/index/members/hallway-memberships.jpg"
        />
        <Hallway.Card
          title="Clubhouse & Dining"
          link="/clubhouse"
          image="/images/index/members/hallway-clubhouse.jpg"
        />
        <Hallway.Card
          title="Newsletter"
          link="/newsletter"
          image="/images/index/members/hallway-newsletter.jpg"
        />
        <Hallway.Card
          title="Events"
          link="/events"
          image="/images/index/public/hallway-events.jpg"
        />
        <Hallway.Card
          title="Contact Us"
          link="/contact"
          image="/images/index/members/hallway-contact.jpg"
        />
      </Content.Members>
    </Hallway.Wrapper>
  )
}