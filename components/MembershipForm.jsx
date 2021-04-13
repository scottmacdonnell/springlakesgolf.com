import React, { useState } from 'react'

import Container from './ui/Container'

import InputText from './ui/InputText'
import InputEmail from './ui/InputEmail'
import InputTel from './ui/InputTel'
import InputTextArea from './ui/InputTextArea'
import FormSpacer from './ui/FormSpacer'

import styles from '../styles/components/MembershipForm.module.scss'

export default function MembershipForm() {
  const [previousCourseShown, setPreviousCourseShown] = useState(false)
  const togglePreviousCourseShown = () => setPreviousCourseShown(!previousCourseShown)

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })

  const [inputs, setInputs] = useState({
    title: 'Membership Request',
    name: '',
    email: '',
    phone: '',
    previousCourse: '',
    referral: '',
    comments: ''
  })

  const handleChange = e => {
    e.persist()
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
    const res = await fetch('/api/email/send-membership-application', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputs)
    })
    const text = await res.text()
    handleResponse(res.status, text)
  }

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      })
      setInputs({
        title: 'Membership Request',
        name: '',
        email: '',
        phone: '',
        previousCourse: '',
        referral: '',
        comments: ''
      })
      setTimeout(() => {
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: false, msg: msg }
        })
      }, 5000);
    } else {
      setStatus({
        info: { error: true, msg: msg }
      })
    }
  }

  return (
    <MembershipFormComponent>
      <MembershipFormHeader>
        <h2>Membership Request</h2>
      </MembershipFormHeader>

      <MembershipFormMain>
        <form className={styles.MembershipFormContent}
          onSubmit={handleSubmit}
        >
          <div>
            <InputText
              name="name"
              placeholder="Name"
              autoComplete="off"
              required
              onChange={handleChange}
              value={inputs.name}
            />

            <FormSpacer />

            <InputEmail
              name="email"
              placeholder="Email Address"
              autoComplete="off"
              required
              onChange={handleChange}
              value={inputs.email}
            />

            <FormSpacer />

            <InputTel
              name="phone"
              placeholder="Phone Number"
              autoComplete="off"
              required
              onChange={handleChange}
              value={inputs.phone}
            />

            <FormSpacer />

            {previousCourseShown ? (
              <>
                <InputText
                  name="previousCourse"
                  placeholder="Name of Previous Golf Club"
                  autoComplete="off"
                  required
                  onChange={handleChange}
                  value={inputs.previousCourse}
                />

                <FormSpacer />
              </>
            ) : ''}

            <label htmlFor="previousMembership">Previously a Member:</label>
            <input 
              type="checkbox"
              id="previousMembership"
              name="previousMembership"
              onChange={togglePreviousCourseShown}
            />
          </div>
          
          <div>
            <InputText
              name="referral"
              placeholder="Member Referral"
              autoComplete="off"
              required
              onChange={handleChange}
              value={inputs.referral}
            />

            <FormSpacer />

            <InputTextArea
              name="comments"
              placeholder="Comments"
              autoComplete="off"
              required
              onChange={handleChange}
              value={inputs.comments}
            />

            <FormSpacer />

            <button
              type='submit'
              id='submit'
              name='submit'
              disabled={status.submitting}
            >
              <span className={styles.Prefix}>
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 16l4-4-4-4"/>
                  <path d="M8 12h8"/>
                </svg>
              </span>

              <span className={styles.Content}>
                {!status.submitting ? (
                  !status.submitted ? (
                    'Become a Member'
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
          </div>
        </form>
        {/* {status.info.error && (
          <div className="error">Error: {status.info.msg}</div>
        )}
        {!status.info.error && status.info.msg && (
          <div className="success">{status.info.msg}</div>
        )} */}
      </MembershipFormMain>
    </MembershipFormComponent>
  )
}

function MembershipFormMain(props) {
  return (
    <div className={styles.MembershipFormMain}>
      {props.children}
    </div>
  )
}

function MembershipFormHeader(props) {
  return (
    <div className={styles.MembershipFormHeader}>
      {props.children}
    </div>
  )
}

function MembershipFormComponent(props) {
  return (
    <div className={styles.MembershipForm}>
      <Container>
        <div className={styles.MembershipFormBox}>
          {props.children}
        </div>
      </Container>
    </div>
  )
}