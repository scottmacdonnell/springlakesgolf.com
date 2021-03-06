import Page from '../components/Page'
import Container from '../components/Container'
import Paragraph from '../components/Paragraph'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'

export default function Contact() {
  return (
    <Page
      className="Contact"
      pageName="Contact Us"
      slug="/contact"
    >
      <header id="header">
        <Navbar />
      </header>

      <main id="main">
        <section id="banner">
          <Banner 
            title="Contact Us"
            image="/images/contact/banner.jpg"
          />
        </section>

        <section id="intro">
          <Container>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ipsam ducimus beatae iste soluta placeat nesciunt atque impedit, nisi quo asperiores quibusdam qui sed suscipit, sint nulla quos dicta ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sunt quidem blanditiis fuga eligendi dolore, nam esse similique optio? Maiores voluptatibus fugiat ut inventore officia ex iusto aliquam accusamus dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, harum aliquid excepturi saepe, nihil ab quasi explicabo voluptatibus quis ex culpa nisi placeat sed error cupiditate similique velit perferendis dolore!
            </Paragraph>
          </Container>
        </section>
      </main>

      {/* <footer id="footer">
        <Container>
          <p>© 2021 Spring Lakes Golf Club. All Rights Reserved.</p>
        </Container>
      </footer> */}
    </Page>
  )
}