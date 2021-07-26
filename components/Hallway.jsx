import Image from 'next/image'

import * as Text from './ui/Text.jsx'

import styles from '../styles/components/Hallway.module.scss'

export const Wrapper = (props) => {
  return <div className={styles.Wrapper} {...props} />
}

export const Card = ({
  title,
  link,
  image
}) => {
  return (
    <div className={styles.Card}>
      <Text.Anchor href={link}>
        <a>
          <div className={styles.CardImage}>
            <Image 
              src={image}
              alt="Card Background"
              width={800}
              height={600}
              layout="responsive"
              objectFit="cover"
              loading="lazy"
            />
          </div>
          <div className={styles.CardContent}>
            <div className={styles.CardContentWrapper}>
              <Text.Heading2 BaronNeue>{title}</Text.Heading2>
            </div>
          </div>
        </a>
      </Text.Anchor>
    </div>
  )
}