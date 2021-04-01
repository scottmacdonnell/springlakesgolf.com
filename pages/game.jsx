import Page from '../components/Page'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Paragraph from '../components/Paragraph'

export default function Game() {
  return (
    <Page
      className="Game"
      pageName="Game Improvement"
      slug="/game"
    >
      <header>
        <Navbar mainNav />  
      </header>

      <main>
        <Banner 
          title="Game Improvement"
          image="/images/game/banner.jpg"
        />

        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ipsam ducimus beatae iste soluta placeat nesciunt atque impedit, nisi quo asperiores quibusdam qui sed suscipit, sint nulla quos dicta ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sunt quidem blanditiis fuga eligendi dolore, nam esse similique optio? Maiores voluptatibus fugiat ut inventore officia ex iusto aliquam accusamus dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, harum aliquid excepturi saepe, nihil ab quasi explicabo voluptatibus quis ex culpa nisi placeat sed error cupiditate similique velit perferendis dolore!
        </Paragraph>
      </main>

      <footer>
        
      </footer>
    </Page>
  )
}