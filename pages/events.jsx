import Page from '../components/Page'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Paragraph from '../components/Paragraph'
import EventsShowcase from '../components/EventsShowcase'
import BookingForm from '../components/BookingForm'

import { useAuth } from '../lib/auth'

export default function Events() {
  const auth = useAuth()
  
  return (
    <Page
      className="Events"
      pageName="Events"
      slug="/events"
    >
      <header>
      <Navbar auth={auth} mainNav />
      </header>

      <main>
        <Banner
          title="Events"
          image="/images/events/banner.jpg"
        />

        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ipsam ducimus beatae iste soluta placeat nesciunt atque impedit, nisi quo asperiores quibusdam qui sed suscipit, sint nulla quos dicta ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sunt quidem blanditiis fuga eligendi dolore, nam esse similique optio? Maiores voluptatibus fugiat ut inventore officia ex iusto aliquam accusamus dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, harum aliquid excepturi saepe, nihil ab quasi explicabo voluptatibus quis ex culpa nisi placeat sed error cupiditate similique velit perferendis dolore!
        </Paragraph>

        <EventsShowcase />

        <BookingForm />
      </main>

      <footer>
        
      </footer>
    </Page>
  )
}