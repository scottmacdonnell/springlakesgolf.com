import Page from '../../components/Page'
import * as Content from '../../components/Content'
import Navbar from '../../components/Navbar'
import Banner from '../../components/Banner'
import CourseOverview from '../../components/CourseOverview'
import * as Course from '../../components/Course'
import ContactForm from '../../components/ContactForm'
import * as Footer from '../../components/Footer'
import * as Text from '../../components/ui/Text'

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
        <InfoBoxSection />
        <OverviewSection />
        <ImagesSection />
      </main>

      <footer>
        <ContactForm />
        <FooterSection />
      </footer>
    </Page>
  )
}

function InfoBoxSection() {
  return (
    <Course.Wrapper>
      <Course.InfoBox>
        <Course.Holes>18</Course.Holes>
        <Course.Par>71</Course.Par>
        <Course.Yardage
          blue="6398"
          white="5992"
          red="5706"
          yellow="5325"
        />
      </Course.InfoBox>
    </Course.Wrapper>
  )
}

function OverviewSection() {
  return (
    <Course.Wrapper>
      <Course.Overview>
        <Text.Paragraph>Featuring the longest hole on the course, hole 3, playing 544 yards from the back tees. This course challenges golfers to use all clubs in the bag. Featuring two of the trickier holes, that club has to offer, the two island greens are sure to be a challenge. Golfers will need to manage and navigate the course as most greens are protected by bunkers.</Text.Paragraph>
        <Text.Paragraph><strong>Long, tough Par 5’s • Simple layout, accuracy needed • Memorable, thrilling par 3’s • Good mix of tight</strong></Text.Paragraph>
      </Course.Overview>
    </Course.Wrapper>
  )
}

function ImagesSection() {
  return (
    <Course.Wrapper>
      <Course.Images>
        <Course.Photo
          title="Hole 3"
          src="/images/courses/south/hole3.jpg"
        />
        <Course.Photo
          title="Hole 11"
          src="/images/courses/south/hole11.jpg"
        />
        <Course.Photo
          title="Hole 18"
          src="/images/courses/south/hole18.jpg"
        />
      </Course.Images>
    </Course.Wrapper>
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