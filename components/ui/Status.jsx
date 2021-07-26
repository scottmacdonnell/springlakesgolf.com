import styles from '../../styles/components/ui/Status.module.scss'

export const Wrapper = (props) => {
  return <span className={styles.Wrapper} {...props} />
}

export const Dot = (props) => {
  return <span className={styles.Dot} style={{ background: props.color }} {...props} />
}

export const Spacer = (props) => {
  return <span className={styles.Spacer} {...props} />
}

export const Label = (props) => {
  return <span className={styles.Label} {...props} />
}