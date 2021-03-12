import Page from '../components/Page'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import GoogleMaps from '../components/GoogleMaps'

export default function Contact() {
  return (
    <Page
      className="Contact"
      pageName="Contact Us"
      slug="/contact"
    >
      <header id="header">
        <Navbar mainNav />
      </header>

      <main id="main">
        <section id="banner">
          <Banner 
            title="Contact Us"
            image="/images/contact/banner.jpg"
          />
        </section>

        <section id="intro">
          <Container>
            <Heading>
              <h2>Spring Lakes Golf Club</h2>
              <h3>4962 Stouffville Rd,</h3>
              <h3>Whitchurch-Stouffville, ON L4A 3S8</h3>
            </Heading>
          </Container>
        </section>

        <section id="maps">
          <Container>
            <GoogleMaps />
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