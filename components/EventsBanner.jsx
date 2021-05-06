import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/components/EventsBanner.module.scss'

export default function EventsBanner({
  title,
  subtitle
}) {
  return (
    <div className={styles.Banner}>
      <div className={styles.BannerImage}>
        <div className={styles.Background} />
      </div>

      <div
        className={styles.BannerContent}
      >
        <div className={styles.BannerContentWrapper}>
          <div className={styles.BannerContainer}>
            <div className={styles.BannerGrid}>
              <div className={styles.BannerMain}>
                <h1>Events</h1>
                <span>Unfortunately, until there is further breakthough in Covid-19 cases, we will be postponing any upcoming events. We will be more than happy to start scheduling events once the circumstances allow.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}