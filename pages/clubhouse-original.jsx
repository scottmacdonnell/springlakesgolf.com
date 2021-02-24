import Page from '../components/Page'
import Container from '../components/Container'
import Space from '../components/Space'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Clubhouse() {
  return (
    <Page 
      className="Clubhouse"
      pageName="Clubhouse & Dining"
      slug="/clubhouse"
    >
      <header>
        <Header
          title="Clubhouse & Dining"
          image="/images/header/clubhouse.jpg"
        />
      </header>

      <main>
        <Container>
          <Space />
          
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat voLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tin- cidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullam- corper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulpu- tate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore tefeugait nulla facili.</p>

          <Space />
        </Container>
      </main>

      <footer>
        <Footer />
      </footer>
    </Page>
  )
}