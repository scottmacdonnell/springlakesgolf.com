import Page, { Animation } from '../../../components/Page'
import Loader from '../../../components/utils/Loader'
import * as Content from '../../../components/Content'
import Navbar from '../../../components/Navbar'
import EmailSignUp from '../../../components/EmailSignUp'
import * as Footer from '../../../components/Footer'

import { useAuth } from '../../../lib/auth'

export default function AuthEmailSignUp() {
  const auth = useAuth()

  if (auth.loading) {
    return <Page><Loader /></Page>
  }
  
  return (
    <Page
      className="AuthEmailSignUp"
      pageName="Sign Up with Email"
      slug="/auth/email/signup"
    >
      <Animation>
        <header>
          <Navbar auth={auth} invert mainNav />
        </header>

        <main>
          <EmailSignUp />
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