import React, { useState } from 'react'

import styles from '../styles/components/MembershipForm.module.scss'

export default function MembershipForm() {
  const [previousCourseShown, setPreviousCourseShown] = useState(false)

  const toggle = () => setPreviousCourseShown(!previousCourseShown)

  return (
    <div className={styles.MembershipForm}>
      <h1>Membership Form</h1>

      <form action="" method="post">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" placeholder="John Doe" id="name" />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" placeholder="johndoe@gmail.com" htmlFor="email" />
        </div>

        <div>
          <label htmlFor="phone">Phone:</label>
          <input type="tel" placeholder="(123)456-789" id="phone" />
        </div>

        <div className={styles.FormDate}>
          <label htmlFor="date">Date of Birth:</label>
          <input type="date" id="date" />
        </div>

        <div className={styles.FormCheckbox}>
          <label htmlFor="previousMembership">Previously a Member:
            <input type="checkbox" id="previousMembership" onChange={toggle} />
          </label>
        </div>

        {previousCourseShown ? (
          <div>
            <label htmlFor="previousCourse">previousCourse:</label>
            <input type="text" id="previousCourse" />
          </div>
        ) : ''}

        <div>
          <label htmlFor="referral">Membership Referral:</label>
          <input type="text" placeholder="Jane Doe" id="referral" />
        </div>

        <div>
          <label htmlFor="comments">Comments:</label>
          <input type="text" id="comments" />
        </div>

        <div>
          <input type="submit" value="Submit"/>
        </div>
      </form>
    </div>
  )
}