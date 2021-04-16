import { useRouter } from 'next/router'

import Page from '../../components/Page'
import Navbar from '../../components/Navbar'
import LoginForm from '../../components/LoginForm'
import Footer from '../../components/Footer'

import { useAuth } from '../../lib/auth'

export default function Login() {
  const router = useRouter()
  const auth = useAuth()

  if (auth.user && typeof window !== 'undefined') {
    router.push('/member/dashboard')
  }
  
  return (
    <Page
      className="Login"
      pageName="Log In"
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
            <Footer />
          </footer>
        </>
      )}
    </Page>
  )
}