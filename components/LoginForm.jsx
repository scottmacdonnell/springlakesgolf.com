import Link from 'next/link'

import ProviderAuth from './ProviderAuth'

import styles from '../styles/components/LoginForm.module.scss'

export default function LoginForm({ auth }) {
  return (
    <div className={styles.LoginForm}>
      <div className={styles.LoginFormWrapper}>
        <h1>Welcome Back</h1>

        {/* <form className={styles.LocalAuth}>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Email Address'
            autoComplete='off'
            aria-required
          />

          <span className={styles.Spacer} />

          <input
            type='password'
            id='password'
            name='password'
            placeholder='Password'
            aria-required
          />

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
        </form> */}

        <span className={styles.Spacer} />

        <ProviderAuth auth={auth} />

        <span className={styles.Spacer} />

        <Link href="/member/signup">
          <a>Don't have an account? Sign up here!</a>
        </Link>
      </div>
    </div>
  )
}