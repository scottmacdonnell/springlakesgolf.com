import { useRouter } from 'next/router'

import Page from '../../components/Page'
import Navbar from '../../components/Navbar'
import EmailAuth from '../../components/EmailAuth'

import { useAuth } from '../../lib/auth'

export default function MemberEmailLogin() {
  const router = useRouter()
  const auth = useAuth()

  if (auth.user && typeof window !== 'undefined') {
    router.push('/member')
    console.log("Logged In...")
  }
  
  return (
    <Page
      className="MemberEmailLogin"
      pageName="Log In with Email"
      slug="/member/emailauth"
    >
      { auth.user ? <div /> : (
        <>
          <header>
            <Navbar invert mainNav />
          </header>

          <main>
            <EmailAuth auth={auth} />
          </main>

          <footer>
            
          </footer>
        </>
      )}
    </Page>
  )
}