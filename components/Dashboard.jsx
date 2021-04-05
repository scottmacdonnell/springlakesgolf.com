import Container from './Container'
import Avatar from './Avatar'
import AccountBadge from './AccountBadge'

import styles from '../styles/components/Dashboard.module.scss'

export default function Dashboard({ auth }) {
  return (
    <Container>
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
          <Overview>
            <OverviewHeader>
              <div className={styles.OverviewHeaderLeft}>
                <h2>Account</h2>
              </div>

              <div className={styles.OverviewHeaderRight}>
                <AccountBadge type='admin' />
              </div>
            </OverviewHeader>

            <OverviewMain>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolorum sit nemo pariatur, minima porro, voluptatibus facere nulla sed ducimus ex, aliquam accusamus recusandae! Repellat repellendus voluptate dolore ad illo.</p>
            </OverviewMain>

            <OverviewFooter>
              <div className={styles.OverviewFooterLeft}>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
              </div>

              <div className={styles.OverviewFooterRight}>
                <button className={styles.SignOut} onClick={(e) => auth.signOut()}>
                  <span className={styles.Content}>Log Out</span>
                </button>

                <button className={styles.Settings}>
                  <span className={styles.Content}>Settings</span>
                </button>
              </div>
            </OverviewFooter>
          </Overview>
        </DashboardMain>
      </DashboardComponent>
    </Container>
  )
}

function OverviewFooter(props) {
  return (
    <div className={styles.OverviewFooter}>
      {props.children}
    </div>
  )
}

function OverviewMain(props) {
  return (
    <div className={styles.OverviewMain}>
      {props.children}
    </div>
  )
}

function OverviewHeader(props) {
  return (
    <div className={styles.OverviewHeader}>
      {props.children}
    </div>
  )
}

function Overview(props) {
  return (
    <div className={styles.Overview}>
      {props.children}
    </div>
  )
}

function DashboardMain(props) {
  return (
    <div className={styles.DashboardMain}>
      {props.children}
    </div>
  )
}

function DashboardHeader(props) {
  return (
    <div className={styles.DashboardHeader}>
      {props.children}
    </div>
  )
}

function DashboardComponent(props) {
  return (
    <div className={styles.Dashboard}>
      {props.children}
    </div>
  )
}