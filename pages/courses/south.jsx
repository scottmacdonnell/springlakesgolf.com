import Page from '../../components/Page'
import * as Content from '../../components/Content'
import Navbar from '../../components/Navbar'
import Banner from '../../components/Banner'
import CourseOverview from '../../components/CourseOverview'
import ContactForm from '../../components/ContactForm'
import * as Footer from '../../components/Footer'

import { useAuth } from '../../lib/auth'

export default function CourseSouth() {
  const auth = useAuth()
  const authStatus = auth.user ? true : false

  return (
    <Page
      className="CourseSouth"
      pageName="The South Course"
      slug="/course/south"
    >
      <header>
        <Navbar auth={auth} mainNav />
      </header>

      <main>
        <Banner 
          title="The South Course"
          image="/images/courses/south/banner.jpg"
        />

        <CourseOverview
          holes="18"
          par="71"
          yardage="Blue (6398) White (5992) Red (5706) Yellow (5325)"
          img1title="Hole 3"
          img1src="/images/courses/south/hole3.jpg"
          img2title="Hole 11"
          img2src="/images/courses/south/hole11.jpg"
          img3title="Hole 18"
          img3src="/images/courses/south/hole18.jpg"
        >
          <p>Featuring the longest hole on the course, hole 3, playing 544 yards from the back tees. This course challenges golfers to use all clubs in the bag. Featuring two of the trickier holes, that club has to offer, the two island greens are sure to be a challenge. Golfers \will need to manage and navigate the course as most greens are protected by bunkers.</p>

          <p><strong>Long, tough Par 5’s • Simple layout, accuracy needed • Memorable, thrilling par 3’s • Good mix of tight</strong></p>
        </CourseOverview>
      </main>

      <footer>
        <ContactForm />
        <FooterSection />
      </footer>
    </Page>
  )
}

function FooterSection() {
  return (
    <Footer.Wrapper>
      <Content.Public>
        <Footer.Public />
      </Content.Public>

      <Content.Members>
        <Footer.Members />
      </Content.Members>
    </Footer.Wrapper>
  )
}