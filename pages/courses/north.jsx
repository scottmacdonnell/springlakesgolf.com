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
          blue="6352"
          white="5912"
          red="5618"
          yellow="5258"
        />
      </Course.InfoBox>
    </Course.Wrapper>
  )
}

function OverviewSection() {
  return (
    <Course.Wrapper>
      <Course.Overview>
        <Text.Paragraph>With plenty of bodies of water & trees, this golf course requires you to be accurate off of the tee boxes. Golfers do not have to hit it long off the tee, however, there are plenty of opportunities to gain a penalty. The North Course has smaller greens that requires accurate wedges. Come prepared to use all clubs and get creative with many challenging shots.</Text.Paragraph>
        <Text.Paragraph><strong>Tight and well-placed drives • Water + trees on most holes • Smaller greens, accurate wedges</strong></Text.Paragraph>
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
          src="/images/courses/north/hole8.jpg"
        />
        <Course.Photo
          title="Hole 12"
          src="/images/courses/north/hole12.jpg"
        />
        <Course.Photo
          title="Hole 17"
          src="/images/courses/north/hole17.jpg"
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