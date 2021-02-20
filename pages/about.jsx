import Page from '../components/Page'
import Container from '../components/Container'
import Header from '../components/Header'
import OwnerMessage from '../components/OwnerMessage'
import Footer from '../components/Footer'

export default function About() {
  return (
    <Page 
      className="About"
      pageName="About Us"
      slug="/about"
    >
      <header>
        <Header
          title="About Us"
          image="/images/header/about.jpg"
        />
      </header>

      <main>
        <Container>
          <OwnerMessage
            title="A word from the owner..."
            image="/images/ownermessage/index.jpg"
            content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi."
          />
        </Container>

        {/* <Team /> */}
      </main>

      <footer>
        <Footer />
      </footer>
    </Page>
  )
}