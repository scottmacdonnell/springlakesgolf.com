import Link from 'next/link'

import Container from './ui/Container'
import * as Text from './ui/Text'
import Modal from './ui/Modal'

import styles from '../styles/components/MembershipShowcase.module.scss'

export default function MembershipShowcase({ auth }) {
  return (
    <MembershipShowcaseComponent>
      <MembershipShowcaseHeader>
        <h2>1 Membership = 3 Courses</h2>
        <h5>Spring Lakes Golf Club offers a member's experience like no other.</h5>
        <h5>Spring Lakes Golf Club is the largest private golf course experience in Canada. Offering 3 separate 18 hole courses, and the best practice facilities around. Spring Lakes prides itself in its affordability for what it offers.</h5>
        <h5>Spring Lakes Golf Club has created a social and relaxing atmosphere that welcomes all families and couples to use the amenities, and golf facilities throughout the year. With your choice of three challenging 18 hole courses, zero clubhouse minimums, annual children's camps, a lively front barbecue area, and a peaceful back patio, Spring Lakes is truly a different private course experience than any other club!</h5>
      </MembershipShowcaseHeader>

      <MembershipShowcaseNewMember>
        <MembershipShowcaseCard>
          <h3>New Membership</h3>
          <span className={styles.Prefix}>
            <GolfClubsIcon />
          </span>
        </MembershipShowcaseCard>
          
        <MembershipShowcaseCardButtons>
          <ViewOptions>
            <Text.Heading4>Option 1</Text.Heading4>
            <Text.Paragraph>Option 1 is our “pay as you play” memberships. This membership allows you to pay a low cost annual fee, as well as the affordable green fees each time you come. This membership allows you to golf freely throughout the week. And allows daily access to all practice facilities, as well as dining facilities. This membership package is recommended for new members looking to get a feel of the Club.</Text.Paragraph>
            <Text.Heading4>Option 2</Text.Heading4>
            <Text.Paragraph>Option 2 is our “weekday” membership which allows the golfer to play during the week at a set annual price.  Golfers will have access to all 3 courses as well as practice facilities and access to the dining facilities. Weekday members have the ability to play on the weekend, at the weekend rate.</Text.Paragraph>
            <Text.Heading4>Option 3</Text.Heading4>
            <Text.Paragraph>Option 3 is our “full membership” that allows members to play as much as you would like at an annual price. This price includes all green fees, use of practice facilities and access to the dining facilities. This membership package is especially popular for golfers who look to play regularly.</Text.Paragraph>
            <Text.Heading4>Option 4</Text.Heading4>
            <Text.Paragraph>Newly introduced, Option 4 is our 9 hole weekday membership package. Option 4 similar to Option 2 is a 9 hole package that allows golfers to play 9 holes during the week . Golfers who have the 9 hole membership package will be limited to the East Course and can only play once a day.. If members with one of these options wish to play 18 holes, they will need to pay the 9 hole rate during the week or weekend.</Text.Paragraph>
            <Text.Heading4>Option 5</Text.Heading4>
            <Text.Paragraph>Newly introduced, Option 5 is our 9 hole full membership package.Option 5 similar to Option 3 is a 9 hole membership that includes the 9 hole package, 7 days a week Option 5 members are limited to the East Course only, one round a day. Option 5 members who wish to play 18 will pay the rate for 9 holes based on weekday or weekend rates.</Text.Paragraph>
          </ViewOptions>

          <PrintPDF href="/docs/memberships/new_2022.pdf" />
        </MembershipShowcaseCardButtons>
      </MembershipShowcaseNewMember>

      <MembershipShowcaseMain>
        <MembershipShowcaseMainItem>
          <MembershipShowcaseCard>
            <h3>Junior Intermediate Membership</h3>
            <span className={styles.Prefix}>
              <GolfPoloIcon />
            </span>
          </MembershipShowcaseCard>
          
          <MembershipShowcaseCardButtons>
            <ViewOptions>
              <Text.Heading4>Junior Intermediate</Text.Heading4>
              <Text.Paragraph>This package was introduced last year! With tremendous success, we have looked to continue offering this package moving forward. The Junior Intermediate membership is priced to be affordable for all students. This membership is meant to bridge the gap from our junior to adult members. The Junior Intermediate package is for ages 18-25 for individuals in school. All green fees are included in this membership cost. </Text.Paragraph>
            </ViewOptions>

            <PrintPDF href="/docs/memberships/ji_2022.pdf" />
          </MembershipShowcaseCardButtons>
        </MembershipShowcaseMainItem>

        <MembershipShowcaseMainItem>
          <MembershipShowcaseCard>
            <h3>Junior Membership</h3>
            <span className={styles.Prefix}>
              <GolfPlayerIcon />
            </span>
          </MembershipShowcaseCard>
          
          <MembershipShowcaseCardButtons>
            <ViewOptions>
              <Text.Heading4>Junior Membership</Text.Heading4>
              <Text.Paragraph>Our Junior Package is a joy to offer.  This package is geared towards our younger demographic (7-18) with a love for the game. Our Junior packages allow golfers to golf as often as they wish at an annual set fee.  Restrictions apply, please read membership applications accordingly.</Text.Paragraph>
            </ViewOptions>

            <PrintPDF href="/docs/memberships/juinor_2022.pdf" />
          </MembershipShowcaseCardButtons>
        </MembershipShowcaseMainItem>

        { auth?.user?.role !== 'member' ? 
          ''
        :
          <>
            <MembershipShowcaseMainItem>
              <MembershipShowcaseCard
                href="/docs/memberships/renewal_2022.pdf"
              >
                <h3>Membership Renewal</h3>
                <span className={styles.Prefix}>
                  <GolfFlagIcon />
                </span>
              </MembershipShowcaseCard>
            </MembershipShowcaseMainItem>

            <MembershipShowcaseMainItem>
              <MembershipShowcaseCard
                href="/docs/memberships/ratesheet.pdf"
              >
                <h3>2021 Rate Sheet</h3>
                <span className={styles.Prefix}>
                  <GolfRatesIcon />
                </span>
              </MembershipShowcaseCard>
            </MembershipShowcaseMainItem>
          </>
        }
      </MembershipShowcaseMain>
    </MembershipShowcaseComponent>
  )
}

function PrintPDF({ href }) {
  return (
    <Link href={href}>
      <div className={styles.Button2}>
        <h5>Print PDF</h5>
      </div>
    </Link>
  )
}

function ViewOptions({ children }) {
  return (
    <Modal content={children}>
      <div className={styles.Button1}>
        <h5>View Options</h5>
      </div>
    </Modal>
  )
}

function MembershipShowcaseCardButtons(props) {
  return (
    <div className={styles.MembershipShowcaseCardButtons}>
      {props.children}
    </div>
  )
}

function MembershipShowcaseCard({
  children,
  href
}) {
  const formattedhref = href ? href : ''
  return (
    <>
      { href ? (
        <Link 
          href={href}
          style={{ display: 'contents' }}
        >
          <div
            className={styles.MembershipShowcaseCard}
            style={{ cursor: 'pointer' }}
          >
            {children}
          </div>
        </Link>
      ) : (
        <div className={styles.MembershipShowcaseCard}>
          {children}
        </div>
      )}
    </>
  )
}

function MembershipShowcaseMainItem(props) {
  return (
    <div className={styles.MembershipShowcaseMainItem}>
      {props.children}
    </div>
  )
}

function MembershipShowcaseMain(props) {
  return (
    <div className={styles.MembershipShowcaseMain}>
      {props.children}
    </div>
  )
}

function MembershipShowcaseNewMember(props) {
  return (
    <div className={styles.MembershipShowcaseNewMember}>
      {props.children}
    </div>
  )
}

function MembershipShowcaseHeader(props) {
  return (
    <div className={styles.MembershipShowcaseHeader}>
      {props.children}
    </div>
  )
}

function MembershipShowcaseComponent(props) {
  return (
    <Container>
      <div className={styles.MembershipShowcase}>
        {props.children}
      </div>
    </Container>
  )
}

function GolfClubsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128" fill="currentColor" shapeRendering="geometricPrecision">
      <path d="M69.826 50.563h-36a1.75 1.75 0 00-1.75 1.75v52.442a1.75 1.75 0 001.75 1.75h36a1.75 1.75 0 001.75-1.75V52.313a1.75 1.75 0 00-1.75-1.75zm-1.75 52.442h-32.5V54.063h32.5zM39.109 12.082H27.764a1.75 1.75 0 000 3.5h11.345a1.75 1.75 0 000-3.5zM30.477 10.32H36.4a1.75 1.75 0 000-3.5h-5.923a1.75 1.75 0 100 3.5z"/>
      <path d="M91.685 51.875H79.576v-4.562a4.755 4.755 0 00-4.75-4.75h-.25V38.25a4.756 4.756 0 00-4.75-4.75h-6.595l.013-11.1h8.775a11.2 11.2 0 000-22.4h-6.358a12.287 12.287 0 00-12.272 12.27l-.016 21.23h-5.1l-.015-21.23A12.287 12.287 0 0035.985 0h-6.357a11.2 11.2 0 100 22.407H38.4l.013 11.1h-4.587a4.756 4.756 0 00-4.75 4.75v4.313h-.25a4.755 4.755 0 00-4.75 4.75v62.442a4.756 4.756 0 004.75 4.75h.25v8.742a4.756 4.756 0 004.75 4.75h36a4.756 4.756 0 004.75-4.75v-8.742h.25a4.756 4.756 0 004.75-4.75V102.9l23.475-19.31a17.891 17.891 0 00-11.366-31.715zm-12.109 11.5h12.109a6.391 6.391 0 014.06 11.325L79.576 88zM56.889 12.27a8.783 8.783 0 018.772-8.77h6.358a7.7 7.7 0 010 15.408H61.5a1.75 1.75 0 00-1.75 1.748L59.731 33.5h-2.858zM41.9 20.652a1.75 1.75 0 00-1.75-1.752H29.628a7.7 7.7 0 110-15.407h6.357a8.784 8.784 0 018.773 8.773l.014 21.23h-2.857zm-9.324 17.6A1.251 1.251 0 0133.826 37h36a1.25 1.25 0 011.25 1.25v4.313h-38.5zm38.5 85a1.251 1.251 0 01-1.25 1.25h-36a1.252 1.252 0 01-1.25-1.25v-8.742h38.5zm5-13.492a1.251 1.251 0 01-1.25 1.25h-46a1.252 1.252 0 01-1.25-1.25V47.313a1.251 1.251 0 011.25-1.25h46a1.25 1.25 0 011.25 1.25v62.442zm24.752-28.88L79.576 98.361v-5.827l18.393-15.129a9.891 9.891 0 00-6.284-17.53H79.576v-4.5h12.109a14.391 14.391 0 019.143 25.5z"/>
      <path d="M62.537 15.582h11.345a1.75 1.75 0 000-3.5H62.537a1.75 1.75 0 000 3.5zM65.25 10.32h5.919a1.75 1.75 0 000-3.5H65.25a1.75 1.75 0 000 3.5z"/>
    </svg>
  )
}

function GolfPoloIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128" fill="currentColor" shapeRendering="geometricPrecision">
      <path d="M127.476 33.785L121.2 27.62l-16.535-16.229a22.617 22.617 0 00-15.938-6.516h-3.41L79.025.329A1.929 1.929 0 0078 0H50a1.926 1.926 0 00-1.025.332l-6.292 4.543h-3.411a22.617 22.617 0 00-15.937 6.516L6.807 27.617.524 33.785a1.753 1.753 0 00-.457 1.73c.224.782 5.612 19.222 17.472 24.493a1.75 1.75 0 001.821-.246l5.86-4.807 5.364-4.4-8.324 65.464a1.753 1.753 0 00.848 1.729 86.7 86.7 0 0081.784 0 1.753 1.753 0 00.848-1.729l-8.324-65.466 5.364 4.4 5.86 4.807a1.75 1.75 0 001.821.246c11.86-5.271 17.248-23.711 17.472-24.493a1.753 1.753 0 00-.457-1.728zM71.713 23.656l-5.277-4.3 7.473-9.546 4.431-5.658 4.041 2.92zM64 16.786l-4.938-6.305h9.876zm7.678-9.805H56.321L53.593 3.5h20.814zM49.66 4.152l4.431 5.658 7.473 9.543-5.277 4.3L45.619 7.072zM18.009 56.344C9.667 51.874 4.946 39.162 3.742 35.531L7.235 32.1A55.617 55.617 0 0021.44 53.528zm84.108 58.93A86.321 86.321 0 0164 124.5a86.321 86.321 0 01-38.117-9.223l8.728-68.647a1.75 1.75 0 00-2.846-1.574l-7.6 6.236a51.713 51.713 0 01-14.156-21.913l15.777-15.49a19.14 19.14 0 0113.486-5.514H42.3L54.4 27.2a1.754 1.754 0 001.2.782 1.8 1.8 0 00.274.021c.012 0 .024-.006.036-.006a1.767 1.767 0 00.5-.086c.036-.012.07-.027.105-.041a1.7 1.7 0 00.463-.261l5.27-4.3v7.159a1.75 1.75 0 003.5 0V23.31l5.269 4.3a1.752 1.752 0 00.467.263c.033.013.065.027.1.038a1.759 1.759 0 00.508.088h.032a1.8 1.8 0 00.274-.021 1.754 1.754 0 001.2-.782L85.705 8.375h3.022a19.144 19.144 0 0113.487 5.513l15.777 15.491a51.713 51.713 0 01-14.156 21.913l-7.6-6.236a1.75 1.75 0 00-2.846 1.574zm7.874-58.93l-3.431-2.816a55.617 55.617 0 0014.2-21.426l3.493 3.429c-1.199 3.631-5.92 16.343-14.262 20.813z"/>
      <path d="M64 35.188a1.749 1.749 0 00-1.75 1.75v3a1.75 1.75 0 003.5 0v-3a1.749 1.749 0 00-1.75-1.75z"/>
    </svg>
  )
}

function GolfPlayerIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128" fill="currentColor" shapeRendering="geometricPrecision">
      <path d="M61.774 67.792h1.582a1.75 1.75 0 000-3.5h-1.127l.506-3.339a1.75 1.75 0 10-3.461-.525l-.574 3.789a3.109 3.109 0 003.074 3.575zM61.472 75.957a8.724 8.724 0 006.747-2.826 1.75 1.75 0 00-2.7-2.225 6.054 6.054 0 01-8.094 0 1.75 1.75 0 00-2.7 2.225 8.724 8.724 0 006.747 2.826zM21.812 8.98a1.75 1.75 0 00-2.39.641l-5.771 9.995a1.75 1.75 0 003.032 1.75l5.77-9.995a1.751 1.751 0 00-.641-2.391zM16.437 11.085a1.75 1.75 0 10-3.031-1.75L10.4 14.55a1.75 1.75 0 00.641 2.39 1.73 1.73 0 00.873.235 1.751 1.751 0 001.518-.875z"/>
      <path d="M125.391 58.7a5.284 5.284 0 00-2.478-3.229l-6.574-3.8.206-.921a5.73 5.73 0 00-3.107-6.431l-6.288-3.043a4.744 4.744 0 00-6.005 1.622L81.556 31.591A9.754 9.754 0 0076.038 28l-10.453-2.492L24.2 1.668A12.455 12.455 0 007.185 6.227l-3.233 5.6A11.368 11.368 0 1023.642 23.2l4.479-7.756 20.988 12.08-2 .477a9.75 9.75 0 00-7.513 9.515v8.13l-1.445.268a5.246 5.246 0 00-1.777 9.67 7.229 7.229 0 005.262 13.059c.019.1.039.191.058.288a38 38 0 001.845 6.975A19.451 19.451 0 0049.2 83.6l-.743 5.821a5.6 5.6 0 01-.742 1.663h-8a19.771 19.771 0 00-19.75 19.75v15.52a1.75 1.75 0 001.75 1.75h69.72a1.751 1.751 0 001.75-1.75v-5.894a22.777 22.777 0 0021.41-22.707V68.417l.636.367a5.322 5.322 0 007.265-1.947l2.369-4.105a5.286 5.286 0 00.526-4.032zm-20.849-14.274a1.228 1.228 0 011.083 0l6.288 3.043a2.241 2.241 0 011.216 2.516l-9.961 44.566a17.135 17.135 0 01-12.228 12.87c-2.9.936-8.708.547-11.758.62v-10.5h7.151a6.709 6.709 0 006.585-5.265l8-34.36.04-.172 2.9-12.472a1.231 1.231 0 01.684-.846zm-29.3 46.621a1.609 1.609 0 00-.109-.248 3.7 3.7 0 01-.426-1.278l-.761-5.921a19.43 19.43 0 005.662-7.7 37.973 37.973 0 001.843-6.963c.018-.09.037-.178.055-.268a6.965 6.965 0 00.843.056 7.247 7.247 0 004.316-13.074 5.4 5.4 0 00.737-.512 5.261 5.261 0 001.32-1.659l8.494 4.9-7.71 33.12a3.234 3.234 0 01-3.173 2.544h-7.151v-1.21a1.75 1.75 0 00-1.75-1.75h-2.176c-.004-.015-.013-.026-.017-.037zm7.868-29.818a23.205 23.205 0 00.426-3.321 3.756 3.756 0 01-1.184 7.32h-.116zM100.03 46.3l-1.53 6.583-.452 1.941-8.968-5.176A5.251 5.251 0 0085 45.914l-1.445-.268v-8.13c0-.253-.013-.5-.032-.75zm-72.549-35a1.747 1.747 0 00-1.517.875l-5.354 9.27a7.867 7.867 0 11-13.627-7.867l3.234-5.6A8.954 8.954 0 0122.45 4.7l35.824 20.638-4.206 1-25.716-14.805a1.744 1.744 0 00-.871-.233zm15.613 26.216a6.262 6.262 0 014.826-6.111l13.652-3.256 13.654 3.256a6.263 6.263 0 014.825 6.111V45l-18.159-3.376a1.724 1.724 0 00-.32-.029 1.705 1.705 0 00-.319.029L43.094 45zm-4.307 11.839l22.785-4.23 22.786 4.23a1.765 1.765 0 011.421 1.479c0 .047.007.093.012.14s.011.078.011.118a1.768 1.768 0 01-2.089 1.737l-1.592-.3-20.229-3.751a1.775 1.775 0 00-.639 0l-20.229 3.755-1.589.3a1.767 1.767 0 11-.646-3.474zm-1.948 12.118a3.762 3.762 0 012.768-3.624 46.827 46.827 0 001.3 7.365 3.787 3.787 0 01-4.068-3.741zM46.78 74.59a35.533 35.533 0 01-1.654-6.336c-.7-4.078-2.227-8.365-2.032-12.544l6.9-1.281a3.7 3.7 0 104.287-.8l7.3-1.354 7.3 1.354a3.705 3.705 0 104.286.8l6.9 1.28c.249 3.885-1.379 8.755-2.034 12.554a35.3 35.3 0 01-1.652 6.323 15.934 15.934 0 01-5.127 6.694 1.707 1.707 0 00-.345.25 16.005 16.005 0 01-18.64 0 1.769 1.769 0 00-.347-.252 15.929 15.929 0 01-5.142-6.688zm5.1 15.563c.015-.062.026-.126.035-.189l.537-4.2a19.515 19.515 0 0018.243 0l.537 4.2a6.937 6.937 0 00.241 1.117H51.6a9.465 9.465 0 00.279-.928zm37.8 34.448H23.459v-13.77a16.269 16.269 0 0116.25-16.25h35.972V111H57.635a1.75 1.75 0 100 3.5h19.8a1.75 1.75 0 001.75-1.75v-1.209h7.151a22.852 22.852 0 003.346-.27zm3.5-7.669V110.4a20.621 20.621 0 0013.405-15.078l4.5-20.154V97.75a19.26 19.26 0 01-17.906 19.182zm28.649-55.95l-2.369 4.105a1.818 1.818 0 01-2.484.666l-2.386-1.378v-4.868l.951-4.254 5.623 3.246a1.817 1.817 0 01.665 2.483z"/>
    </svg>
  )
}

function GolfFlagIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128" fill="currentColor" shapeRendering="geometricPrecision">
      <path d="M109.594 113.5H93.4a16.751 16.751 0 10-20.415 0H50.734V61.443l46.215-21a1.75 1.75 0 000-3.187l-46.215-21V11.5h.579a5.75 5.75 0 000-11.5H36.654a5.75 5.75 0 000 11.5h.58v102H18.406a8.76 8.76 0 00-8.75 8.75v4a1.751 1.751 0 001.75 1.75h105.188a1.751 1.751 0 001.75-1.75v-4a8.76 8.76 0 00-8.75-8.75zm-39.657-13.25a13.25 13.25 0 1113.25 13.25 13.266 13.266 0 01-13.25-13.247zM92 38.847L50.734 57.6V20.1zM34.4 5.75a2.253 2.253 0 012.25-2.25h14.663a2.25 2.25 0 010 4.5H36.654A2.253 2.253 0 0134.4 5.75zm6.33 5.75h6.5v102h-6.5zm74.11 113H13.156v-2.247a5.256 5.256 0 015.25-5.25h91.188a5.256 5.256 0 015.25 5.25z"/>
      <path d="M82.781 93.144a1.75 1.75 0 000-3.5h-.75a1.75 1.75 0 000 3.5zM90.281 93.394h-.75a1.75 1.75 0 000 3.5h.75a1.75 1.75 0 000-3.5zM84.516 97.753h-.75a1.75 1.75 0 000 3.5h.75a1.75 1.75 0 000-3.5z"/>
    </svg>
  )
}

function GolfRatesIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128" fill="currentColor" shapeRendering="geometricPrecision">
      <path d="M35.938 112h56.125a1.75 1.75 0 001.75-1.75V47.132a1.75 1.75 0 00-1.75-1.75H35.938a1.749 1.749 0 00-1.75 1.75v63.115a1.749 1.749 0 001.75 1.753zm31.968-42.09v7.03h-7.812v-7.033zm-7.812-3.5v-7.035h7.812v7.032zm0 21.065V80.44h7.812v7.032zm7.812 3.5V98h-7.812v-7.028zM48.781 80.44h7.813v7.032h-7.813zm-3.5 7.032h-7.593V80.44h7.593zm26.125-7.032h7.813v7.032h-7.813zm11.313 0h7.594v7.032h-7.594zm7.594-3.5h-7.594v-7.033h7.594zm-11.094 0h-7.813v-7.033h7.813zm-22.625 0h-7.813v-7.033h7.813zm-11.313 0h-7.593v-7.033h7.593zm-7.593 14.032h7.593V98h-7.593zm11.093 0h7.813V98h-7.813zm7.813 10.528v7h-7.813v-7zm3.5 0h7.812v7h-7.812zm11.312 0h7.813v7h-7.813zm0-3.5v-7.028h7.813V98zm11.313-7.032h7.594V98h-7.594zm7.594-24.565h-7.594v-7.028h7.594zm-11.094 0h-7.813v-7.028h7.813zm-7.813-10.528v-6.993h7.813v6.993zm-3.5 0h-7.812v-6.993h7.812zm-11.312 0h-7.813v-6.993h7.813zm0 3.5v7.032h-7.813v-7.032zm-11.313 7.032h-7.593v-7.032h7.593zm-7.593 35.1h7.593v6.993h-7.593zm45.031 6.993v-7h7.594v7zm7.594-52.622h-7.594v-6.996h7.594zm-45.032-6.996v6.993h-7.593v-6.993z"/>
      <path d="M101.062 11.717h-7.281v-3.97A7.759 7.759 0 0086.031 0H41.969a7.759 7.759 0 00-7.75 7.75v3.97h-7.281a8.76 8.76 0 00-8.75 8.75v98.78a8.76 8.76 0 008.75 8.75h74.124a8.76 8.76 0 008.75-8.75V20.467a8.76 8.76 0 00-8.75-8.75zm-65.093 11.5h62.344V116.5H29.688V23.218zm1.75-15.471a4.255 4.255 0 014.25-4.25h44.062a4.255 4.255 0 014.25 4.25v11.972H37.719V7.747zm68.593 111.5a5.256 5.256 0 01-5.25 5.25H26.938a5.255 5.255 0 01-5.25-5.25V20.467a5.255 5.255 0 015.25-5.25h7.281v4.5h-6.281a1.749 1.749 0 00-1.75 1.75v96.779a1.749 1.749 0 001.75 1.75h72.124a1.749 1.749 0 001.75-1.75V21.468a1.749 1.749 0 00-1.75-1.75h-6.281v-4.5h7.281a5.256 5.256 0 015.25 5.25z"/>
      <path d="M48.031 17.2a5.594 5.594 0 10-5.593-5.594 5.6 5.6 0 005.593 5.594zm0-7.687a2.094 2.094 0 11-2.093 2.093 2.1 2.1 0 012.093-2.092zM79.969 17.2a5.594 5.594 0 10-5.594-5.594 5.6 5.6 0 005.594 5.594zm0-7.687a2.094 2.094 0 11-2.094 2.093 2.1 2.1 0 012.094-2.092zM35.938 40.875h10.437a1.75 1.75 0 001.75-1.75v-9.657a1.75 1.75 0 00-1.75-1.75H35.938a1.749 1.749 0 00-1.75 1.75v9.657a1.749 1.749 0 001.75 1.75zm1.75-9.657h6.937v6.157h-6.937zM54.381 40.875h37.682a1.75 1.75 0 001.75-1.75v-9.657a1.75 1.75 0 00-1.75-1.75H54.381a1.75 1.75 0 00-1.75 1.75v9.657a1.75 1.75 0 001.75 1.75zm1.75-9.657h34.182v6.157H56.131z"/>
    </svg>
  )
}