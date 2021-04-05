import { useRouter } from 'next/router'
import Image from 'next/image'

import Page from '../../components/Page'
import Navbar from '../../components/Navbar'
import Banner from '../../components/Banner'

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
      slug="/member"
    >
      { auth.user ? (
        <>
          <header>
            <Navbar mainNav />
          </header>

          <main>
            <Banner 
              title="Spring Lakes Golf Club"
              subtitle={`Welcome, ${auth.user.name}`}
              image="/images/index/banner.jpg"
              chevron="#hallway"
              index
            />
            <br/><br/><br/><br/>

            <h1>MemberIndex</h1>

            <Image
              src={auth?.user?.photoUrl}
              width={32}
              height={32}
            />

            <h3>{auth.user.name}</h3>
            <p>{auth.user.email}</p>
            <p>Provider: {auth.user.provider}</p>
            <button onClick={(e) => auth.signOut()}>Sign Out</button>
          </main>
        
          <footer>
            
          </footer>
        </>
      ) : <div /> }
    </Page>
  )
}