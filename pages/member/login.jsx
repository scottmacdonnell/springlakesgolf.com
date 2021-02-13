import { useRouter } from 'next/router'
import Link from 'next/link'

import Page from '../../components/Page'
import Container from '../../components/Container'
import Navbar from '../../components/Navbar'
import ProviderAuth from '../../components/ProviderAuth'
import Footer from '../../components/Footer'

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
      pageName="Member Login"
      slug="/member/login"
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
              <h1>Member Login</h1>
            </Container>

            <Container>
              <ProviderAuth auth={auth} />
            </Container>

            <Container>
              <Link href="/member/signup">
                <a>Don't have an account? Sign up here!</a>
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