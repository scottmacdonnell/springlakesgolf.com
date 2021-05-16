import React, { useState } from 'react'
import useSWR from 'swr'

import Container from './ui/Container'
import Avatar from './ui/Avatar'
import AccountBadge from './ui/AccountBadge'
import FormSpacer from './ui/FormSpacer'
import InputText from './ui/InputText'

import fetcher from '../lib/fetcher'

import styles from '../styles/components/Dashboard.module.scss'

export default function Dashboard({ auth }) {
  return (
    <DashboardComponent>
      <DashboardHeader>
        <Avatar
          src={auth.user.photoUrl}
          width={96}
          height={96}
        />

        <h1>{auth.user.name}</h1>
        <p>{auth.user.email}</p>
      </DashboardHeader>

      <DashboardMain>
        { auth.user.role == 'user' ? <UserDashboard auth={auth} type={auth.user.role} /> : '' }
        { auth.user.role == 'member' ? <MemberDashboard auth={auth} type={auth.user.role} /> : '' }
        { auth.user.role == 'staff' ? <StaffDashboard auth={auth} type={auth.user.role} /> : '' }
        { auth.user.role == 'admin' ? <AdminDashboard auth={auth} type={auth.user.role} /> : '' }
        {/* { auth.user.role == 'user' ? (
          <Section>
            <SectionHeader>
              <div className={styles.SectionHeaderLeft}>
                <h2>Member Code</h2>
              </div>

              <div className={styles.SectionHeaderRight} />
            </SectionHeader>

            <SectionMain>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolorum sit nemo pariatur, minima porro, voluptatibus facere nulla sed ducimus ex, aliquam accusamus recusandae! Repellat repellendus voluptate dolore ad illo.</p>
            </SectionMain>

            <SectionFooter>
              <div className={styles.SectionFooterLeft}>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
              </div>

              <div className={styles.SectionFooterRight}>
                <button className={styles.Normal}>
                  <span className={styles.Content}>Submit</span>
                </button>
              </div>
            </SectionFooter>
          </Section>
        ) : <div /> } */}
      </DashboardMain>
    </DashboardComponent>
  )
}

function DashboardComponent(props) {
  return (
    <div className={styles.DashboardComponent}>
      <Container>
        <div className={styles.Dashboard}>
          {props.children}
        </div>
      </Container>
    </div>
  )
}

function DashboardHeader(props) {
  return <div className={styles.DashboardHeader} {...props} />
}

function DashboardMain(props) {
  return <div className={styles.DashboardMain} {...props} />
}

function Section(props) {
  return <div className={styles.Section} {...props} />
}

function SectionHeader(props) {
  return <div className={styles.SectionHeader} {...props} />
}

function SectionMain(props) {
  return <div className={styles.SectionMain} {...props} />
}

function SectionFooter(props) {
  return <div className={styles.SectionFooter} {...props} />
}

function UserDashboard({
  auth,
  type
}) {

  const [status, setStatus] = useState({
    disabled: true,
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })

  const [inputs, setInputs] = useState({
    inputCode: ''
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
        inputCode: ''
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
    if(inputs.inputCode !== '') {
      setStatus({
        disabled: false,
        submitted: false,
        submitting: false,
        info: { error: false, msg: null }
      })
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
    const data = await fetch('/api/user/membercode/get-code')
    const res = await data.json()
    if (res.code !== inputs.inputCode) {
      setStatus({
        disabled: false,
        submitted: false,
        submitting: false,
        info: { error: true, msg: "Incorrect code." }
      })
    }
    if (res.code === inputs.inputCode) {
      const res = await fetch(`/api/user/membercode/change-type/member/${auth.user.uid}`)
      setStatus({
        disabled: false,
        submitted: false,
        submitting: false,
        info: { error: true, msg: 'success' }
      })
      auth.signOut()
    }
  }

  return (
    <>
      <Section>
        <SectionHeader>
            <div className={styles.SectionHeaderLeft}>
              <h2>Member Code</h2>
            </div>

            <div className={styles.SectionHeaderRight}>
              <AccountBadge type={type} />
            </div>
        </SectionHeader>

        <SectionMain>
          <form className={styles.MemberCodeForm} onSubmit={handleSubmit}>
            <FormSpacer />

            <p style={{ textAlign: 'start' }}>
              To fully activate your account, please enter your member code below.
            </p>

            <FormSpacer />
            
            <InputText
              name="inputCode"
              placeholder="Enter member code here"
              autoComplete="off"
              required
              onChange={handleChange}
              value={inputs.inputCode}
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
                  <path d="M13 2H6a2 2 0 00-2 2v16m0 0a2 2 0 002 2h12a2 2 0 002-2M4 20V9m16 11V9m0 11V4a2 2 0 00-2-2h-7"/>
                  <path d="M7.716 6.783c0-.433.353-.783.79-.783.679 0 1.314.056 1.878.44.532.363.893.948 1.268 1.658l.009.015 1.053 2.229 2.333 4.835.005.009.164.355c.078.17.142.31.207.44.101.204.165.296.21.345l.003.004c.022.027.086.105.575.105.436 0 .789.35.789.782a.786.786 0 01-.79.783c-.683 0-1.278-.113-1.743-.619a3.01 3.01 0 01-.459-.704c-.076-.152-.159-.334-.247-.526l-.14-.303-1.72-3.563-3.446 5.353a.794.794 0 01-1.09.239.779.779 0 01-.24-1.08l3.976-6.178-.855-1.81c-.377-.71-.583-.96-.756-1.079-.143-.097-.353-.165-.985-.165a.786.786 0 01-.79-.782z" fill="currentColor" stroke="none"/>
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
            
            <FormSpacer />
            {status.info.error && (
              <div className="error">Error: {status.info.msg}</div>
            )}
            {!status.info.error && status.info.msg && (
              <div className="success">{status.info.msg}</div>
            )}
          </form>
          
        </SectionMain>

        <SectionFooter>
          <div className={styles.SectionFooterLeft}>
            <button className={styles.Caution} onClick={(e) => auth.signOut()}>
              <span className={styles.Content}>Delete Account</span>
            </button>
          </div>

          <div className={styles.SectionFooterRight}>
            <button className={styles.Normal} onClick={(e) => auth.signOut()}>
              <span className={styles.Content}>Log Out</span>
            </button>
          </div>
        </SectionFooter>
      </Section>
    </>
  )
}

function MemberDashboard({
  auth,
  type
}) {
  return (
    <>
      <Section>
        <SectionHeader>
            <div className={styles.SectionHeaderLeft}>
              <h2>Account</h2>
            </div>

            <div className={styles.SectionHeaderRight}>
              <AccountBadge type={type} />
            </div>
        </SectionHeader>

        <SectionMain>
          <p>
            You have successfully activated your member account.
          </p>
        </SectionMain>

        <SectionFooter>
          <div className={styles.SectionFooterLeft}>
            <button className={styles.Caution} onClick={(e) => auth.signOut()}>
              <span className={styles.Content}>Delete Account</span>
            </button>
          </div>

          <div className={styles.SectionFooterRight}>
            <button className={styles.Normal} onClick={(e) => auth.signOut()}>
              <span className={styles.Content}>Log Out</span>
            </button>

            {/* <button className={styles.Normal}>
              <span className={styles.Content}>Settings</span>
            </button> */}
          </div>
        </SectionFooter>
      </Section>
    </>
  )
}

function StaffDashboard({
  auth,
  type
}) {
  return (
    <>
      <Section>
        <SectionHeader>
            <div className={styles.SectionHeaderLeft}>
              <h2>Account</h2>
            </div>

            <div className={styles.SectionHeaderRight}>
              <AccountBadge type={type} />
            </div>
        </SectionHeader>

        <SectionMain>
          <p>
            You have successfully activated your staff account.
          </p>
        </SectionMain>

        <SectionFooter>
          <div className={styles.SectionFooterLeft}>
          </div>

          <div className={styles.SectionFooterRight}>
            <button className={styles.Inverted} onClick={(e) => auth.signOut()}>
              <span className={styles.Content}>Log Out</span>
            </button>

            <button className={styles.Normal}>
              <span className={styles.Content}>Settings</span>
            </button>
          </div>
        </SectionFooter>
      </Section>
    </>
  )
}

function AdminDashboard({
  auth,
  type
}) {
  return (
    <>
      <Section>
        <SectionHeader>
            <div className={styles.SectionHeaderLeft}>
              <h2>Account</h2>
            </div>

            <div className={styles.SectionHeaderRight}>
              <AccountBadge type={type} />
            </div>
        </SectionHeader>

        <SectionMain>
          <p>
            You have successfully activated your admin account.
          </p>
        </SectionMain>

        <SectionFooter>
          <div className={styles.SectionFooterLeft}>
          </div>

          <div className={styles.SectionFooterRight}>
            <button className={styles.Inverted} onClick={(e) => auth.signOut()}>
              <span className={styles.Content}>Log Out</span>
            </button>

            <button className={styles.Normal}>
              <span className={styles.Content}>Settings</span>
            </button>
          </div>
        </SectionFooter>
      </Section>
    </>
  )
}