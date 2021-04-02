import Container from './Container'

import styles from '../styles/components/BookingForm.module.scss'

export default function BookingForm() {
  return (
    <BookingFormComponent>
      <BookingFormHeader>
        <h2>Event Booking Inquires</h2>
      </BookingFormHeader>

      <BookingFormMain>
        <form className={styles.BookingFormContent}>
          <div>
            <input type='text' id='name' name='name' placeholder='Name' autoComplete='off' aria-required />

            <span className={styles.Spacer} />

            <input type='email' id='email' name='email' placeholder='Email Address' autoComplete='off' aria-required />

            <span className={styles.Spacer} />

            <input type="tel" id="phone" name="phone" placeholder="Phone Number" autoComplete="off" aria-required />
          </div>
          
          <div>
            <input type="textarea" id="message" name="message" placeholder="Message" autoComplete="off" aria-required />

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
          </div>
        </form>
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