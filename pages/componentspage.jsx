import Page from '../components/Page'
import Container from '../components/Container'

import MemberNav from '../components/MemberNav'

import Banner from '../components/Banner'
import Hallway from '../components/Hallway'
import Footer from '../components/Footer'

export default function ComponentsPage() {
  return (
    <Page
      className="Components"
      pageName="Components"
      slug="/componentspage"
      description="The design scheme for the website."
    >
      <p>Headings</p>

      <Container>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
      </Container>

      <p>Banner</p>
      <Banner />

      <p>Footer</p>
      <Footer />

      <p>Hallway</p>
      <Hallway />

      <p>MemberNav</p>
      <Container>
        <MemberNav />
      </Container>

    </Page>
  )
}