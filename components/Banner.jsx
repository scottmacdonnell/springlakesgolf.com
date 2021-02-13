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
          <Container>
            <div className={styles.BannerGrid}>
              <div className={styles.BannerHeader}>
                <Navbar />
              </div>

              <div className={styles.BannerMain}>
                <h1>Spring Lakes Golf Club</h1>
              </div>

              <div className={styles.BannerFooter}>

              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  )
}