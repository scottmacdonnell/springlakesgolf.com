import styles from '../../styles/components/ui/InputText.module.scss'

export default function InputText(props) {
  return (
    <input 
      type="email"
      id={props.name}
      name={props.name}
      placeholder={props.placeholder}
      autoComplete={props.autoComplete}
      aria-required={props.required}
      onChange={props.onChange}
      className={styles.InputText}
    />
  )
}