import Page, { Animation } from '../components/Page'
import * as Content from '../components/Content'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import MenuNav from '../components/MenuNav'
import ContactForm from '../components/ContactForm'
import * as Footer from '../components/Footer'

import { useAuth } from '../lib/auth'

export default function Clubhouse() {
  const auth = useAuth()

  return (
    <Page
      className="Clubhouse"
      pageName="Clubhouse & Dining"
      slug="/clubhouse"
    >
      <Animation>
        <header>
          <Navbar auth={auth} mainNav />
        </header>

        <main>
          <Banner 
            title="Clubhouse & Dining"
            image="/images/clubhouse/banner.jpg"
          />
          <MenuNav />
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