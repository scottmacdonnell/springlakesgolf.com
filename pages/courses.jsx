import Page from '../components/Page'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import CoursesShowcase from '../components/CoursesShowcase'
import Footer from '../components/Footer'

export default function Courses() {
  return (
    <Page
      className="Courses"
      pageName="The Courses"
      slug="/courses"
    >
      <header>
        <Navbar mainNav />
      </header>

      <main>
        <Banner 
          title="The Courses"
          image="/images/contact/banner.jpg"
        />

        <CoursesShowcase />
      </main>

      <footer>
        <Footer />
      </footer>
    </Page>
  )
}