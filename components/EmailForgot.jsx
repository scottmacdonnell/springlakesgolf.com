import { useState } from 'react'
import { useRouter } from 'next/router'

import * as Text from './ui/Text'
import * as Form from './ui/Form'
import Spinner from './utils/Spinner'

import { useAuth } from '../lib/auth'

import styles from '../styles/components/EmailForgot.module.scss'

export default function EmailForgot() {
  const router = useRouter()
  const auth = useAuth()

  const [status, setStatus] = useState({
    disabled: false,
    submitting: false,
    submitted: false,
    info: { error: false, msg: null }
  })

  const [inputs, setInputs] = useState({
    email: '',
  })

  const handleChange = e => {
    e.persist()
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
    setStatus({
      disabled: false,
      submitting: false,
      submitted: false,
      info: { error: false, msg: null }
    })
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    setStatus({
      disabled: false,
      submitting: true,
      submitted: false,
      info: { error: false, msg: null }
    })

    if(inputs.email)
      await auth.forgotPassword(inputs.email)
        .then(authUser => {
          setStatus({ 
            disabled: false,
            submitting: false,
            submitted: true,
            info: { error: false, msg: "Password reset email sent successfully." }
          })
        })
        .catch(error => {
          // An error occurred. Set error message to be displayed to user
          console.log(error)
          setStatus({ 
            disabled: false,
            submitting: false,
            submitted: true,
            info: { error: true, msg: error.message }
          })
        })
    else {
      setInputs({
        ...inputs,
        password: ''
      })
      setStatus({
        disabled: false,
        submitting: false,
        submitted: false,
        info: { error: true, msg: "Email or password not valid." }}
      )
    }
  }

  return (
    <Wrapper>
      <InnerWrapper>
        <Form.Element onSubmit={onSubmit}>
          <Text.Heading2>Forgot Password</Text.Heading2>

          {status.info.error == true ? (
            <div>
              <Form.Spacer />
              <Text.Paragraph
                style={{ color: '#E00' }}
              >{status.info.msg}</Text.Paragraph>
              <Form.Spacer />
            </div>
          ) : ''}

          {status.info.error == false && status.info.msg ? (
            <div>
              <Form.Spacer />
              <Text.Paragraph
                style={{ color: '#0cce6b' }}
              >{status.info.msg}</Text.Paragraph>
              <Form.Spacer />
            </div>
          ) : ''}

          <Form.Spacer />

          <Form.InputEmail
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            autoComplete="off"
            onChange={handleChange}
            value={inputs.email}
            aria-required
          />

          <Form.Spacer />

          <SubmitButton
            id="submit"
            name="submit"
            className={`${status.disabled == true ? styles.ButtonDisabled : styles.ButtonActive}`}
            disabled={status.disabled == true ? true : false}
            status={status}
          >
            Send Password Reset Email
          </SubmitButton>
        </Form.Element>
      </InnerWrapper>
    </Wrapper>
  )
}

function Wrapper(props) {
  return <div className={styles.Wrapper} {...props} />
}

function InnerWrapper(props) {
  return <div className={styles.InnerWrapper} {...props} />
}

function SubmitButton(props) {
  return (
    <button
      type="submit"
      {...props}
    >
      <span className={styles.Prefix}>
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <path d="M22 6l-10 7L2 6" />
        </svg>
      </span>
      <span className={styles.Content}>
        {!props.status?.submitting ? (
          !props.status?.submitted ? props.children : (
              <div className={styles.ButtonCheck}>
                <svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
                  <polyline points="6.66 12 10.43 16.41 17.32 8.34" />
                </svg>
              </div>
            )
          ) : <Spinner color="255, 255, 255" />
        }
      </span>
    </button>
  )
}