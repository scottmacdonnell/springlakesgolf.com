import Page from '../components/Page'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import MembershipShowcase from  '../components/MembershipShowcase'
import MembershipForm from '../components/MembershipForm'
import Footer from '../components/Footer'

import * as Text from '../components/ui/Text'
import Box from '../components/utils/Box'

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

        <MembershipShowcase auth={auth} />

        <Box>
          <div
            style={{
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text.SHeading
              style={{
                textAlign: 'center',
                maxWidth: '48ch',
                marginBottom: '16px'
              }}
            >
              Spring Lakes will be accepting Membership Applications for the 2022 season. Prices will be sent out in September 2021.
            </Text.SHeading>
          </div>
        </Box>

        

        <div id="membershipForm" />
        <MembershipForm />
      </main>

      <footer>
        <Footer auth={auth} noContact />
      </footer>
    </Page>
  )
}