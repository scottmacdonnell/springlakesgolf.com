import { useRouter } from 'next/router'

import Page from '../../components/Page'
import Loader from '../../components/utils/Loader'
import * as Content from '../../components/Content'
import Navbar from '../../components/Navbar'
import SignupForm from '../../components/SignupForm'
import * as Footer from '../../components/Footer'

import { useAuth } from '../../lib/auth'

export default function Signup() {
  const router = useRouter()
  const auth = useAuth()

  if (auth.user && typeof window !== 'undefined') {
    router.push('/member/dashboard')
  }
  
  return auth.loading ? <Page><Loader /></Page> : (
    <Page
      className="Signup"
      pageName="Sign Up"
      slug="/member/signup"
    >
      { auth.user ? <div /> : (
        <>
          <header>
            <Navbar auth={auth} invert mainNav />
          </header>

          <main>
            <SignupForm auth={auth} />
          </main>
        
          <footer>
            <FooterSection />
          </footer>
        </>
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