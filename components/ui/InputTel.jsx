import styles from '../../styles/components/ui/InputTel.module.scss'

export default function InputTel(props) {
  return (
    <input 
      type="tel"
      id={props.name}
      name={props.name}
      placeholder={props.placeholder}
      autoComplete={props.autoComplete}
      aria-required={props.required}
      onChange={props.onChange}
      value={props.value}
      className={styles.InputText}
    />
  )
}