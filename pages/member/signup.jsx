import { useRouter } from 'next/router'

import Page from '../../components/Page'
import Navbar from '../../components/Navbar'
import SignupForm from '../../components/SignupForm'
import Footer from '../../components/Footer'

import { useAuth } from '../../lib/auth'

export default function Signup() {
  const router = useRouter()
  const auth = useAuth()

  if (auth.user && typeof window !== 'undefined') {
    router.push('/member/dashboard')
  }
  
  return (
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
            <Footer noContact />
          </footer>
        </>
      )}
    </Page>
  )
}