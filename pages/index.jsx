import Page from '../components/Page'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Hallway from '../components/Hallway'

import { useAuth } from '../lib/auth'

export default function Index() {
  const auth = useAuth()
  
  return (
    <Page
      className="Index"
      slug="/"
    >
      <header>
        <Navbar />
      </header>

      <main>
        <Banner 
          title="Spring Lakes Golf Club"
          subtitle={auth.user ? `Welcome, ${auth.user.name}` : ''}
          image="/images/index/banner.jpg"
          chevron="#main"
          index
        />

        <div id="main" />
        <Hallway id="hallway" />
      </main>

      <footer>
        
      </footer>
    </Page>
  )
}