import Link from 'next/link'

import { useAuth } from '../lib/auth'

import styles from '../styles/components/AuthProviders.module.scss'

export const Wrapper = (props) => {
  return <div className={styles.Wrapper} {...props} />
}

export const Facebook = (props) => {
  const auth = useAuth()

  return (
    <button className={styles.Facebook} onClick={(e) => auth.signInWithFacebook()}>
      <span className={styles.Prefix}>
        <FacebookLogo />
      </span>

      <span className={styles.Content}>
        {props.children}
      </span>
    </button>
  )
}

export const Google = (props) => {
  const auth = useAuth()

  return (
    <button className={styles.Google} onClick={(e) => auth.signInWithGoogle()}>
      <span className={styles.Prefix}>
        <GoogleLogo />
      </span>

      <span className={styles.Content}>
        {props.children}
      </span>
    </button>
  )
}

export const Twitter = (props) => {
  const auth = useAuth()

  return (
    <button className={styles.Twitter} onClick={(e) => auth.signInWithTwitter()}>
      <span className={styles.Prefix}>
        <TwitterLogo />
      </span>

      <span className={styles.Content}>
        {props.children}
      </span>
    </button>
  )
}

export const Email = (props) => {
  const auth = useAuth()

  return (
    <Link href={props.href}>
      <button className={styles.Email}>
        <span className={styles.Prefix}>
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <path d="M22 6l-10 7L2 6" />
          </svg>
        </span>

        <span className={styles.Content}>
          {props.children}
        </span>
      </button>
    </Link>
  )
}

function FacebookLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1017.78" preserveAspectRatio="xMidYMid" width="22" height="22" fill="currentColor" shapeRendering="geometricPrecision">
      <path d="M1024,512C1024,229.23,794.77,0,512,0S0,229.23,0,512c0,255.55,187.23,467.37,432,505.78V660H302V512H432V399.2C432,270.88,508.44,200,625.39,200c56,0,114.61,10,114.61,10V336H675.44c-63.6,0-83.44,39.47-83.44,80v96H734L711.3,660H592v357.78C836.77,979.37,1024,767.55,1024,512Z"/>
    </svg>
  )
}

function GoogleLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 262" preserveAspectRatio="xMidYMid" width="22" height="22" shapeRendering="geometricPrecision">
      <path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4" />
      <path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"/>
      <path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"/>
      <path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"/>
    </svg>
  )
}

function TwitterLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 248 204" preserveAspectRatio="xMidYMid" width="22" height="22" fill="currentColor" shapeRendering="geometricPrecision">
    <g id="Logo_1_">
      <path id="white_background" d="M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04
      C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66
      c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64
      c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76
      c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26
      c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z" />
      </g>
    </svg>
  )
}