import Page from '../../components/Page'
import Navbar from '../../components/Navbar'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'

export default function CourseNorth() {
  return (
    <Page
      className="CourseNorth"
      pageName="The North Course"
      slug="/course/north"
    >
      <header>
        <Navbar mainNav />
      </header>

      <main>
        <Banner 
          title="The Courses"
          image="/images/course/north/banner.jpg"
        />
      </main>

      <footer>
        <Footer />
      </footer>
    </Page>
  )
}