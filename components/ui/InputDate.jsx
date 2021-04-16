import styles from '../../styles/components/ui/InputDate.module.scss'

export default function InputDate(props) {
  return (
    <input 
      type="date"
      id={props.name}
      name={props.name}
      placeholder={props.placeholder}
      autoComplete={props.autoComplete}
      aria-required={props.required}
      onChange={props.onChange}
      value={props.value}
      className={styles.InputDate}
    />
  )
}