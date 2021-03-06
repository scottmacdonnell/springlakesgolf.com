import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/components/Banner.module.scss'

export default function Banner({
  title,
  image,
  chevron,
  index = false
}) {
  return (
    <div className={`${styles.Banner} ${index ? styles.IndexBanner : ''}`}>
      <div className={styles.BannerImage}>
        <Image 
          src={image}
          alt="Banner Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>

      <div className={styles.BannerContent}>
        <div className={styles.BannerContentWrapper}>
          <div className={styles.BannerContainer}>
            <div className={styles.BannerGrid}>
              <div className={styles.BannerMain}>
                <h1>{title}</h1>
              </div>

              {chevron ? (
                <div className={styles.BannerFooter}>
                  <Link href={chevron} scroll={true} shallow>
                    <a>
                      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision">
                        <path d="M6 9l6 6 6-6"/>
                      </svg>
                    </a>
                  </Link>
                </div>
              ) : <div />}

              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}