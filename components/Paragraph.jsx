import styles from '../styles/components/Paragraph.module.scss'

export default function Paragraph(props) {
  return (
    <div className={styles.Paragraph}>
      {props.children}
    </div>
  )
}