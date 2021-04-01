import Image from 'next/image'

import Container from './Container'

import styles from '../styles/components/Team.module.scss'

export default function Team() {
  return (
    <Container>
      <TeamComponent>
        <TeamHeader>
          <h2>Meet Our Team</h2>
          <h5>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</h5>
        </TeamHeader>

        <TeamMain>
          <TeamMember
            image="/images/team/jim.jpg"
          >
            <h5>Jim</h5>
            <p>General Manager</p>
          </TeamMember>

          <TeamMember
            image="/images/team/chris.jpg"
          >
            <h5>Chris</h5>
            <p>Head Grounds Crew</p>
          </TeamMember>

          <TeamMember
            image="/images/team/shane.jpg"
          >
            <h5>Shane</h5>
            <p>Golf Pro</p>
          </TeamMember>

          <TeamMember
            image="/images/team/laura.jpg"
          >
            <h5>Laura</h5>
            <p>Event Coordinator</p>
          </TeamMember>

          <TeamMember
            image="/images/team/tracey.jpg"
          >
            <h5>Tracey</h5>
            <p>Head Chef</p>
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
          width={600}
          height={800}
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