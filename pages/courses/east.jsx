import Page from '../../components/Page'
import * as Content from '../../components/Content'
import Navbar from '../../components/Navbar'
import Banner from '../../components/Banner'
import CourseOverview from '../../components/CourseOverview'
import ContactForm from '../../components/ContactForm'
import * as Footer from '../../components/Footer'

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
        
        <CourseOverview
          holes="18"
          par="72"
          yardage="Blue (6910) White (6528) Red (6241) Yellow (5724)"
          img1title="Hole 8"
          img1src="/images/courses/east/hole8.jpg"
          img2title="Hole 14"
          img2src="/images/courses/east/hole14.jpg"
          img3title="Hole 18"
          img3src="/images/courses/east/hole18.jpg"
        >
          <p>East is the longest of the three courses Spring Lakes has to offer. Golfers should come prepared with their driver as the back tees play an astounding 6910 yards! With the front 9 leading golfers back to the clubhouse, golfers can grab a bite to eat at Stanley’s Nest. The East offers a mix of challenging par 4’s that require the golfer to hit some challenging tee shots and approaches. The most notable holes on the East Course are 8, 10, & 18.</p>
          
          <p><strong>Long & Vertical • Driver needs accuracy + distance</strong></p>
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