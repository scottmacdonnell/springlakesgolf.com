import { useRouter } from 'next/router'

import Page from '../../components/Page'
import Container from '../../components/Container'
import Navbar from '../../components/Navbar'
import MemberNav from '../../components/MemberNav'
import Footer from '../../components/Footer'

import { useAuth } from '../../lib/auth'

export default function MemberIndex() {
  const router = useRouter()
  const auth = useAuth()

  if (!auth.user && typeof window !== 'undefined') {
    router.push('/member/login')
    console.log("Not Signed In...")
  }
  
  return (
    <Page 
      className="MemberIndex"
      pageName="Member"
      slug="/member"
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
            <Container>
              <h1>Member Index</h1>
            </Container>

            <Container>
              <MemberNav />
                <p>UID: {auth.user.uid}</p>
                <p>Email: {auth.user.email}</p>
                <p>Name: {auth.user.name}</p>
                <p>Provider: {auth.user.provider}</p>
                <p>Photo URL: {auth.user.photoUrl}</p>
                <button onClick={(e) => auth.signOut()}>Sign Out</button>
            </Container>
          </>
        ) : (
          <>
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