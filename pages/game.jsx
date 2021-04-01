import Page from '../components/Page'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Paragraph from '../components/Paragraph'
import ImageFeature from '../components/ImageFeature'
import GameShowcase from '../components/GameShowcase'

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

        <ImageFeature
          imageSrc="/images/game/shayne.jpg"
        >
          <h2>Meet Shayne Dysart</h2>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
        </ImageFeature>

        <GameShowcase />
      </main>

      <footer>
        
      </footer>
    </Page>
  )
}