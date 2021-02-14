import Link from 'next/link'
import Image from 'next/image'

import Container from './Container'
import Navbar from './Navbar'

import styles from '../styles/components/Banner.module.scss'

export default function Banner() {
  return (
    <div className={styles.Banner}>
      <div className={styles.BannerImage}>
        <Image 
          src="/images/banner/background.jpg"
          layout="fill"
        />
      </div>
      
      <div className={styles.BannerContent}>
        <div className={styles.BannerContentWrapper}>
          <div className={styles.BannerContainer}>
            <div className={styles.BannerGrid}>
              <div className={styles.BannerHeader}>
                <Navbar />
                {/* <p>nav</p> */}
              </div>

              <div className={styles.BannerMain}>
                <h1>Spring Lakes Golf Club</h1>
              </div>

              <div className={styles.BannerFooter}>
                <Link href="/#main" scroll={true} shallow>
                  <a>
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision">
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}