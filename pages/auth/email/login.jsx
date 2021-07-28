import Page, { Animation } from '../../../components/Page'
import Loader from '../../../components/utils/Loader'
import * as Content from '../../../components/Content'
import Navbar from '../../../components/Navbar'
import EmailLogIn from '../../../components/EmailLogIn'
import * as Footer from '../../../components/Footer'

import { useAuth } from '../../../lib/auth'

export default function AuthEmailLogIn() {
  const auth = useAuth()

  if (auth.loading) {
    return <Page><Loader /></Page>
  }
  
  return (
    <Page
      className="AuthEmailLogIn"
      pageName="Log In with Email"
      slug="/auth/email/login"
    >
      <Animation>
        <header>
          <Navbar auth={auth} invert mainNav />
        </header>

        <main>
          <EmailLogIn />
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