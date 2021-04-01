// import React, { useState } from 'react'



// export default function MembershipForm() {
//   const [previousCourseShown, setPreviousCourseShown] = useState(false)

//   const toggle = () => setPreviousCourseShown(!previousCourseShown)

//   return (
//     <Container>
//       <div className={styles.MembershipForm}>
//         <h1>Membership Form</h1>

//         <form action="" method="post">
//           <div>
//             <label htmlFor="name">Name:</label>
//             <input type="text" placeholder="John Doe" id="name" />
//           </div>

//           <div>
//             <label htmlFor="email">Email:</label>
//             <input type="email" placeholder="johndoe@gmail.com" htmlFor="email" />
//           </div>

//           <div>
//             <label htmlFor="phone">Phone:</label>
//             <input type="tel" placeholder="(123)456-789" id="phone" />
//           </div>

//           <div className={styles.FormDate}>
//             <label htmlFor="date">Date of Birth:</label>
//             <input type="date" id="date" />
//           </div>

//           <div className={styles.FormCheckbox}>
//             <label htmlFor="previousMembership">Previously a Member:
//               <input type="checkbox" id="previousMembership" onChange={toggle} />
//             </label>
//           </div>

//           {previousCourseShown ? (
//             <div>
//               <label htmlFor="previousCourse">previousCourse:</label>
//               <input type="text" id="previousCourse" />
//             </div>
//           ) : ''}

//           <div>
//             <label htmlFor="referral">Membership Referral:</label>
//             <input type="text" placeholder="Jane Doe" id="referral" />
//           </div>

//           <div>
//             <label htmlFor="comments">Comments:</label>
//             <input type="text" id="comments" />
//           </div>

//           <div>
//             <input type="submit" value="Submit"/>
//           </div>
//         </form>
//       </div>
//     </Container>
//   )
// }

import React, { useState } from 'react'

import Container from './Container'

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
            <input type="text" id="name" name="name" placeholder="John Doe" autoComplete="off" aria-required />

            <span className={styles.Spacer} />

            <input type="email" id="email" name="email" placeholder="Email Address" autoComplete="off" aria-required />

            <span className={styles.Spacer} />

            <input type="tel" id="phone" name="phone" placeholder="(647)456-789" autoComplete="off" aria-required />

            <span className={styles.Spacer} />

            <label htmlFor="previousMembership">Previously a Member:</label>
            <input type="checkbox" id="previousMembership" name="previousMembership" onChange={toggle} />

            {previousCourseShown ? (
              <>
                <span className={styles.Spacer} />
                
                <input type="text" id="previousCourse" name="previousCourse" placeholder="Spring Lakes Golf Club" autoComplete="off" aria-required />
              </>
            ) : ''}

            <span className={styles.Spacer} />

            <input type="text" id="referral" name="referral"  type="text" placeholder="Member Referral" autoComplete="off" aria-required />

            <span className={styles.Spacer} />

            <input type="text" id="comments" name="comments" placeholder="Comments" autoComplete="off" aria-required />

            <span className={styles.Spacer} />

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