import { useRouter } from 'next/router'

import Page from '../../components/Page'
import Navbar from '../../components/Navbar'
import LoginForm from '../../components/LoginForm'

import { useAuth } from '../../lib/auth'

export default function MemberLogin() {
  const router = useRouter()
  const auth = useAuth()

  if (auth.user && typeof window !== 'undefined') {
    router.push('/member')
    console.log("Logged In...")
  }
  
  return (
    <Page
      className="MemberLogin"
      pageName="Member Log In"
      slug="/member/login"
    >
      { auth.user ? <div /> : (
        <>
          <header>
            <Navbar invert mainNav />
          </header>

          <main>
            <LoginForm auth={auth} />
          </main>
        
          <footer>
            
          </footer>
        </>
      )}
    </Page>
  )
}