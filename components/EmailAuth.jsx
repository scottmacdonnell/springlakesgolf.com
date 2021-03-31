import styles from '../styles/components/EmailAuth.module.scss'

export default function EmailAuth({ auth }) {
  return (
    <div className={styles.EmailAuth}>
      <div className={styles.EmailAuthWrapper}>
        <form className={styles.EmailAuthForm}>
          <input type='email' id='email' name='email' placeholder='Email Address' autoComplete='off' aria-required />

          <span className={styles.Spacer} />

          <input type='password' id='password' name='password' placeholder='Password' aria-required />

          <span className={styles.Spacer} />

          <button type='submit' id='submit' name='submit'>
            <span className={styles.Prefix}>
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <path d="M22 6l-10 7L2 6" />
              </svg>
            </span>

            <span className={styles.Content}>
              Continue with Email
            </span>
          </button>
        </form>
      </div>
    </div>
  )
}