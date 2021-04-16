import Image from 'next/image'

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
            <p>jim@springlakesgolf.com</p>
          </TeamMember>

          <TeamMember
            image="/images/about/chris.jpg"
          >
            <h5>Chris</h5>
            <p>Head Grounds Crew</p>
            <br/>
            <p>chris@springlakesgolf.com</p>
          </TeamMember>

          <TeamMember
            image="/images/about/shane.jpg"
          >
            <h5>Shane</h5>
            <p>Golf Pro</p>
            <br/>
            <p>shane@springlakesgolf.com</p>
          </TeamMember>

          <TeamMember
            image="/images/about/laura.jpg"
          >
            <h5>Laura</h5>
            <p>Event Coordinator</p>
            <br/>
            <p>laura@springlakesgolf.com</p>
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