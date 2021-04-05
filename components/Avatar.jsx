import Image from 'next/image'

import styles from '../styles/components/Avatar.module.scss'

export default function Avatar({
  src,
  width = 32,
  height = 32
}) {
  return (
    <>
      { src ? (
        <div className={styles.Avatar}>
          <Image
            src={src}
            width={width}
            height={height}
            loading="lazy"
          />
        </div>
      ) : <div className={styles.AvatarDisabled} style={{ width: `${width}px`, height: `${height}px` }} /> }
    </>
  )
}