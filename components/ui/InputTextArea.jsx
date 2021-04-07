import styles from '../../styles/components/ui/InputTextArea.module.scss'

export default function InputTextArea(props) {
  return (
    <textarea
      type="textarea"
      id={props.name}
      name={props.name}
      placeholder={props.placeholder}
      autoComplete={props.autoComplete}
      aria-required={props.required}
      onChange={props.onChange}
      value={props.value}
      className={styles.InputTextArea}
    />
  )
}