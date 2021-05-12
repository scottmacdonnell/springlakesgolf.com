import { useRouter } from 'next/router'

import Page from '../../components/Page'
import Navbar from '../../components/Navbar'
import EmailAuth from '../../components/EmailAuth'
import Footer from '../../components/Footer'

import { useAuth } from '../../lib/auth'

export default function EmailSignup() {
  const router = useRouter()
  const auth = useAuth()

  if (auth.user && typeof window !== 'undefined') {
    router.push('/member/dashboard')
  }
  
  return (
    <Page
      className="EmailSignup"
      pageName="Sign Up with Email"
      slug="/member/emailregister"
    >
      { auth.user ? <div /> : (
        <>
          <header>
            <Navbar auth={auth} invert mainNav />
          </header>

          <main>
            <EmailAuth auth={auth} />
          </main>
        
          <footer>
            <Footer noContact />
          </footer>
        </>
      )}
    </Page>
  )
}