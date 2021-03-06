import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/components/HallwayCard.module.scss'

export default function HallwayCard({
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