import Page from '../components/Page'
import Navbar from '../components/Navbar'
import EventsBanner from '../components/EventsBanner'
import TextFeature from '../components/ui/TextFeature'
import EventsShowcase from '../components/EventsShowcase'
import BookingForm from '../components/BookingForm'
import Footer from '../components/Footer'

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
        <Footer auth={auth} noContact />
      </footer>
    </Page>
  )
}