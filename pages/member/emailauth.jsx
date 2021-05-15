import { useRouter } from 'next/router'

import Page from '../../components/Page'
import Navbar from '../../components/Navbar'
import EmailAuth from '../../components/EmailAuth'
import Footer from '../../components/Footer'

import { useAuth } from '../../lib/auth'

export default function EmailLogin() {
  const router = useRouter()
  const auth = useAuth()

  if (auth.user && typeof window !== 'undefined') {
    router.push('/member/dashboard')
  }
  
  return (
    <Page
      className="EmailLogin"
      pageName="Log In with Email"
      slug="/member/emailauth"
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
            <Footer auth={auth} noContact />
          </footer>
        </>
      )}
    </Page>
  )
}