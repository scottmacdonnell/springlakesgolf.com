import Link from 'next/link'

import FormSpacer from './ui/FormSpacer'
import ProviderAuth from './ProviderAuth'

import styles from '../styles/components/LoginForm.module.scss'

export default function LoginForm({ auth }) {
  return (
    <div className={styles.LoginForm}>
      <div className={styles.LoginFormWrapper}>
        <h1>Welcome Back</h1>

        <FormSpacer />

        <ProviderAuth auth={auth} />

        <FormSpacer />

        <Link href="/member/signup">
          <a>Don't have an account? Sign up here!</a>
        </Link>
      </div>
    </div>
  )
}