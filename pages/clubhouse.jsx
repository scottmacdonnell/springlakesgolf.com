import Page from '../components/Page'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import MenuNav from '../components/MenuNav'
import Paragraph from '../components/Paragraph'

import { useAuth } from '../lib/auth'

export default function Clubhouse() {
  const auth = useAuth()

  return (
    <Page
      className="Clubhouse"
      pageName="Clubhouse & Dining"
      slug="/clubhouse"
    >
      <header>
        <Navbar auth={auth} mainNav />
      </header>

      <main>
        <Banner 
          title="Clubhouse & Dining"
          image="/images/clubhouse/banner.jpg"
        />

        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ipsam ducimus beatae iste soluta placeat nesciunt atque impedit, nisi quo asperiores quibusdam qui sed suscipit, sint nulla quos dicta ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sunt quidem blanditiis fuga eligendi dolore, nam esse similique optio? Maiores voluptatibus fugiat ut inventore officia ex iusto aliquam accusamus dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, harum aliquid excepturi saepe, nihil ab quasi explicabo voluptatibus quis ex culpa nisi placeat sed error cupiditate similique velit perferendis dolore!
        </Paragraph>

        <MenuNav />
      </main>

      <footer>
        
      </footer>
    </Page>
  )
}