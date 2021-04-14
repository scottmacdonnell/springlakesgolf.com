import Page from '../../components/Page'
import Navbar from '../../components/Navbar'
import Banner from '../../components/Banner'
import CourseOverview from '../../components/CourseOverview'
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

        <CourseOverview
          holes="18"
          par="71"
          yardage="Blue (6398) White (5992) Red (5706) Yellow (5325)"
          img1title="Hole 3"
          img1src="/images/course/south/banner.jpg"
          img2title="Hole 9"
          img2src="/images/course/south/banner.jpg"
          img3title="Hole 15"
          img3src="/images/course/south/banner.jpg"
        >
          <p>Featuring the longest hole on the course, hole 3, playing 544 yards from the back tees. This course challenges golfers to use all clubs in the bag. Featuring two of the trickier holes, that club has to offer, the two island greens are sure to be a challenge. Golfers \will need to manage and navigate the course as most greens are protected by bunkers.</p>

          <p><strong>Long, tough Par 5’s • Simple layout, accuracy needed • Memorable, thrilling par 3’s • Good mix of tight</strong></p>
        </CourseOverview>
      </main>

      <footer>
        <Footer />
      </footer>
    </Page>
  )
}