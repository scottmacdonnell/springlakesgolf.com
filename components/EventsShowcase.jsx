import Image from 'next/image'

import Container from './ui/Container'

import styles from '../styles/components/EventsShowcase.module.scss'

export default function EventsShowcase({ auth }) {
  return (
    <EventsShowcaseComponent>
      <EventsShowcaseCard
        image="/images/events/celebrations.jpg"
      >
        <h3>Celebrations & Functions</h3>
      </EventsShowcaseCard>

      { auth?.user?.role !== 'member' ? 
        ''
      :
        <>
          <EventsShowcaseCard
            image="/images/events/simparties.jpg"
          >
            <h3>Private Sim Parties</h3>
          </EventsShowcaseCard>

          <EventsShowcaseCard
            image="/images/events/wedding.jpg"
          >
            <h3>Weddings/Formal Gathering</h3>
          </EventsShowcaseCard>

          <EventsShowcaseCard
            image="/images/events/tournaments.jpg"
          >
            <h3>Tournaments</h3>
          </EventsShowcaseCard>
        </>
      }
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