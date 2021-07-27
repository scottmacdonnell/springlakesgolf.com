import Page, { Animation } from '../../components/Page'
import * as Content from '../../components/Content'
import Navbar from '../../components/Navbar'
import Banner from '../../components/Banner'
import CoursesShowcase from '../../components/CoursesShowcase'
import ContactForm from '../../components/ContactForm'
import * as Footer from '../../components/Footer'

import { useAuth } from '../../lib/auth'

export default function Courses() {
  const auth = useAuth()
  const authStatus = auth.user ? true : false

  return (
    <Page
      className="Courses"
      pageName="The Courses"
      slug="/courses"
    >
      <Animation>
        <header>
          <Navbar auth={auth} mainNav />
        </header>

        <main>
          <Banner 
            title="The Courses"
            image="/images/courses/banner.jpg"
          />

          <CoursesShowcase />
        </main>

        <footer>
          <ContactForm />
          <FooterSection />
        </footer>
      </Animation>
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