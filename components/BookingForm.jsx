import React, { useState } from 'react'

import Container from './ui/Container'
import InputText from './ui/InputText'
import InputEmail from './ui/InputEmail'
import InputTel from './ui/InputTel'
import InputTextArea from './ui/InputTextArea'
import FormSpacer from './ui/FormSpacer'

import styles from '../styles/components/BookingForm.module.scss'

export default function BookingForm() {
  const [status, setStatus] = useState({
    disabled: true,
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })

  const [inputs, setInputs] = useState({
    title: 'Event Booking Inquires',
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        disabled: false,
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      })
      setInputs({
        title: 'Event Booking Inquires',
        name: '',
        email: '',
        phone: '',
        message: ''
      })
      setTimeout(() => {
        setStatus({
          disabled: true,
          submitted: false,
          submitting: false,
          info: { error: false, msg: msg }
        })
      }, 2500)
    } else {
      setStatus({
        info: { error: true, msg: msg }
      })
    }
  }

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
    const res = await fetch('/api/email/send-event-booking-inquiry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputs)
    })
    const text = await res.text()
    handleResponse(res.status, text)
  }

  return (
    <BookingFormComponent>
      <BookingFormHeader>
        <h2>Event Booking Inquires</h2>
      </BookingFormHeader>

      <BookingFormMain>
        <form className={styles.BookingFormContent} onSubmit={handleSubmit}>
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
          </div>
          
          <div>
            <InputTextArea
              name="message"
              placeholder="Message"
              autoComplete="off"
              required
              onChange={handleChange}
              value={inputs.message}
            />

            <FormSpacer />

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
                    'Submit'
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
      </BookingFormMain>
    </BookingFormComponent>
  )
}

function BookingFormMain(props) {
  return (
    <div className={styles.BookingFormMain}>
      {props.children}
    </div>
  )
}

function BookingFormHeader(props) {
  return (
    <div className={styles.BookingFormHeader}>
      {props.children}
    </div>
  )
}

function BookingFormComponent(props) {
  return (
    <div className={styles.BookingForm}>
      <Container>
        <div className={styles.BookingFormBox}>
          {props.children}
        </div>
      </Container>
    </div>
  )
}