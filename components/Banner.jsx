import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/components/Banner.module.scss'

export default function Banner({
  title,
  alignImage = "center",
  image,
  chevron,
  subtitle,
  auth,
  index = false,
  noImage = false
}) {
  const background = noImage ? 'rgba(0, 0, 0, 0.0)' : 'rgba(0, 0, 0, 0.35)'
  return (
    <div className={`${styles.Banner} ${index ? styles.IndexBanner : ''}`}>
      <div className={styles.BannerImage}>
        {noImage ? '' : (
          <Image 
            src={image}
            alt="Banner Background"
            layout="fill"
            objectFit="cover"
            objectPosition={alignImage}
          />
        )}
      </div>

      <div
        className={styles.BannerContent}
        style={{background: background }}
      >
        <div className={styles.BannerContentWrapper}>
          <div className={styles.BannerContainer}>
            <div className={styles.BannerGrid}>
              <div className={styles.BannerMain}>
                <h1>{title}</h1>
                {subtitle ? (
                  <span>{auth?.user?.name ? `Welcome, ${auth.user.name}` : "Canada’s Only Private 54 Hole Golf Course"}</span>
                ) : ''}
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