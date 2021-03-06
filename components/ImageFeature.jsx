import Image from 'next/image'

import styles from '../styles/components/ImageFeature.module.scss'

export default function ImageFeature({
  children,
  imageSrc,
  imageWidth,
  imageHeight
}) {
  return (
    <div className={styles.ImageFeature}>
      <div className={styles.ImageFeatureGrid}>
        <div className={styles.ImageFeatureContent}>
          {children}
        </div>

        <div className={styles.ImageFeatureImage}>
          <Image
            src={imageSrc}
            width={imageWidth}
            height={imageHeight}
            alt="Featured Image"
          />
        </div>
      </div>
    </div>
  )
}