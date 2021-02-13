import { useRouter } from 'next/router'
import Link from 'next/link'

import Page from '../../components/Page'
import Container from '../../components/Container'
import Navbar from '../../components/Navbar'
import ProviderAuth from '../../components/ProviderAuth'
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
      className="MemberSignup"
      pageName="Member Signup"
      slug="/member/signup"
    >
      <header>
        <Container>
          <Navbar />
        </Container>
      </header>

      <main>
        <br/>

        {auth.user ? (
          <>
          </>
        ) : (
          <>
            <Container>
              <h1>Member Signup</h1>
            </Container>
            
            <Container>
              <ProviderAuth auth={auth} />
            </Container>

            <Container>
              <Link href="/member/login">
                <a>Have an account already? Log in here!</a>
              </Link>
            </Container>
          </>
        )}

        <br/>
      </main>

      <footer>
        <Footer />
      </footer>
    </Page>
  )
}