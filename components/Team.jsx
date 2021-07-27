import Image from 'next/image'

import styles from '../styles/components/Team.module.scss'

export const Wrapper = (props) => {
  return (
    <div className={styles.Wrapper}>
      {props.children}
    </div>
  )
}

export const Card = (props) => {
  return (
    <div className={styles.Card}>
      <div className={styles.CardImage}>
        <Image
          src={props.photo}
          alt="Team Member"
          width={810}
          height={1080}
          layout="intrinsic"
          objectFit="contain"
        />
      </div>

      <div className={styles.CardContent}>
        {props.children}
      </div>
    </div>
  )
}