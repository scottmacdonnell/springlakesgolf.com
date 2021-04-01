import Page from '../components/Page'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Container from '../components/Container'
import Heading from '../components/Heading'
import GoogleMaps from '../components/GoogleMaps'
import ClubInfo from '../components/ClubInfo'

export default function Contact() {
  return (
    <Page
      className="Contact"
      pageName="Contact Us"
      slug="/contact"
    >
      <header>
        <Navbar mainNav />
      </header>

      <main>
        <Banner 
          title="Contact Us"
          image="/images/contact/banner.jpg"
        />

        <Container>
          <Heading>
            <h2>Spring Lakes Golf Club</h2>
            <h3>4962 Stouffville Rd,</h3>
            <h3>Whitchurch-Stouffville, ON L4A 3S8</h3>
          </Heading>
        </Container>

        <GoogleMaps />

        <ClubInfo />
      </main>

      <footer>
        
      </footer>
    </Page>
  )
}