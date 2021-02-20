import Image from 'next/image'

import styles from '../styles/components/OwnerMessage.module.scss'

export default function OwnerMessage({
  title,
  image,
  content
}) {
  return (
    <div className={styles.OwnerMessage}>
      <div className={styles.OwnerMessageImage}>
        <Image
          src={image}
          alt={title}
          title={title}
          width={720}
          height={1080}
          layout="responsive"
        />
      </div>

      <div className={styles.OwnerMessageContent}>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  )
}