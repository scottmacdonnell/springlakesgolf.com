import { useRouter } from 'next/router'
import Link from 'next/link'

import Page from '../../components/Page'
import Navbar from '../../components/Navbar'
import EmailAuth from '../../components/EmailAuth'
import ProviderAuth from '../../components/ProviderAuth'

import { useAuth } from '../../lib/auth'

export default function MemberEmailRegister() {
  const router = useRouter()
  const auth = useAuth()

  if (auth.user && typeof window !== 'undefined') {
    router.push('/member')
    console.log("Logged In...")
  }
  
  return (
    <Page
      className="MemberEmailRegister"
      pageName="Email Sign Up"
      slug="/member/emailregister"
    >
      { auth.user ? <div /> : (
        <>
          <header id="header">
            
          </header>

          <main id="main">
            <EmailAuth auth={auth} />
          </main>
        
          <footer id="footer">
            
          </footer>
        </>
      )}
    </Page>
  )
}