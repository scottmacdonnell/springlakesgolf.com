import Page from '../components/Page'
import Container from '../components/Container'
import Paragraph from '../components/Paragraph'
import Banner from '../components/Banner'
import Hallway from '../components/Hallway'

export default function Index() {
  return (
    <Page 
      className="Index"
    >
      <header id="header">
        <Banner 
          title="Spring Lakes Golf Club"
          image="/images/banner/index.jpg"
          chevron="/#main"
        />
      </header>

      <main id="main">
        <Hallway />
      </main>

      <footer id="footer">
        <Container>
          <Paragraph>© 2021 Spring Lakes Golf Club. All Rights Reserved.</Paragraph>
        </Container>
      </footer>
    </Page>
  )
}