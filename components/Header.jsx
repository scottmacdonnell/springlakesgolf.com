import Image from 'next/image'

import Navbar from './Navbar'

import styles from '../styles/components/Header.module.scss'

export default function Header({
  title,
  image
}) {
  return (
    <div className={styles.Header}>
      <div className={styles.HeaderImage}>
        <Image 
          src={image}
          layout="fill"
        />
      </div>

      <div className={styles.HeaderContent}>
        <div className={styles.HeaderContentWrapper}>
          <div className={styles.HeaderContainer}>
            <div className={styles.HeaderGrid}>
              <div className={styles.HeaderNavbar}>
                <Navbar />
              </div>

              <div className={styles.HeaderMain}>
                <h1>{title}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}