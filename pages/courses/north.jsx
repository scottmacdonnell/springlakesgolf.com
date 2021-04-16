import Page from '../../components/Page'
import Navbar from '../../components/Navbar'
import Banner from '../../components/Banner'
import CourseOverview from '../../components/CourseOverview'
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
          title="The North Course"
          image="/images/courses/north/banner.jpg"
        />

        <CourseOverview
          holes="18"
          par="71"
          yardage="Blue (6352) White (5912) Red (5618) Yellow (5258)"
          img1title="Hole 3"
          img1src="/images/courses/hole3.jpg"
          img2title="Hole 9"
          img2src="/images/courses/hole9.jpg"
          img3title="Hole 15"
          img3src="/images/courses/hole15.jpg"
        >
          <p>With plenty of bodies of water & trees, this golf course requires you to be accurate off of the tee boxes. Golfers do not have to hit it long off the tee, however, there are plenty of opportunities to gain a penalty. The North Course has smaller greens that requires accurate wedges. Come prepared to use all clubs and get creative with many challenging shots.</p>

          <p><strong>Tight and well-placed drives • Water + trees on most holes • Smaller greens, accurate wedges</strong></p>
        </CourseOverview>
      </main>

      <footer>
        <Footer />
      </footer>
    </Page>
  )
}