import Page from '../../components/Page'
import Navbar from '../../components/Navbar'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'

export default function CourseSouth() {
  return (
    <Page
      className="CourseSouth"
      pageName="The South Course"
      slug="/course/south"
    >
      <header>
        <Navbar mainNav />
      </header>

      <main>
        <Banner 
          title="The South Course"
          image="/images/course/south/banner.jpg"
        />
      </main>

      <footer>
        <Footer />
      </footer>
    </Page>
  )
}