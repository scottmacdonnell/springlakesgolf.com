import { useRouter } from 'next/router'

import Page, { Animation } from '../../components/Page'
import Loader from '../../components/utils/Loader'
import * as Content from '../../components/Content'
import Navbar from '../../components/Navbar'
import LoginForm from '../../components/LoginForm'
import * as Footer from '../../components/Footer'

import { useAuth } from '../../lib/auth'

export default function Login() {
  const router = useRouter()
  const auth = useAuth()

  if (auth.user && typeof window !== 'undefined') {
    router.push('/member/dashboard')
  }
  
  return auth.loading ? <Page><Loader /></Page> : (
    <Page
      className="Login"
      pageName="Log In"
      slug="/member/login"
    >
      { auth.user ? <div /> : (
        <Animation>
          <header>
            <Navbar auth={auth} invert mainNav />
          </header>

          <main>
            <LoginForm auth={auth} />
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