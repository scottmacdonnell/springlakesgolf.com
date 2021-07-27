import Page, { Animation } from '../../components/Page'
import * as Content from '../../components/Content'
import Navbar from '../../components/Navbar'
import CookiePolicy from '../../components/CookiePolicy'
import ContactForm from '../../components/ContactForm'
import * as Footer from '../../components/Footer'

import { useAuth } from '../../lib/auth'

export default function Cookies() {
  const auth = useAuth()

  return (
    <Page
      className="Cookies"
      pageName="Cookie Policy"
      slug="/legal/cookies"
    >
      <Animation>
        <header>
          <Navbar auth={auth} mainNav invert />
        </header>

        <main>
          <CookiePolicy />
        </main>

        <footer>
          <ContactForm />
          <FooterSection />
        </footer>
      </Animation>
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