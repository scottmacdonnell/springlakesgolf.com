import Link from 'next/link'

import Page, { Animation } from '../components/Page'
import * as Content from '../components/Content'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import ImageFeature from '../components/ImageFeature'
import GoogleMaps from '../components/GoogleMaps'
import ContactForm from '../components/ContactForm'
import * as Footer from '../components/Footer'
import * as Text from '../components/ui/Text'
import Box from '../components/utils/Box'

import { useAuth } from '../lib/auth'

export default function Contact() {
  const auth = useAuth()

  return (
    <Page
      className="Contact"
      pageName="Contact Us"
      slug="/contact"
    >
      <Animation>
        <header>
          <Navbar auth={auth} mainNav />
        </header>

        <main>
          <Banner 
            title="Contact Us"
            image="/images/contact/banner.jpg"
          />
          <InfoSection />
          <MapSection />
        </main>

        <footer>
          <ContactForm />
          <FooterSection />
        </footer>
      </Animation>
    </Page>
  )
}

function InfoSection() {
  return (
    <Box>
      <ImageFeature
        imageSrc="/images/contact/info.jpg"
      >
        <Text.Heading3>Spring Lakes Golf Club</Text.Heading3>
        <Text.SHeading>4962 Stouffville Rd, Whitchurch-Stouffville, ON L4A 3S8</Text.SHeading>

        <div style={{ margin: '8px' }} />

        <div>
          <Text.Heading5>Hours</Text.Heading5>
          <Text.Paragraph>8:00am - Twilight</Text.Paragraph>
        </div>

        <div style={{ margin: '8px' }} />

        <div>
          <Text.Heading5>Email</Text.Heading5>
          <Text.Anchor href="mailto:info@springlakesgolf.com">
            <Text.Paragraph>info@springlakesgolf.com</Text.Paragraph>
          </Text.Anchor>
        </div>

        <div style={{ margin: '8px' }} />

        <div>
          <Text.Heading5>Phone</Text.Heading5>
          <Text.Paragraph>(905)640-3633</Text.Paragraph>
        </div>

        <div style={{ margin: '8px' }} />
        
        <div>
          <Text.Heading5>Extentions</Text.Heading5>
          <Text.Paragraph><strong>Reception / General Inquiries:</strong> 224</Text.Paragraph>
          <Text.Paragraph><strong>Pro-shop:</strong> 231</Text.Paragraph>
          <Text.Paragraph><strong>Restaurant:</strong> 223</Text.Paragraph>
          <Text.Paragraph><strong>Shayne Dysart:</strong> 236</Text.Paragraph>
          <Text.Paragraph><strong>Jim Hargrave:</strong> 241</Text.Paragraph>
          <Text.Paragraph><strong>Chris Contois:</strong> 243</Text.Paragraph>
          <Text.Paragraph><strong>Evelyn McLean (accounting):</strong> 235</Text.Paragraph>
          <Text.Paragraph><strong>Laura Piccione:</strong> 224</Text.Paragraph>
        </div>
      </ImageFeature>
    </Box>
  )
}

function MapSection() {
  return (
    <Box>
      <GoogleMaps />
    </Box>
  )
}

function FooterSection() {
  return (
    <Footer.Wrapper>
      <Content.Public>
        <Footer.Public />
      </Content.Public>

      <Content.Members>
        <Footer.Members />
      </Content.Members>
    </Footer.Wrapper>
  )
}