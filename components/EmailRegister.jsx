import { useState } from 'react'

import styles from '../styles/components/EmailAuth.module.scss'

export default function EmailRegister({ auth }) {
  const [status, setStatus] = useState({
    disabled: true,
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })

  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  })

  const handleChange = e => {
    e.persist()
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
    setStatus({
      disabled: true,
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    })
    if (inputs) {
      let i = 0;
      const length = Object.values(inputs).length
      Object.values(inputs).forEach(val => {
        if(val !== '') { i++ }
      })
      
      if (i == length) {
        setStatus({
          disabled: false,
          submitted: false,
          submitting: false,
          info: { error: false, msg: null }
        })
      }
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus({
      disabled: false,
      submitted: false,
      submitting: true,
      info: { error: false, msg: null }
    })
    auth.signUpWithEmail(inputs.email, inputs.password).catch((error) => {
      setStatus({
        disabled: false,
        submiting: false,
        submitted: true,
        info: {
          error: true,
          msg: error.message
        }
      })
    })
    // if (!auth.loading) {
    //   console.log(auth.user)
    //   setStatus({
    //     disabled: false,
    //     submitted: false,
    //     submitting: false,
    //     info: { error: false, msg: null }
    //   })
    // }
  }

  console.log(auth.user)

  console.log(inputs)

  return (
    <div className={styles.EmailAuth}>
      <div className={styles.EmailAuthWrapper}>
        <form className={styles.EmailAuthForm} onSubmit={handleSubmit}>
          <input 
            type='email'
            id='email'
            placeholder='Email Address'
            aria-required
            autoComplete="off"
            onChange={handleChange}
            value={inputs.email}
          />

          <span className={styles.Spacer} />

          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            aria-required
            autoComplete="off"
            onChange={handleChange}
            value={inputs.password}
          />

          <span className={styles.Spacer} />

          {/* <button type='submit' id='submit' name='submit'>
            <span className={styles.Prefix}>
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <path d="M22 6l-10 7L2 6" />
              </svg>
            </span>

            <span className={styles.Content}>
              Continue with Email
            </span>
          </button> */}
            <button 
              type='submit'
              id='submit'
              name='submit'
              className={`${status.disabled == true ? styles.ButtonDisabled : styles.ButtonActive}`}
              disabled={status.disabled == true ? true : false}
            >
              <span className={styles.Prefix}>
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
              </span>

              <span className={styles.Content}>
                {!status.submitting ? (
                  !status.submitted ? (
                    'Sign up with Email'
                  ) : (
                        <div className={styles.ButtonCheck}>
                          <svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
                            <polyline points="6.66 12 10.43 16.41 17.32 8.34" />
                          </svg>
                        </div>
                  )
                ) : (
                  <div className={styles.ButtonSpinnerContainer}>
                    <div className={styles.ButtonSpinner} />
                  </div>
                )}
              </span>
            </button>
        </form>
        {status.error ? <div>{status.error.msg}</div> : <div />}
      </div>
    </div>
  )
}