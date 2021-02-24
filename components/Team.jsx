import Image from 'next/image'

import styles from '../styles/components/Team.module.scss'

export default function Team() {
  return (
    <div className={styles.Team}>
      <div className={styles.TeamHeader}>
        <h2>Meet Our Team</h2>

        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
      </div>

      <div className={styles.TeamGrid}>
        <TeamMember
          name="Jim"
          title="General Manager"
          image="/images/team/jim.jpg"
        />

        <TeamMember
          name="Chris"
          title="Head Grounds Crew"
          image="/images/team/chris.jpg"
        />

        <TeamMember
          name="Shane"
          title="Golf Pro"
          image="/images/team/shane.jpg"
        />

        <TeamMember
          name="Laura"
          title="Event Coordinator"
          image="/images/team/laura.jpg"
        />

        <TeamMember
          name="Tracey"
          title="Head Chef"
          image="/images/team/tracey.jpg"
        />
      </div>
    </div>
  )
}

function TeamMember({
  name,
  title,
  image,
}) {
  return (
    <div className={styles.TeamMember}>
      <div className={styles.TeamMemberImage}>
        <Image
          src={image}
          alt={title}
          title={title}
          width={600}
          height={800}
          layout="intrinsic"
          objectFit="cover"
        />
      </div>

      <div className={styles.TeamMemberContent}>
        <h3>{name}</h3>
        <h4>{title}</h4>
      </div>
    </div>
  )
}