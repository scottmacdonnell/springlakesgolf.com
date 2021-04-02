import Image from 'next/image'

import Container from './Container'

import styles from '../styles/components/EventsShowcase.module.scss'

export default function EventsShowcase() {
  return (
    <EventsShowcaseComponent>
      <EventsShowcaseCard
        image="/images/events/celebrations.jpg"
      >
        <h2>Celebrations & Functions</h2>
      </EventsShowcaseCard>

      <EventsShowcaseCard
        image="/images/events/simparties.jpg"
      >
        <h2>Private Sim Parties</h2>
      </EventsShowcaseCard>

      <EventsShowcaseCard
        image="/images/events/wedding.jpg"
      >
        <h2>Weddings/Formal Gathering</h2>
      </EventsShowcaseCard>

      <EventsShowcaseCard
        image="/images/events/tournaments.jpg"
      >
        <h2>Tournaments</h2>
      </EventsShowcaseCard>
    </EventsShowcaseComponent>
  )
}

function EventsShowcaseCardMain(props) {
  return (
    <div className={styles.EventsShowcaseCardMain}>
      {props.children}
    </div>
  )
}

function EventsShowcaseCardHeader(props) {
  return (
    <div className={styles.EventsShowcaseCardHeader}>
      {props.children}
    </div>
  )
}

function EventsShowcaseCard({
  children,
  image
}) {
  return (
    <div className={styles.EventsShowcaseCard}>
      <EventsShowcaseCardHeader>
        <Image
          src={image}
          width={1080}
          height={720}
        />
      </EventsShowcaseCardHeader>

      <EventsShowcaseCardMain>
        {children}
      </EventsShowcaseCardMain>
    </div>
  )
}

function EventsShowcaseComponent(props) {
  return (
    <div className={styles.EventsShowcase}>
      <Container>
        <div className={styles.EventsShowcaseGrid}>
          {props.children}
        </div>
      </Container>
    </div>
  )
}