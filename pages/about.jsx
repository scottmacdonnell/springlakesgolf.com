import Image from 'next/image'

import Page from '../components/Page'
import * as Content from '../components/Content'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import ImageFeature from '../components/ImageFeature'
import * as Team from '../components/Team'
import ContactForm from '../components/ContactForm'
import * as Footer from '../components/Footer'
import * as Text from '../components/ui/Text'
import Box, { BoxGrid } from '../components/utils/Box'

import { useAuth } from '../lib/auth'

export default function About() {
  const auth = useAuth()

  return (
    <Page
      className="About"
      pageName="About"
      slug="/about"
    >
      <header>
        <Navbar auth={auth} mainNav />
      </header>

      <main>
        <Banner
          title="About Us"
          image="/images/about/banner.jpg"
        />
        <OwnersNoteSection />
        <TeamSection />
      </main>

      <footer>
        <ContactForm />
        <FooterSection />
      </footer>
    </Page>
  )
}

function OwnersNoteSection() {
  return (
    <Box>
      <ImageFeature
        imageSrc="/images/about/bob.jpg"
      >
        <Text.Heading2>Owners Note - Our History</Text.Heading2>
        <Text.Paragraph>Starting over 25 years ago, I took over as the Head Golf Professional at Spring Lakes Golf Club. Fast forward to present time, and I have been the owner for 5 years. Over my tenure, I have been able to watch this course grow and flourish. From repaving the parking lot a day after purchasing the club, to renovating the restaurant bar and adding golf simulators in 2021, my goal remains to make Spring Lakes the best private club in Canada.</Text.Paragraph>
        <Text.Paragraph>I am happy to say that I am very proud of what this course has become.</Text.Paragraph>
        <Text.Paragraph>I value the importance of being part of a club and the relationships it helps create.  During a time of uncertainty, we were able to revive social interaction at Spring Lakes by introducing Stanley’s Nest; our outdoor front barbecue area!  I have updated the halfway house, as well as made numerous changes throughout the clubhouse.</Text.Paragraph>
        <Text.Paragraph>I would like to personally thank all the members who put their trust in my hands. To the long standing members, to the members who returned, and to the potential future members reading this; I will continue to steer this club in the right direction while offering what is essential to me, affordable prices.</Text.Paragraph>
        <Text.Paragraph>Thank you,</Text.Paragraph>
        <BobSignature />
      </ImageFeature>
    </Box>
  )
}

function TeamSection() {
  return (
    <Box>
      <div 
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        <Text.Heading2>Meet Our Team</Text.Heading2>
      </div>

      <Team.Wrapper>
        <Team.Card
          photo="/images/about/jim.jpg"
        >
          <Text.Heading5>Jim</Text.Heading5>
          <Text.Paragraph>General Manager</Text.Paragraph>
          <Text.Anchor href="mailto:jim@springlakesgolf.com">
            <Text.Paragraph>jim@springlakesgolf.com</Text.Paragraph>
          </Text.Anchor>
        </Team.Card>

        <Team.Card
          photo="/images/about/chris.jpg"
        >
          <Text.Heading5>Chris</Text.Heading5>
          <Text.Paragraph>Golf Course Superintendent</Text.Paragraph>
          <Text.Anchor href="mailto:chris@springlakesgolf.com">
            <Text.Paragraph>chris@springlakesgolf.com</Text.Paragraph>
          </Text.Anchor>
        </Team.Card>

        <Team.Card
          photo="/images/about/shayne.jpg"
        >
          <Text.Heading5>Shayne</Text.Heading5>
          <Text.Paragraph>Head Professional, P.G.A</Text.Paragraph>
          <Text.Anchor href="mailto:shayne@springlakesgolf.com">
            <Text.Paragraph>shayne@springlakesgolf.com</Text.Paragraph>
          </Text.Anchor>
        </Team.Card>

        <Team.Card
          photo="/images/about/laura.jpg"
        >
          <Text.Heading5>Laura</Text.Heading5>
          <Text.Paragraph>Club House Manager</Text.Paragraph>
          <Text.Anchor href="mailto:laura@springlakesgolf.com">
            <Text.Paragraph>laura@springlakesgolf.com</Text.Paragraph>
          </Text.Anchor>
        </Team.Card>
      </Team.Wrapper>
    </Box>
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

function BobSignature() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 743.2 145.2" width="10rem" style={{ margin: '1rem' }}>
      <defs/>
      <g data-name="Layer 2">
        <g data-name="Layer 1">
          <path d="M119 123c-10 5.2-23.8 10.4-35 10.4a23.68 23.68 0 01-9.8-1.8 5.49 5.49 0 00-2.6-.4c-7 0-18 8.6-29.6 8.6-4.8 0-8-1.8-8-7 0-9.8 7.6-12 15.2-14.8 4-1.4 6.2-1.4 10.2-1.4 5.4 0 8.4-1.6 12.4-5.4 3.6-3.6 6.8-10.2 6.8-15.4 0-4.6-5.2-16.8-11-16.8a9.41 9.41 0 00-3.2.8c-3.8 2-9.2 2.6-13.6 2.6-4 0-12.8-.4-12.8-6 0-7.4 12-11.6 18-11.6 2.8 0 5.6 1 8.4 1 5.4 0 8.8-3.6 11.6-7.8 5.8-8.8 10.4-18.8 10.4-29.6 0-4.6-1.4-19.8-8-19.8C63.4 8.6 22 80 22 96.2c0 3.8 1.6 7.4 1.6 11 0 3.2-1.4 5.6-3.2 8.2a60.23 60.23 0 00-5.4 8.4c-1.2 1.8-1.8 4-3 5.6a13.62 13.62 0 01-9 4.6c-2 0-3-1.2-3-3.4a7.5 7.5 0 01.2-2A168.91 168.91 0 016 109.8a335.41 335.41 0 0127.2-59C40.4 38.8 64.8 0 79.8 0c13.6 0 16.8 20 16.8 30a50.57 50.57 0 01-.2 5.6c-.8 9.6-5.4 18.2-11 25.8a59.44 59.44 0 00-5.4 7 3.38 3.38 0 00-.6 2c0 5.8 8.6 15.2 8.6 22.8V95c0 7.6-.2 9.4-4.2 17.4-1 2-2.2 4.4-2.2 6.6 0 3.6 3.2 4.4 6.2 4.4 6 0 16.8-3.4 22.6-5.6 3.4-1.2 20.6-9.4 22.4-9.4.8 0 1.2 1.4 1.2 2.2 0 4.8-11.4 10.4-15 12.4z"/>
          <path d="M211.2 102.4v-.8c0-.8-.2-1-1.6-1-5 .8-8 2-10.8 2.4a47 47 0 01-5.2.2c-6 0-9.6-1.8-11-1.8-.6 0-.8.6-1 1.6a61.78 61.78 0 01-5.2 10.6c-3.4 5-8.6 9.8-13 13.4-7.2 5.8-18.4 10.4-27.2 10.4-9.6 0-11.4-6.6-11.4-15 0-6.4.4-10.8 3-16.8 3-6.8 10.8-16 17.4-19 1.6-.8 4.4-2.8 6-2.8.8 0 2.8 1 2.8 2 0 1.6-6.4 9.6-8.2 11.8a35.39 35.39 0 00-8.4 23.2c0 3 1.2 5.6 4.6 5.6 6.2 0 15.8-4.6 21.4-11.2 4.6-5.4 6.2-9.8 6.2-13.2a9.44 9.44 0 00-3.4-7.6 8.37 8.37 0 01-3.2-7c0-4.6 2.8-9.4 7.6-9.4 4.2 0 7.6 2.4 9.8 5.8 2.6 4.4 7.6 9.4 12.8 9.4h3.6c4.4 0 18.2-2.4 19.6-6.8l2-6.4c3.2-10.6 10.2-29.4 16.4-38.2 4-5.6 2.6-10.6 9.4-12.2.6 0 1-.2 1.6-.2 4 0 4.8 4.4 4.8 7.8 0 11-7.6 31.4-14.6 40.2-7.4 9.4-11.6 27.2-11.6 38.8 0 2 0 6.6 3 6.6 2.8 0 6.6-3.8 8.2-5.4 8-8.2 15.6-16.8 15.6-28.6 0-5.6 2.4-15.4 9.6-15.4 3.6 0 4.2 3.2 4.2 6a29.84 29.84 0 01-.4 4.2 96.45 96.45 0 00-2.2 18.6c0 5 .6 14.2 7.6 14.2 10.6 0 18.4-7.8 24.2-7.8.8 0 1.4.2 1.4 1.2 0 1.4-1.4 3-2.2 4-5.6 6.2-15.6 9.8-23.6 11a11.71 11.71 0 01-2.6.4c-10 0-12-10.2-14.6-10.2-1.6 0-17 23.8-33.6 23.8-7.4 0-8.8-13.6-8.8-20.6 0-5.4.6-10.2 1-15.8zM417.2 66.8c-6 1.4-6.6 6.6-9.4 12-1.6 3.2-7.4 11.2-7.4 14.2 0 1.4.8 1.6 1.8 2 6.2 2.6 12 12.4 16.6 17.4 6.6 7.4 13 11.4 23.4 11.4 8.6 0 17.4-2.6 25.4-5.2l7.8-3c2.4-1.2 14.4-7.2 16.4-7.2.8 0 1 1.4 1 2.2 0 7.4-27 18-33.4 20a73.19 73.19 0 01-19.8 3.2c-27.4 0-33.2-27.8-43.2-27.8-4.2 0-7.4 3.4-8.8 7-3.8 8.4-19.4 32.2-29.2 32.2-2.4 0-3.4-1.6-3.4-3.8 0-7 8.4-20.8 12.8-26.4a62.16 62.16 0 018.8-9c4-3.4 8.2-6 10.8-11 4-7.8 7.6-15.8 11.8-23.6.2-.4.4-.6.4-.8 0-1.4-2.4-1.4-3.8-1.4-2.2 0-4.2.2-6.4.2-11 0-31.6-3.8-36.2-15.2a16.39 16.39 0 01-1.8-6.8c0-2.2 1-4 3.2-4a6.68 6.68 0 015 2.4c3 3.4-.8 7 8.2 10.8 6.6 3 20.6 4.6 27.8 4.6 3.2 0 10.2 0 12-3.4 13-24 35.2-55.2 65.6-55.2 6.6 0 13.4 1.8 17 7.6 3 4.8 6.6 11.6 6.6 17.2 0 23-62 35.6-79.6 39.4zm51.2-54.2c-17 0-28.8 13.2-37.6 26.2-2 2.8-9.8 13-9.8 16a1.26 1.26 0 001.4 1.4h.8c12-.8 55.6-13 62-22 2-2.8 3.8-6.6 3.8-10.2 0-9.6-13.6-11.4-20.6-11.4z"/>
          <path d="M547.6 116.4c-9.6 7.6-31.4 17.2-43.4 17.2s-20.8-6.2-20.8-18.6a56.81 56.81 0 012.2-14.2c2-7.2 3.2-13.4 8.2-19 4.4-4.8 8.4-8 14.6-9.8a36.3 36.3 0 007.6-2.2 8.6 8.6 0 012.4-.4c5 0 6.4 6.8 6.4 10.6a23.4 23.4 0 01-.8 6.4c-2.8 12-5 14.6-15.4 21.6-1.8 1.2-10.2 5.6-10.2 8.2 0 5.2 5.2 6.6 9.6 6.6a37.91 37.91 0 0012.4-2.4 156.25 156.25 0 0017.4-6.8c3.4-1.4 6.6-3.4 10-4.8a15.79 15.79 0 012.6-.6c1.2 0 1.8.6 1.8 1.6 0 2.6-2.8 5.2-4.6 6.6zm-34-34.6c-1.8 0-4 1.4-5.4 2.4-6 3.8-10.8 10-10.8 17.8 0 .6 0 1.2.8 1.2 3.4 0 12.8-9 14.6-12 1.2-2 2.6-5 2.6-7.2 0-1.2-.6-2.2-1.8-2.2z"/>
          <path d="M538.6 124c0-4.8 1.8-9.4 3.8-13.6 8.4-17 26.8-35.6 47-35.6 9.4 0 9.2 6.4 12.8 12.4 1.4 2.2 3.4 4.6 3.4 7.4 0 5-11.2 12.2-11.2 21 0 3.8 2.6 5.2 6 5.2 12.8 0 31.6-12.4 35.8-12.4.8 0 1 1.4 1 2.2 0 7-25.8 18-32.2 19.4a42 42 0 01-8.6 1c-4.4 0-8.8-1-11.6-4.4-1-1-2.4-5.2-3.6-5.2-2.2 0-18.4 14-30.4 14-7.2 0-12.2-4-12.2-11.4zm48.2-36.8h-.8c-7 0-12.4 3.4-17.8 7.4-7.8 6-13.4 11.8-16.6 21.4a11.33 11.33 0 00-.6 3.6c0 2.6 1.4 3.6 3.8 3.6 5 0 12.8-3.8 17.2-6.2 6.8-3.8 9-5.4 12.4-12.4 2.2-4.4 9.4-9.2 9.4-14.4 0-2.8-4.6-3-7-3z"/>
          <path d="M728.2 123c-10.4 5.8-21.4 9.8-33.4 11a10.57 10.57 0 01-2.6.2c-15.2 0-10.6-15.2-13-19.2a1.1 1.1 0 00-1-.6c-4.2 0-13.8 10-16.2 13.2-2.6 3.2-8 9-12.4 9-4 0-4.2-4.8-4.2-7.8 0-4 .6-8.2.6-12.2 0-1 0-5.4-1.6-5.4-1.4 0-14.4 11-24.2 11-1.2 0-5-.4-5-2.2a3.71 3.71 0 011.4-2.4c1-.8 6.4-3.4 8-4.2a81.36 81.36 0 0012.2-8.2 78.39 78.39 0 009.2-9c2.8-3 13.6-17.4 17.4-17.4 2.8 0 5.6 1 5.6 4.2 0 7.8-10 24.4-10 30.2 0 .2 0 1.2.6 1.2 2.6 0 25.4-21.6 32.8-21.6 4.4 0 5.8 4.8 5.8 8.4 0 6-4.4 11-4.4 16.8 0 3.2 2 4.4 5 4.4a13.51 13.51 0 002.8-.4c13-2 16.2-3 27.8-8 3.8-1.8 10.4-5.4 13.2-5.4a3.38 3.38 0 01.6 2c0 4.6-11.4 10.4-15 12.4z"/>
        </g>
      </g>
    </svg>
  )
}