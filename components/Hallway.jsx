import styles from '../styles/components/Hallway.module.scss'

export default function Hallway(props) {
  return (
    <div className={styles.Hallway}>
      {props.children}
    </div>
  )
}