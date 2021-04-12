import Page from '../components/Page'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import MembershipShowcase from  '../components/MembershipShowcase'
import MembershipForm from '../components/MembershipForm'
import Footer from '../components/Footer'

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

        <div id="membershipForm" />
        <MembershipForm />
      </main>

      <footer>
        <Footer />
      </footer>
    </Page>
  )
}