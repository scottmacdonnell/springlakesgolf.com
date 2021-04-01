import { useRouter } from 'next/router'

import Page from '../../components/Page'
import Navbar from '../../components/Navbar'
import SignupForm from '../../components/SignupForm'

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
          <header>
            <Navbar invert mainNav />
          </header>

          <main>
            <SignupForm auth={auth} />
          </main>
        
          <footer>

          </footer>
        </>
      )}
    </Page>
  )
}