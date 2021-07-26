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

export default function CourseEast() {
  const auth = useAuth()
  const authStatus = auth.user ? true : false
  
  return (
    <Page
      className="CourseEast"
      pageName="The East Course"
      slug="/course/east"
    >
      <header>
        <Navbar auth={auth} mainNav />
      </header>

      <main>
        <Banner 
          title="The East Course"
          image="/images/courses/east/banner.jpg"
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
        <Course.Par>72</Course.Par>
        <Course.Yardage
          blue="6910"
          white="6528"
          red="6241"
          yellow="5724"
        />
      </Course.InfoBox>
    </Course.Wrapper>
  )
}

function OverviewSection() {
  return (
    <Course.Wrapper>
      <Course.Overview>
        <Text.Paragraph>East is the longest of the three courses Spring Lakes has to offer. Golfers should come prepared with their driver as the back tees play an astounding 6910 yards! With the front 9 leading golfers back to the clubhouse, golfers can grab a bite to eat at Stanley’s Nest. The East offers a mix of challenging par 4’s that require the golfer to hit some challenging tee shots and approaches. The most notable holes on the East Course are 8, 10, & 18.</Text.Paragraph>
        <Text.Paragraph><strong>Long & Vertical • Driver needs accuracy + distance</strong></Text.Paragraph>
      </Course.Overview>
    </Course.Wrapper>
  )
}

function ImagesSection() {
  return (
    <Course.Wrapper>
      <Course.Images>
        <Course.Photo
          title="Hole 8"
          src="/images/courses/east/hole8.jpg"
        />
        <Course.Photo
          title="Hole 14"
          src="/images/courses/east/hole14.jpg"
        />
        <Course.Photo
          title="Hole 18"
          src="/images/courses/east/hole18.jpg"
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