import Image from 'next/image'

import Container from './ui/Container'

import styles from '../styles/components/ImageFeature.module.scss'

export default function ImageFeature({
  children,
  imageSrc,
  imageRight = false
}) {
  return (
    <Container>
      {imageRight ? (
        <ImageFeatureComponent>
          <ImageFeatureContent>
            {children}
          </ImageFeatureContent>

          <ImageFeatureImage>
            <Image
              src={imageSrc}
              width={720}
              height={1080}
              objectFit="contain"
              alt="Featured Image"
            />
          </ImageFeatureImage>
        </ImageFeatureComponent>
      ) : (
        <ImageFeatureComponent>
          <ImageFeatureImage>
            <Image
              src={imageSrc}
              width={720}
              height={1080}
              alt="Featured Image"
              objectFit="cover"
            />
          </ImageFeatureImage>
          
          <ImageFeatureContent>
            {children}
          </ImageFeatureContent>
        </ImageFeatureComponent>
      )}
    </Container>
  )
}

function ImageFeatureImage(props) {
  return (
    <div className={styles.ImageFeatureImage}>
      {props.children}
    </div>
  )
}

function ImageFeatureContent(props) {
  return (
    <div className={styles.ImageFeatureContent}>
      {props.children}
    </div>
  )
}

function ImageFeatureComponent(props) {
  return (
    <div className={styles.ImageFeature}>
      <div className={styles.ImageFeatureGrid}>
        {props.children}
      </div>
    </div>
  )
}