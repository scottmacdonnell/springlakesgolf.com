import Container from './Container'

import styles from '../styles/components/Paragraph.module.scss'

export default function Paragraph(props) {
  return (
    <Container>
      <div className={styles.Paragraph}>
        {props.children}
      </div>
    </Container>
  )
}