import styles from '../styles/components/Container.module.scss'

export default function Container(props) {
  return (
    <div className={styles.Container}>
      {props.children}
    </div>
  )
}