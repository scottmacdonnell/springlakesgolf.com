import Page from '../components/Page'
import * as Content from '../components/Content'
import Navbar from '../components/Navbar'
import EventsBanner from '../components/EventsBanner'
import TextFeature from '../components/ui/TextFeature'
import EventsShowcase from '../components/EventsShowcase'
import BookingForm from '../components/BookingForm'
import * as Footer from '../components/Footer'

import { useAuth } from '../lib/auth'

export default function Events() {
  const auth = useAuth()

  return (
    <Page
      className="Events"
      pageName="Events"
      slug="/events"
    >
      <div style={{ background: '#648767' }}>
        <header>
          <Navbar auth={auth} mainNav />
        </header>

        <main>
          <EventsBanner />

          <EventsShowcase auth={auth} />

          <BookingForm />
        </main>
      </div>

      <footer>
        <FooterSection />
      </footer>
    </Page>
  )
}

function FooterSection() {
  return (
    <Footer.Wrapper>
      <Content.Public>
        <Footer.Public />
      </Content.Public>

      <Content.Members>
        <Footer.Members />
      </Content.Members>
    </Footer.Wrapper>
  )
}