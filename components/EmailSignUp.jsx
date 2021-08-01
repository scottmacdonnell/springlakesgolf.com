import { useState } from 'react'
import { useRouter } from 'next/router'

import * as Status from './ui/Status'
import * as Text from './ui/Text'
import * as Form from './ui/Form'
import Spinner from './utils/Spinner'

import { useAuth } from '../lib/auth'
import { usePasswordValidation } from '../hooks/usePasswordValidation'

import styles from '../styles/components/EmailSignUp.module.scss'

export default function EmailSignUp() {
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
    firstPassword: '',
    secondPassword: '',
  })

  const [
    validLength,
    hasNumber,
    upperCase,
    lowerCase,
    match,
    specialChar
  ] = usePasswordValidation(
    {
      firstPassword: inputs.firstPassword,
      secondPassword: inputs.secondPassword
    }
  )

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

    if(inputs.firstPassword === inputs.secondPassword)
      await auth.createUserWithEmailAndPassword(inputs.email, inputs.firstPassword)
        .then(authUser => {
          console.log("Success. The user is created in Firebase")
          router.push("/member/dashboard")
        })
        .catch(error => {
          // An error occurred. Set error message to be displayed to user
          setStatus({ ...status, info: { error: true, msg: error.message }})
        })
    else {
      setInputs({
        ...inputs,
        firstPassword: '',
        secondPassword: ''
      })
      setStatus({
        disabled: false,
        submitting: false,
        submitted: false,
        info: { error: true, msg: "Password do not match" }}
      )
    }
  }

  return (
    <Wrapper>
      <InnerWrapper>
        <Form.Element onSubmit={onSubmit}>
          <Text.Heading2>Email Sign Up</Text.Heading2>

          {status.info.error == true ? (
            <div>
              <Form.Spacer />
              <Text.Paragraph
                style={{ color: '#E00' }}
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

          <PasswordStatus
            validLength={validLength}
            hasNumber={hasNumber}
            upperCase={upperCase}
            lowerCase={lowerCase}
            match={match}
            specialChar={specialChar}
          />

          <Form.Spacer />

          <Form.InputPassword
            type="password"
            id="firstPassword"
            name="firstPassword"
            placeholder="Password"
            autoComplete="off"
            onChange={handleChange}
            value={inputs.firstPassword}
            aria-required
          />

          <Form.Spacer />

          <Form.InputPassword
            type="password"
            id="secondPassword"
            name="secondPassword"
            placeholder="Confirm Password"
            autoComplete="off"
            onChange={handleChange}
            value={inputs.secondPassword}
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
            Sign up with Email
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

function PasswordStatus({
  validLength,
  hasNumber,
  upperCase,
  lowerCase,
  match,
  specialChar
}) {
  return (
    <div className={styles.PasswordStatus}>
      <Status.Wrapper>
        <Status.Dot color={validLength ? "#0cce6b" : "#E00"} />
        <Status.Spacer />
        <Status.Label>Minimum 8 characters</Status.Label>
      </Status.Wrapper>

      <Status.Wrapper>
        <Status.Dot color={hasNumber ? "#0cce6b" : "#E00"} />
        <Status.Spacer />
        <Status.Label>Has a number</Status.Label>
      </Status.Wrapper>

      <Status.Wrapper>
        <Status.Dot color={upperCase ? "#0cce6b" : "#E00"} />
        <Status.Spacer />
        <Status.Label>Uppercase character</Status.Label>
      </Status.Wrapper>

      <Status.Wrapper>
        <Status.Dot color={lowerCase ? "#0cce6b" : "#E00"} />
        <Status.Spacer />
        <Status.Label>Lowercase character</Status.Label>
      </Status.Wrapper>

      <Status.Wrapper>
        <Status.Dot color={specialChar ? "#0cce6b" : "#E00"} />
        <Status.Spacer />
        <Status.Label>Special character</Status.Label>
      </Status.Wrapper>

      <Status.Wrapper>
        <Status.Dot color={match ? "#0cce6b" : "#E00"} />
        <Status.Spacer />
        <Status.Label>Match</Status.Label>
      </Status.Wrapper>
    </div>
  )
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