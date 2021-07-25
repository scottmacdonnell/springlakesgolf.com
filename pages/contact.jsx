import Link from 'next/link'

import Page from '../components/Page'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import ImageFeature from '../components/ImageFeature'
import GoogleMaps from '../components/GoogleMaps'
import Footer from '../components/Footer'

import { useAuth } from '../lib/auth'

export default function Contact() {
  const auth = useAuth()

  return (
    <Page
      className="Contact"
      pageName="Contact Us"
      slug="/contact"
    >
      <header>
        <Navbar auth={auth} mainNav />
      </header>

      <main>
        <Banner 
          title="Contact Us"
          image="/images/contact/banner.jpg"
        />

        <ImageFeature
          imageSrc="/images/contact/info.jpg"
        >
          <h3>Spring Lakes Golf Club</h3>
          <p>4962 Stouffville Rd, Whitchurch-Stouffville, ON L4A 3S8</p>
          <div>
            <h5>Hours</h5>
            <ul>
              <li>7:00am - Twilight</li>
              <li>* both week and weekend *</li>
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
              <li><strong>Reception / General Inquiries:</strong> 224</li>
              <li><strong>Pro-shop:</strong> 231</li>
              <li><strong>Restaurant:</strong> 223</li>
              <li><strong>Shayne Dysart:</strong> 236</li>
              <li><strong>Jim Hargrave:</strong> 241</li>
              <li><strong>Chris Contois:</strong> 243</li>
              <li><strong>Evelyn McLean (accounting):</strong> 235</li>
              <li><strong>Laura Piccione:</strong> 224</li>
            </ul>
          </div>

        </ImageFeature>

        <GoogleMaps />
      </main>

      <footer>
        <Footer auth={auth} />
      </footer>
    </Page>
  )
}