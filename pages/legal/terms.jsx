import Page from '../../components/Page'
import * as Content from '../../components/Content'
import Navbar from '../../components/Navbar'
import TermsOfService from '../../components/TermsOfService'
import ContactForm from '../../components/ContactForm'
import * as Footer from '../../components/Footer'

import { useAuth } from '../../lib/auth'

export default function Terms() {
  const auth = useAuth()

  return (
    <Page
      className="Terms"
      pageName="Terms of Service"
      slug="/legal/terms"
    >
      <header>
        <Navbar auth={auth} mainNav invert />
      </header>

      <main>
        <TermsOfService />
      </main>

      <footer>
        <ContactForm />
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