import React, { useState } from 'react'

import Container from './Container'

import InputText from './ui/InputText'
import InputEmail from './ui/InputEmail'
import InputTel from './ui/InputTel'
import InputTextArea from './ui/InputTextArea'
import FormSpacer from './ui/FormSpacer'

import styles from '../styles/components/MembershipForm.module.scss'

export default function MembershipForm() {
  const [previousCourseShown, setPreviousCourseShown] = useState(false)

  const toggle = () => setPreviousCourseShown(!previousCourseShown)
  
  return (
    <Container>
      <MembershipFormComponent>
        <MembershipFormHeader>
          <h2>Membership Form</h2>
        </MembershipFormHeader>

        <MembershipFormMain>
          <form className={styles.MembershipFormHTML}>
            <InputText
              name="name"
              placeholder="Name"
              autoComplete="off"
              required
            />

            <FormSpacer />

            <InputEmail
              name="email"
              placeholder="Email Address"
              autoComplete="off"
              required
            />

            <FormSpacer />

            <InputTel
              name="phone"
              placeholder="Phone Number"
              autoComplete="off"
              required
            />

            <FormSpacer />

            <label htmlFor="previousMembership">Previously a Member:</label>
            <input type="checkbox" id="previousMembership" name="previousMembership" onChange={toggle} />

            {previousCourseShown ? (
              <>
                <FormSpacer />

                <InputText
                  name="previousCourse"
                  placeholder="Name of Previous Golf Club"
                  autoComplete="off"
                  required
                />
              </>
            ) : ''}

            <FormSpacer />

            <InputText
              name="referral"
              placeholder="Member Referral"
              autoComplete="off"
              required
            />

            <FormSpacer />

            <InputTextArea
              name="comments"
              placeholder="Comments"
              autoComplete="off"
              required
            />

            <FormSpacer />

            <button type='submit' id='submit' name='submit'>
              <span className={styles.Prefix}>
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
              </span>

              <span className={styles.Content}>
                Submit
              </span>
            </button>
          </form>
        </MembershipFormMain>
      </MembershipFormComponent>
    </Container>
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
      {props.children}
    </div>
  )
}