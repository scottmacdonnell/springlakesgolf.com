import Link from 'next/link'
import Image from 'next/image'
import useSWR from 'swr'

import fetcher from '../lib/fetcher'

import styles from '../styles/components/Hallway.module.scss'

export default function Hallway({ auth }) {
  return (
    <HallwayComponent>
      { auth?.user?.role !== 'member' ? <HallwayPublic /> : <HallwayMembers /> }
    </HallwayComponent>
  )
}

function HallwayMembers() {
  return (
    <>
      <HallwayCard
        title="The Courses"
        link="/courses"
        image="/images/index/members/hallway-courses.jpg"
      />

      <HallwayCard
        title="Memberships"
        link="/memberships"
        image="/images/index/members/hallway-memberships.jpg"
      />

      <HallwayCard
        title="Clubhouse & Dining"
        link="/clubhouse"
        image="/images/index/members/hallway-clubhouse.jpg"
      />

      <HallwayCard
        title="Newsletter"
        link="/newsletter"
        image="/images/index/members/hallway-newsletter.jpg"
      />

      <HallwayCard
        title="Events"
        link="/events"
        image="/images/index/public/hallway-events.jpg"
      />

      <HallwayCard
        title="Contact Us"
        link="/contact"
        image="/images/index/members/hallway-contact.jpg"
      />
    </>
  )
}

function HallwayPublic() {
  return (
    <>
      <HallwayCard
        title="About Us"
        link="/about"
        image="/images/index/public/hallway-about.jpg"
      />
      <HallwayCard
        title="Memberships"
        link="/memberships"
        image="/images/index/public/hallway-memberships.jpg"
      />
      <HallwayCard
        title="Game Improvement"
        link="/game"
        image="/images/index/public/hallway-game.jpg"
      />
      <HallwayCard
        title="Clubhouse & Dining"
        link="/clubhouse"
        image="/images/index/public/hallway-clubhouse.jpg"
      />
      <HallwayCard
        title="Events"
        link="/events"
        image="/images/index/public/hallway-events.jpg"
      />
      <HallwayCard
        title="Contact Us"
        link="/contact"
        image="/images/index/public/hallway-contact.jpg"
      />
    </>
  )
}

function HallwayCard({
  title,
  link,
  image
}) {
  return (
    <div className={styles.HallwayCard}>
      <Link href={link}>
        <a>
          <div className={styles.HallwayCardImage}>
            <Image 
              src={image}
              alt="Card Background"
              width={800}
              height={600}
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <div className={styles.HallwayCardContent}>
            <div className={styles.HallwayCardContentWrapper}>
              <h2>{title}</h2>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

function HallwayComponent(props) {
  return (
    <div className={styles.Hallway}>
      {props.children}
    </div>
  )
}