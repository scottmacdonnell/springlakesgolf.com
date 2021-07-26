import Page from '../../components/Page'
import * as Content from '../components/Content'
import Navbar from '../../components/Navbar'
import PrivacyPolicy from '../../components/PrivacyPolicy'
import ContactForm from '../components/ContactForm'
import * as Footer from '../components/Footer'

import { useAuth } from '../../lib/auth'

export default function Privacy() {
  const auth = useAuth()

  return (
    <Page
      className="Privacy"
      pageName="Privacy Policy"
      slug="/legal/privacy"
    >
      <header>
        <Navbar auth={auth} mainNav invert />
      </header>

      <main>
        <PrivacyPolicy />
      </main>

      <footer>
        <FooterSection />
      </footer>
    </Page>
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