import { useRouter } from 'next/router'
import Image from 'next/image'

import Page from '../../components/Page'
import Navbar from '../../components/Navbar'
import Dashboard from '../../components/Dashboard'

import { useAuth } from '../../lib/auth'

export default function Member() {
  const router = useRouter()
  const auth = useAuth()

  if (!auth.user && typeof window !== 'undefined') {
    router.push('/member/login')
    console.log("Not Signed In...")
  }
  
  return (
    <Page
      className="Member"
      pageName="Member"
      slug="/member"
    >
      { auth.user ? (
        <>
          <header>
            <Navbar invert mainNav />
          </header>

          <main>
            <Dashboard auth={auth} />
          </main>
        
          <footer>
            
          </footer>
        </>
      ) : <div /> }
    </Page>
  )
}