import Container from './Container'
import Avatar from './Avatar'
import AccountBadge from './AccountBadge'

import styles from '../styles/components/Dashboard.module.scss'

const userType = 'user' 

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
          <Section>
            <SectionHeader>
              <div className={styles.SectionHeaderLeft}>
                <h2>Account</h2>
              </div>

              <div className={styles.SectionHeaderRight}>
                <AccountBadge type={userType} />
              </div>
            </SectionHeader>

            <SectionMain>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolorum sit nemo pariatur, minima porro, voluptatibus facere nulla sed ducimus ex, aliquam accusamus recusandae! Repellat repellendus voluptate dolore ad illo.</p>
            </SectionMain>

            <SectionFooter>
              <div className={styles.SectionFooterLeft}>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
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

          { userType === 'user' ? (
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
                    <span className={styles.Content}>Save</span>
                  </button>
                </div>
              </SectionFooter>
            </Section>
          ) : <div /> }
        </DashboardMain>
      </DashboardComponent>
    </Container>
  )
}

function SectionFooter(props) {
  return (
    <div className={styles.SectionFooter}>
      {props.children}
    </div>
  )
}

function SectionMain(props) {
  return (
    <div className={styles.SectionMain}>
      {props.children}
    </div>
  )
}

function SectionHeader(props) {
  return (
    <div className={styles.SectionHeader}>
      {props.children}
    </div>
  )
}

function Section(props) {
  return (
    <div className={styles.Section}>
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