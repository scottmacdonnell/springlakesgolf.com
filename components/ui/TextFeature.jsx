import Container from './Container'

import styles from '../../styles/components/ui/TextFeature.module.scss'

export default function TextFeature(props) {
  return (
    <Container>
      <div className={styles.TextFeature}>
        {props.children}
      </div>
    </Container>
  )
}