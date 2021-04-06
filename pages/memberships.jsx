import Page from '../components/Page'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Paragraph from '../components/Paragraph'
import MembershipForm from '../components/MembershipForm'
import MembershipShowcase from  '../components/MembershipShowcase'

import { useAuth } from '../lib/auth'

export default function Memberships() {
  const auth = useAuth()
  
  return (
    <Page
      className="Memberships"
      pageName="Memberships"
      slug="/memberships"
    >
      <header>
        <Navbar auth={auth} mainNav />
      </header>

      <main>
        <Banner
          title="Memberships"
          image="/images/memberships/banner.jpg"
        />

        <MembershipShowcase />
        
        <MembershipForm />
      </main>

      <footer>
        
      </footer>
    </Page>
  )
}