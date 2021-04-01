import Page from '../components/Page'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Container from '../components/Container'
import Paragraph from '../components/Paragraph'

export default function Events() {
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

        <Container>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ipsam ducimus beatae iste soluta placeat nesciunt atque impedit, nisi quo asperiores quibusdam qui sed suscipit, sint nulla quos dicta ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sunt quidem blanditiis fuga eligendi dolore, nam esse similique optio? Maiores voluptatibus fugiat ut inventore officia ex iusto aliquam accusamus dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, harum aliquid excepturi saepe, nihil ab quasi explicabo voluptatibus quis ex culpa nisi placeat sed error cupiditate similique velit perferendis dolore!
          </Paragraph>
        </Container>
      </main>

      <footer>
        
      </footer>
    </Page>
  )
}