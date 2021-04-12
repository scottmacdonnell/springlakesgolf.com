import Link from 'next/link'

import Page from '../components/Page'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import ImageFeature from '../components/ImageFeature'
import GoogleMaps from '../components/GoogleMaps'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

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

        <ImageFeature
          imageSrc="/images/contact/banner.jpg"
        >
          <h3>Spring Lakes Golf Club</h3>
          <p>4962 Stouffville Rd, Whitchurch-Stouffville, ON L4A 3S8</p>
          <div>
            <h5>Hours</h5>
            <ul>
              <li><strong>Week:</strong> 7:30am - Twilight</li>
              <li><strong>Weekend:</strong> 7:00am - Twilight</li>
            </ul>
          </div>

          <div>
            <h5>Email</h5>
            <ul>
              <li>
                <Link href="mailto:info@springlakesgolf.com">
                  <a>info@springlakesgolf.com</a>
                </Link>
              </li>
            </ul>

            <h5>Phone</h5>
            <ul>
              <li>(905)640-3633</li>
            </ul>
          </div>

          <div>
            <h5>Extentions</h5>
            <ul>
              <li><strong>Proshop:</strong></li>
              <li><strong>Restaurant:</strong></li>
              <li><strong>Simulators:</strong></li>
              <li><strong>General Inquiries:</strong></li>
            </ul>
          </div>

        </ImageFeature>

        <GoogleMaps />

        <ContactForm />
      </main>

      <footer>
        <Footer />
      </footer>
    </Page>
  )
}