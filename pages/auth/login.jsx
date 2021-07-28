import Page, { Animation } from '../../components/Page'
import Loader from '../../components/utils/Loader'
import * as Content from '../../components/Content'
import Navbar from '../../components/Navbar'
import LogInProviders from '../../components/LogInProviders'
import * as Footer from '../../components/Footer'

import { useAuth } from '../../lib/auth'

export default function AuthLogIn() {
  const auth = useAuth()

  if (auth.loading) {
    return <Page><Loader /></Page>
  }
  
  return (
    <Page
      className="AuthLogIn"
      pageName="Log In"
      slug="/auth/login"
    >
      { auth.user ? '' : (
        <Animation>
          <header>
            <Navbar auth={auth} invert mainNav />
          </header>

          <main>
            <LogInProviders />
          </main>
        
          <footer>
            <FooterSection />
          </footer>
        </Animation>
      )}
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