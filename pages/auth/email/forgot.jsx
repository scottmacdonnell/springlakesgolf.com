import Page, { Animation } from '../../../components/Page'
import * as Content from '../../../components/Content'
import Navbar from '../../../components/Navbar'
import * as Footer from '../../../components/Footer'
import EmailForgot from '../../../components/EmailForgot'
import Box from '../../../components/utils/Box'
import * as Text from '../../../components/ui/Text'

import { useAuth } from '../../../lib/auth'

export default function AuthForgot() {
  const auth = useAuth()
  
  return (
    <Page
      className="AuthForgot"
      pageName="Forgot Password"
      slug="/auth/forgot"
    >
      <Animation>
        <header>
          <Navbar auth={auth} invert mainNav />
        </header>

        <main>
          <EmailForgot />
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