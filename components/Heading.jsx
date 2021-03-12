import styles from '../styles/components/Heading.module.scss'

export default function Heading(props) {
  return (
    <div className={styles.Heading}>
      {props.children}
    </div>
  )
}