import Image from 'next/image'
import * as Status from './ui/Status'
import Modal from './ui/Modal'
import Box from './utils/Box'

import styles from '../styles/components/Course.module.scss'

export const Wrapper = (props) => {
  return (
    <Box>
      {props.children}
    </Box>
  )
}

export const InfoBox = (props) => {
  return (
    <div className={styles.InfoBox}>
      {props.children}
    </div>
  )
}

export const Holes = (props) => {
  return (
    <div className={styles.Holes}>
      <span className={styles.Label}>Holes</span>
      <span className={styles.Value}>{props.children}</span>
    </div>
  )
}

export const Par = (props) => {
  return (
    <div className={styles.Par}>
      <span className={styles.Label}>Par</span>
      <span className={styles.Value}>{props.children}</span>
    </div>
  )
}

export const Yardage = ({
  blue,
  white,
  red,
  yellow
}) => {
  return (
    <div className={styles.Yardage}>
      <span className={styles.Label}>Yardage</span>
      <div className={styles.Value}>
        <Status.Wrapper>
          <Status.Dot color="#0070F3" />
          <Status.Spacer />
          <Status.Label style={{ lineHeight: '20px',}}>{blue}</Status.Label>
        </Status.Wrapper>
        <Status.Wrapper>
          <Status.Dot color="#EAEAEA" />
          <Status.Spacer />
          <Status.Label style={{ lineHeight: '20px',}}>{white}</Status.Label>
        </Status.Wrapper>
        <Status.Wrapper>
          <Status.Dot color="#FF1A1A" />
          <Status.Spacer />
          <Status.Label style={{ lineHeight: '20px',}}>{red}</Status.Label>
        </Status.Wrapper>
        <Status.Wrapper>
          <Status.Dot color="#F7B955" />
          <Status.Spacer />
          <Status.Label style={{ lineHeight: '20px',}}>{yellow}</Status.Label>
        </Status.Wrapper>
      </div>
    </div>
  )
}

export const Overview = (props) => {
  return (
    <div className={styles.Overview}>
      {props.children}
    </div>
  )
}

export const Images = (props) => {
  return (
    <div className={styles.Images}>
      {props.children}
    </div>
  )
}

export const Photo = ({
  title,
  src
}) => {
  return (
    <Modal 
      content={(
          <div className={styles.Image}>
            <Image
              src={src}
              alt={title}
              title={title}
              width={1920}
              height={1080}
              layout="responsive"
              objectFit="cover"
              objectPosition="center"
            />
            <span>{title}</span>
          </div>
        )
      }
    >
      <div className={styles.Image}>
        <Image
          src={src}
          alt={title}
          title={title}
          width={640}
          height={640}
          layout="responsive"
          objectFit="cover"
          objectPosition="center"
        />
        <span>{title}</span>
      </div>
    </Modal>
  )
}