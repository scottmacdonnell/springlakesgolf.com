import Page, { Animation } from '../components/Page'
import * as Content from '../components/Content'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import MembershipShowcase from  '../components/MembershipShowcase'
import MembershipForm from '../components/MembershipForm'
import * as Footer from '../components/Footer'

import * as Text from '../components/ui/Text'
import Box from '../components/utils/Box'

import { useAuth } from '../lib/auth'

export default function Memberships() {
  const auth = useAuth()

  return (
    <Page
      className="Memberships"
      pageName="Memberships"
      slug="/memberships"
    >
      <Animation>
        <header>
          <Navbar auth={auth} mainNav />
        </header>

        <main>
          <Banner
            title="Memberships"
            image="/images/memberships/banner.jpg"
          />

          <MembershipShowcase auth={auth} />
          
          <div id="membershipForm" />
          <MembershipForm />
        </main>

        <footer>
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