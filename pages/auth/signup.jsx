import Page, { Animation } from '../../components/Page'
import Loader from '../../components/utils/Loader'
import * as Content from '../../components/Content'
import Navbar from '../../components/Navbar'
import SignUpProviders from '../../components/SignUpProviders'
import * as Footer from '../../components/Footer'

import { useAuth } from '../../lib/auth'

export default function AuthSignUp() {
  const auth = useAuth()
  
  return (
    <Page
      className="AuthSignUp"
      pageName="Sign Up"
      slug="/auth/signup"
    >
      <Animation>
        <header>
          <Navbar auth={auth} invert mainNav />
        </header>

        <main>
          <SignUpProviders />
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