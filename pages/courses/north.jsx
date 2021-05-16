import Page from '../../components/Page'
import Navbar from '../../components/Navbar'
import Banner from '../../components/Banner'
import CourseOverview from '../../components/CourseOverview'
import Footer from '../../components/Footer'

import { useAuth } from '../../lib/auth'

export default function CourseNorth() {
  const auth = useAuth()
  const authStatus = auth.user ? true : false

  return (
    <Page
      className="CourseNorth"
      pageName="The North Course"
      slug="/course/north"
    >
      <header>
        <Navbar auth={auth} mainNav />
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
          img1title="Hole 8"
          img1src="/images/courses/north/hole8.jpg"
          img2title="Hole 12"
          img2src="/images/courses/north/hole12.jpg"
          img3title="Hole 17"
          img3src="/images/courses/north/hole17.jpg"
        >
          <p>With plenty of bodies of water & trees, this golf course requires you to be accurate off of the tee boxes. Golfers do not have to hit it long off the tee, however, there are plenty of opportunities to gain a penalty. The North Course has smaller greens that requires accurate wedges. Come prepared to use all clubs and get creative with many challenging shots.</p>

          <p><strong>Tight and well-placed drives • Water + trees on most holes • Smaller greens, accurate wedges</strong></p>
        </CourseOverview>
      </main>

      <footer>
        <Footer auth={auth} />
      </footer>
    </Page>
  )
}