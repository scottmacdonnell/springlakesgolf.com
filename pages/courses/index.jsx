import Page from '../../components/Page'
import Navbar from '../../components/Navbar'
import Banner from '../../components/Banner'
import CoursesShowcase from '../../components/CoursesShowcase'
import Footer from '../../components/Footer'

import { useAuth } from '../../lib/auth'

export default function Courses() {
  const auth = useAuth()
  const authStatus = auth.user ? true : false

  return (
    <Page
      className="Courses"
      pageName="The Courses"
      slug="/courses"
    >
      <header>
        <Navbar auth={auth} mainNav />
      </header>

      <main>
        <Banner 
          title="The Courses"
          image="/images/courses/banner.jpg"
        />

        <CoursesShowcase />
      </main>

      <footer>
        <Footer />
      </footer>
    </Page>
  )
}