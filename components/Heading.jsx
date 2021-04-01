import Container from './Container'

import styles from '../styles/components/Heading.module.scss'

export default function Heading(props) {
  return (
    <Container>
      <div className={styles.Heading}>
        {props.children}
      </div>
    </Container>
  )
}