import Page from '../../components/Page'
import Navbar from '../../components/Navbar'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'

export default function CourseEast() {
  return (
    <Page
      className="CourseEast"
      pageName="The East Course"
      slug="/course/east"
    >
      <header>
        <Navbar mainNav />
      </header>

      <main>
        <Banner 
          title="The East Course"
          image="/images/course/east/banner.jpg"
        />
      </main>

      <footer>
        <Footer />
      </footer>
    </Page>
  )
}