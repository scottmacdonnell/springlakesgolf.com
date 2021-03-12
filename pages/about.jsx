import Page from '../components/Page'
import Container from '../components/Container'
import Paragraph from '../components/Paragraph'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import ImageFeature from '../components/ImageFeature'
import Team from '../components/Team'

export default function About() {
  return (
    <Page
      className="About"
      pageName="About"
      slug="/about"
    >
      <header id="header">
        <Navbar mainNav />
      </header>

      <main id="main">
        <section id="banner">
          <Banner 
            title="About Us"
            image="/images/about/banner.jpg"
          />
        </section>

        <section id="message">
          <Container>
            <ImageFeature
              imageSrc="/images/about/imagefeature-message.jpg"
              imageWidth={720}
              imageHeight={1080}
            >
              <h2>A word from the owner...</h2>

              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
            </ImageFeature>
          </Container>
        </section>

        <section id="team">
          <Container>
            <Team />
          </Container>
        </section>

        
      </main>

      {/* <footer id="footer">
        <Container>
          <p>© 2021 Spring Lakes Golf Club. All Rights Reserved.</p>
        </Container>
      </footer> */}
    </Page>
  )
}