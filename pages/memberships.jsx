import Page from '../components/Page'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Paragraph from '../components/Paragraph'
import MembershipForm from '../components/MembershipForm'
import MembershipShowcase from  '../components/MembershipShowcase'

export default function Memberships() {
  return (
    <Page
      className="Memberships"
      pageName="Memberships"
      slug="/memberships"
    >
      <header>
        <Navbar mainNav />
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