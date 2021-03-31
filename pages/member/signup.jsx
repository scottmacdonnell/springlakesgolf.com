import { useRouter } from 'next/router'
import Link from 'next/link'

import Page from '../../components/Page'
import SignupForm from '../../components/SignupForm'
import Footer from '../../components/Footer'

import { useAuth } from '../../lib/auth'

export default function MemberSignup() {
  const router = useRouter()
  const auth = useAuth()

  if (auth.user && typeof window !== 'undefined') {
    router.push('/member')
    console.log("Logged In...")
  }
  
  return (
    <Page
      className="MemberSignUp"
      pageName="Sign Up"
      slug="/member/signup"
    >
      { auth.user ? <div /> : (
        <>
          <header id="header">
              
          </header>

          <main id="main">
            <SignupForm auth={auth} />
          </main>
        
          <footer id="footer">

          </footer>
        </>
      )}
    </Page>
  )
}