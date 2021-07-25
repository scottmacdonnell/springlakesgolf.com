import Link from 'next/link'
import Image from 'next/image'

import * as Text from '../components/ui/Text'

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
                <span>
                  {"As Ontario has entered Stage 3, we will be accepting all event requests. With that said, we have minimal dates for the 2021 season. Please contact "}

                  <Text.Anchor
                    href="mailto:laura@springlakesgolf.com"
                    style={{
                      color: '#D3E5FF'
                    }}
                    isExternal
                  >
                    laura@springlakesgolf.com
                  </Text.Anchor>
                  
                  {" to assist you in any event."}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}