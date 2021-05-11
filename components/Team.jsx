import Image from 'next/image'
import Link from 'next/link'

import Container from './ui/Container'

import styles from '../styles/components/Team.module.scss'

export default function Team() {
  return (
    <Container>
      <TeamComponent>
        <TeamHeader>
          <h2>Meet Our Team</h2>
        </TeamHeader>

        <TeamMain>
          <TeamMember
            image="/images/about/jim.jpg"
          >
            <h5>Jim</h5>
            <p>General Manager</p>
            <br/>
            <Link href="mailto:jim@springlakesgolf.com">
              <a><p>jim@springlakesgolf.com</p></a>
            </Link>
          </TeamMember>

          <TeamMember
            image="/images/about/chris.jpg"
          >
            <h5>Chris</h5>
            <p>Golf Superintendent</p>
            <br/>
            <Link href="mailto:chris@springlakesgolf.com">
              <a><p>chris@springlakesgolf.com</p></a>
            </Link>
          </TeamMember>

          <TeamMember
            image="/images/about/shane.jpg"
          >
            <h5>Shayne</h5>
            <p>Head Professional, P.G.A</p>
            <br/>
            <Link href="mailto:shane@springlakesgolf.com">
              <a><p>shayne@springlakesgolf.com</p></a>
            </Link>
          </TeamMember>

          <TeamMember
            image="/images/about/laura.jpg"
          >
            <h5>Laura</h5>
            <p>Club House Manager</p>
            <br/>
            <Link href="mailto:laura@springlakesgolf.com">
              <a><p>laura@springlakesgolf.com</p></a>
            </Link>
          </TeamMember>
        </TeamMain>
      </TeamComponent>
    </Container>
  )
}

function TeamMember({
  children,
  image,
}) {
  return (
    <div className={styles.TeamMember}>
      <div className={styles.TeamMemberImage}>
        <Image
          src={image}
          alt="Team Member"
          width={810}
          height={1080}
          layout="intrinsic"
          objectFit="contain"
        />
      </div>

      <div className={styles.TeamMemberContent}>
        {children}
      </div>
    </div>
  )
}

function TeamMain(props) {
  return (
    <div className={styles.TeamMain}>
      {props.children}
    </div>
  )
}

function TeamHeader(props) {
  return (
    <div className={styles.TeamHeader}>
      {props.children}
    </div>
  )
}

function TeamComponent(props) {
  return (
    <div className={styles.Team}>
      {props.children}
    </div>
  )
}