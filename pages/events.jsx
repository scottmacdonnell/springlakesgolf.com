import Page from '../components/Page'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import TextFeature from '../components/ui/TextFeature'
import EventsShowcase from '../components/EventsShowcase'
import BookingForm from '../components/BookingForm'
import Footer from '../components/Footer'

import { useAuth } from '../lib/auth'

export default function Events() {
  const auth = useAuth()
  const authStatus = auth.user ? true : false

  return (
    <Page
      className="Events"
      pageName="Events"
      slug="/events"
    >
      <header>
        <Navbar mainNav />
      </header>

      <main>
        <Banner
          title="Events"
          image="/images/events/banner.jpg"
        />

        <TextFeature>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ipsam ducimus beatae iste soluta placeat nesciunt atque impedit, nisi quo asperiores quibusdam qui sed suscipit, sint nulla quos dicta ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sunt quidem blanditiis fuga eligendi dolore, nam esse similique optio? Maiores voluptatibus fugiat ut inventore officia ex iusto aliquam accusamus dignissimos. </p>
        </TextFeature>

        <EventsShowcase member={authStatus} />

        <BookingForm />
      </main>

      <footer>
        <Footer noContact />
      </footer>
    </Page>
  )
}