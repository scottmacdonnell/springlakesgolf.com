import Link from 'next/link'

import Container from './ui/Container'
import Modal from './ui/Modal'
import * as Text from './ui/Text'

import styles from '../styles/components/GameShowcase.module.scss'

export default function GameShowcase() {
  return (
    <Container>
      <GameShowcaseComponent>
        <GameShowcaseHeader>
          <h2>Lessons & Clinics</h2>
        </GameShowcaseHeader>

        <GameShowcaseMain>
          <GameShowcaseCard
            href="/docs/game/mens_golf.pdf"
          >
            <h3>Men's Extreme Clinic</h3>
            <span className={styles.Prefix}>
              <MensExtremeIcon />
            </span>
          </GameShowcaseCard>

          <GameShowcaseCard
            href="/docs/game/ladiesboot.pdf"
          >
            <h3>Ladies Boot Camp</h3>
            <span className={styles.Prefix}>
              <LadiesIcon />
            </span>
          </GameShowcaseCard>

          <GameShowcaseCard
            href="/docs/game/spring_golf.pdf"
          >
            <h3>Golf "101" Spring Clinic</h3>
            <span className={styles.Prefix}>
              <SpringIcon />
            </span>
          </GameShowcaseCard>

          <GameShowcaseCard
            href="/docs/game/fall_golf.pdf"
          >
            <h3>Golf "101" Fall Clinic</h3>
            <span className={styles.Prefix}>
              <FallIcon />
            </span>
          </GameShowcaseCard>

          <GameShowcaseCard
            href="/docs/game/tuneuptues.pdf"
          >
            <h3>Tune-up Tuesday</h3>
            <span className={styles.Prefix}>
              <TuesdayIcon />
            </span>
          </GameShowcaseCard>

          <GameShowcaseCard
            href="/docs/game/littleswingers.pdf"
          >
            <h3>Junior Summer Camps</h3>
            <span className={styles.Prefix}>
              <JuinorIcon />
            </span>
          </GameShowcaseCard>

          <GameShowcaseCard
            href="/docs/game/free.pdf"
          >
            <h3>Free Junior Clinics</h3>
            <span className={styles.Prefix}>
              <JuinorFreeIcon />
            </span>
          </GameShowcaseCard>

          {/* <GameShowcaseCard
            href="/docs/game/employee_golf.pdf"
          >
            <h3>Staff Clinic</h3>
            <span className={styles.Prefix}>
              <StaffIcon />
            </span>
          </GameShowcaseCard> */}

          <GameShowcaseCard
            href="/docs/game/ball_fitting.pdf"
          >
            <h3>Ball Fitting</h3>
            <span className={styles.Prefix}>
              <BallIcon />
            </span>
          </GameShowcaseCard>

          <GameShowcaseCard
            href="/docs/game/inst.pdf"
          >
            <h3>Instruction & Coaching Flyer</h3>
            <span className={styles.Prefix}>
              <CoachingIcon />
            </span>
          </GameShowcaseCard>

          <Modal content={(
            <div>
              <Text.Heading4>Teaching & Coaching Rates</Text.Heading4>
              <br />
              <Text.Heading6>Individual lesson rates</Text.Heading6>
              <Text.Paragraph>30 minute lesson — $40<br />60 minute lesson — $80</Text.Paragraph>

              <Text.Heading6>Two person lesson rates</Text.Heading6>
              <Text.Paragraph>30 minute lesson — $50<br />60 minute lesson — $100</Text.Paragraph>
              
              <Text.Heading6>9-hole playing lesson</Text.Heading6>
              <Text.Paragraph>2 hours — $160</Text.Paragraph>

              <Text.Heading6>Monthly performance coaching package - $500</Text.Heading6>
              <Text.Paragraph>Four 1 hour lessons<br />One playing lesson<br />Driving range tips upon request<br />Skills assessment</Text.Paragraph>

              <Text.Heading6>Six lesson package</Text.Heading6>
              <Text.Paragraph>30 minutes each — $200<br />60 minutes each — $400</Text.Paragraph>

              <Text.Heading6>Ball fitting lessons</Text.Heading6>
              <Text.Paragraph>Includes one dozen golf balls — $135</Text.Paragraph>

              <Text.Heading6>Golf Club Regripping Service</Text.Heading6>
              <Text.Paragraph>Wide selection of grips available.<br/>Inquire in the Pro Shop.</Text.Paragraph>

              <Text.Heading6>Winter Lessons - 2021/22</Text.Heading6>
              <Text.Paragraph>In an effort to keep your swing tuned up during the winter months, private lessons will be offered by appointment only.</Text.Paragraph>
            </div>
          )}>
            <div className={styles.GameShowcaseCard}>
              <Text.Heading3>Teaching & Coaching Rates</Text.Heading3>
            </div>
          </Modal>

          {/* <GameShowcaseCard
            href="/docs/game/fall_golf.pdf"
          >
            <h3>Golf Dates</h3>
            <span className={styles.Prefix}>
              <DatesIcon />
            </span>
          </GameShowcaseCard> */}

        </GameShowcaseMain>
      </GameShowcaseComponent>
    </Container>
  )
}

function RatesModal({ children }) {
  return (
    <Modal content={children}>
      <div className={styles.Button1}>
        <h3>Teaching & Coaching Rates</h3>
      </div>
    </Modal>
  )
}

function GameShowcaseCard({
  children,
  href
}) {
  return (
    <Link
      href={href ? href : ''}
      style={{ display: 'contents' }}
    >
      <div className={styles.GameShowcaseCard}>
        {children}
      </div>
    </Link>
  )
}

function GameShowcaseMain(props) {
  return (
    <div className={styles.GameShowcaseMain}>
      {props.children}
    </div>
  )
}

function GameShowcaseHeader(props) {
  return (
    <div className={styles.GameShowcaseHeader}>
      {props.children}
    </div>
  )
}

function GameShowcaseComponent(props) {
  return (
    <div className={styles.GameShowcase}>
      {props.children}
    </div>
  )
}

function MensExtremeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128" fill="currentColor" shapeRendering="geometricPrecision">
      <path d="M64.251 52.913h1.97a1.75 1.75 0 000-3.5l-1.912.067.715-4.718a1.75 1.75 0 00-3.461-.525l-.714 4.718a3.442 3.442 0 003.4 3.958zM63.874 63.077a10.433 10.433 0 008.07-3.361 1.75 1.75 0 10-2.7-2.226 7.047 7.047 0 01-5.369 2.087 7.04 7.04 0 01-5.369-2.088 1.75 1.75 0 00-2.7 2.225 10.428 10.428 0 008.068 3.363z"/>
      <path d="M103.714 87.283a46.164 46.164 0 00-8.55-1.237c-.53-.043-1.059-.085-1.582-.131-.206-.019-.409-.032-.614-.05a4.722 4.722 0 00-2.847-4.621l-2.542-1.1a4.78 4.78 0 00-4.98.753l-1.935 1.658c-.016-.039-.038-.077-.052-.117a1.778 1.778 0 00-.11-.249 5.023 5.023 0 01-.58-1.741l-.972-7.608a23.789 23.789 0 007.107-9.562 46.934 46.934 0 002.271-8.6c.049-.246.1-.487.15-.732a8.39 8.39 0 001.388.127 8.594 8.594 0 004.525-15.907 6.123 6.123 0 00-1.307-11.645l-2.15-.4V15.648a11.711 11.711 0 00-9.025-11.43L64.406.045a1.741 1.741 0 00-.812 0l-17.5 4.173a11.711 11.711 0 00-9.025 11.43v10.477l-2.15.4A6.093 6.093 0 0033.478 38.1a8.594 8.594 0 004.4 15.98 8.461 8.461 0 001.632-.168c.052.261.107.517.159.778a47 47 0 002.271 8.595 23.778 23.778 0 007.106 9.56l-.96 7.505a7.794 7.794 0 01-.877 2.1L45.4 80.9a4.778 4.778 0 00-4.98-.753l-2.543 1.1a4.692 4.692 0 00-2.843 4.537 54.683 54.683 0 00-10.749 1.5 24.362 24.362 0 00-17.9 23.444v15.518A1.75 1.75 0 008.141 128h111.718a1.75 1.75 0 001.75-1.75v-15.523a24.364 24.364 0 00-17.895-23.444zm-18.837-3.731a1.257 1.257 0 011.31-.2l2.542 1.1a1.387 1.387 0 01.378 2.176l-10.394 20.09L66.9 98.956zm4.989-32.976a4.8 4.8 0 01-.663-.071l1.188-5.424a24.082 24.082 0 00.53-4.6 5.1 5.1 0 01-1.055 10.094zm-49.3-25.1v-9.828A8.222 8.222 0 0146.9 7.623L64 3.546l17.1 4.077a8.222 8.222 0 016.336 8.025v9.827l-23.117-4.291a1.754 1.754 0 00-.638 0zm-5.011 4.491L64 24.685l28.445 5.281a2.628 2.628 0 01-.96 5.168l-1.98-.368-25.186-4.676a1.754 1.754 0 00-.638 0L38.5 34.766l-1.98.368a2.628 2.628 0 11-.96-5.168zm-2.777 15.506a5.1 5.1 0 014.3-5.023 24.219 24.219 0 00.532 4.637l1.182 5.4a5.022 5.022 0 01-.91.09 5.109 5.109 0 01-5.104-5.104zm12.409 16.49c-1.337-3.307-1.864-7.148-2.639-10.69l-1.518-6.929a20.646 20.646 0 01-.464-4.335v-2.067l11.169-2.074a4.122 4.122 0 101.194-.2c-.11 0-.212.024-.32.033L64 33.591l11.391 2.115c-.108-.009-.21-.033-.32-.033a4.267 4.267 0 101.194.2l11.169 2.074v2.066a20.614 20.614 0 01-.463 4.33l-1.52 6.937C84.425 63.084 77.052 74.882 64 74.6a20.28 20.28 0 01-18.813-12.637zM64 78.1a23.823 23.823 0 0011.7-3.055l.748 5.844a8.449 8.449 0 00.907 2.839 5.683 5.683 0 00.594 1.148L64 96.836 49.9 84.748a11.052 11.052 0 001.617-3.669 1.723 1.723 0 00.034-.188l.748-5.845A23.82 23.82 0 0064 78.1zm-25.41 7.083a1.24 1.24 0 01.68-.727l2.543-1.1a1.255 1.255 0 011.31.2l17.977 15.4-11.809 7.765-10.634-20.544a1.244 1.244 0 01-.067-.994zm79.519 39.317H9.891v-13.773a20.854 20.854 0 0115.318-20.068A52.151 52.151 0 0135.7 89.245l.589-.038 10.787 20.847a1.766 1.766 0 002.515.658l12.664-8.326v6.145a1.75 1.75 0 003.5 0v-6.145l12.664 8.326a1.766 1.766 0 002.515-.658l10.749-20.785c.527.041 1.056.085 1.59.132s1.072.091 1.609.134a42.837 42.837 0 017.908 1.124 20.854 20.854 0 0115.319 20.068z"/>
      <path d="M63.956 112.969a1.75 1.75 0 00-1.75 1.75v3.75a1.75 1.75 0 003.5 0v-3.75a1.75 1.75 0 00-1.75-1.75z"/>
    </svg>
  )
}

function LadiesIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128" fill="currentColor" shapeRendering="geometricPrecision">
      <path d="M64.251 52.913h1.97a1.75 1.75 0 000-3.5l-1.912.066.714-4.717a1.75 1.75 0 00-3.461-.524l-.714 4.717a3.442 3.442 0 003.4 3.958zM63.874 63.077a10.43 10.43 0 008.069-3.362 1.75 1.75 0 10-2.7-2.225 7.041 7.041 0 01-5.368 2.087 7.042 7.042 0 01-5.369-2.088 1.75 1.75 0 10-2.7 2.225 10.428 10.428 0 008.068 3.363z"/>
      <path d="M108.506 89.191c8.648-9.356 10.873-21.895 10.969-22.46a1.749 1.749 0 00-2.447-1.887l-7.726 3.5a13.252 13.252 0 01-18.172-8.306l-1.775-5.989c.17.011.34.027.511.027a8.594 8.594 0 004.525-15.907 6.123 6.123 0 00-1.307-11.645l-2.15-.4V15.647A11.709 11.709 0 0081.91 4.219L64.406.045a1.715 1.715 0 00-.812 0l-17.5 4.174a11.709 11.709 0 00-9.026 11.428v10.478l-2.149.4A6.092 6.092 0 0033.478 38.1a8.595 8.595 0 004.4 15.981c.258 0 .513-.02.767-.043l-1.779 6A13.252 13.252 0 0118.7 68.344l-7.726-3.5a1.749 1.749 0 00-2.447 1.887c.1.565 2.321 13.1 10.969 22.459a24.429 24.429 0 00-13.1 21.538v15.516a1.749 1.749 0 001.75 1.75h111.713a1.749 1.749 0 001.75-1.75v-15.516a24.427 24.427 0 00-13.103-21.537zM96.87 71.508a16.747 16.747 0 0013.875.023l4.46-2.019c-1.266 4.407-4.206 12.259-10.14 18.194-.464-.159-.916-.3-1.349-.423a46.371 46.371 0 00-8.563-1.237c-.525-.042-1.05-.084-1.569-.13-.213-.019-.423-.033-.636-.051h-.007l-.721-.057c-.419-.033-.841-.069-1.259-.1-1.676-.127-3.259-.247-4.866-.453-2.45-.356-4.314-1.146-5.113-2.164a2.345 2.345 0 01-.369-.649 1.719 1.719 0 00-.111-.253 5.009 5.009 0 01-.578-1.739l-.974-7.61a23.771 23.771 0 007.107-9.562 30.507 30.507 0 001.236-3.871l.481 1.625a16.75 16.75 0 009.096 10.476zM88.729 89.04l-16.516 15.614-5.864-10.972 12.969-7.342a13.406 13.406 0 006.3 2.378c.986.126 1.96.22 2.924.3.063.008.126.017.187.022zM42 88.746a9.311 9.311 0 006.573-2.465l13.076 7.4-5.864 10.972L39.224 89c.941-.081 1.869-.164 2.776-.254zm.546-37.474c-.9-4.243-2.276-8.965-1.983-13.33l11.167-2.073a4.124 4.124 0 101.2-.2c-.108 0-.209.024-.314.031L64 33.591 75.385 35.7c-.106-.007-.206-.031-.314-.031a4.265 4.265 0 101.2.2l11.164 2.073v2.066c-.072 4.609-1.794 9.468-2.54 14a44.225 44.225 0 01-2.081 7.957A20.249 20.249 0 0176.26 70.5a1.691 1.691 0 00-.381.277 20.355 20.355 0 01-23.757 0 1.766 1.766 0 00-.383-.279 20.249 20.249 0 01-6.552-8.533A44.409 44.409 0 0143.105 54c-.18-.914-.361-1.827-.557-2.728zM64 78.1a23.823 23.823 0 0011.7-3.055l.748 5.845a8.387 8.387 0 00.789 2.6L64 90.989l-13.341-7.551a11.243 11.243 0 00.856-2.36c.014-.061.026-.125.035-.188l.747-5.844A23.823 23.823 0 0064 78.1zm25.866-27.524a4.84 4.84 0 01-.668-.047c.594-2.821 1.749-7.19 1.732-10.049a5.1 5.1 0 01-1.064 10.1zm-49.3-34.929A8.223 8.223 0 0146.9 7.623L64 3.546l17.1 4.077a8.222 8.222 0 016.335 8.024v9.828l-23.116-4.291a1.754 1.754 0 00-.638 0l-23.116 4.292zm-5.01 14.319L64 24.685l28.445 5.281a2.628 2.628 0 01-.96 5.168l-1.985-.368-25.181-4.676a1.711 1.711 0 00-.638 0L38.5 34.766l-1.98.368a2.628 2.628 0 11-.96-5.168zm-2.778 15.507a5.112 5.112 0 014.289-5.039c.029 3.275 1.072 6.856 1.725 10.059a4.937 4.937 0 01-.91.083 5.109 5.109 0 01-5.104-5.103zM17.255 71.531a16.748 16.748 0 0022.971-10.5l.481-1.625a30.606 30.606 0 001.237 3.874 23.769 23.769 0 007.106 9.56l-.959 7.505a7.458 7.458 0 01-1.261 2.662 5.777 5.777 0 01-4.86 2.238h-.045a1.138 1.138 0 00-.182.009c-2.01.2-4.115.366-6.267.5l-.225.015-.219.014H35a54.44 54.44 0 00-10.718 1.5c-.431.118-.883.264-1.349.423-5.916-5.919-8.864-13.78-10.135-18.192zm-7.364 39.2A20.922 20.922 0 0121 92.332v32.162H9.891zM24.5 90.869c.243-.077.478-.147.709-.211a47.144 47.144 0 019.271-1.33l20.568 19.444a1.752 1.752 0 001.2.478 1.9 1.9 0 00.281-.022 1.752 1.752 0 001.262-.9L64 96.712l6.207 11.613a1.752 1.752 0 001.262.9 1.889 1.889 0 00.281.022 1.752 1.752 0 001.2-.478l20.479-19.355c.48.042.961.081 1.443.12a42.969 42.969 0 017.919 1.125q.347.094.709.21v33.625h-79zm93.609 33.625H107V92.333a20.92 20.92 0 0111.109 18.395z"/>
    </svg>
  )
}

function SpringIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128" fill="currentColor" shapeRendering="geometricPrecision">
      <path d="M64 21.25A42.747 42.747 0 10106.747 64 42.8 42.8 0 0064 21.25zm0 81.994A39.247 39.247 0 11103.247 64 39.291 39.291 0 0164 103.244zM64 17.748c4.158 0 7.062-3.238 7.062-7.875S65.7.856 65.084.373a1.751 1.751 0 00-2.168 0c-.612.483-5.978 4.851-5.978 9.5s2.904 7.875 7.062 7.875zm0-13.667c1.492 1.433 3.562 3.849 3.562 5.792 0 2.7-1.365 4.375-3.562 4.375s-3.562-1.676-3.562-4.375c0-1.943 2.071-4.36 3.562-5.792zM45.723 20.985a7.2 7.2 0 002.459-.447 6.768 6.768 0 004-3.744 8.236 8.236 0 00-.06-6.072C50.535 6.354 44 4.084 43.258 3.84a1.745 1.745 0 00-2.037.741c-.41.663-3.958 6.6-2.369 10.972 1.248 3.432 3.895 5.432 6.871 5.432zM43.508 7.7c1.891.836 4.663 2.4 5.327 4.224a4.842 4.842 0 01.122 3.521 3.264 3.264 0 01-1.972 1.808c-2.065.751-3.92-.357-4.843-2.892-.665-1.831.458-4.811 1.366-6.661zM29.03 30.163a6.528 6.528 0 00.836.053 6.832 6.832 0 004.406-1.647C37.457 25.9 37.6 21.549 34.62 18c-2.989-3.562-9.911-3.461-10.686-3.435a1.75 1.75 0 00-1.661 1.394c-.159.762-1.462 7.557 1.528 11.12a8.243 8.243 0 005.229 3.084zM25.487 18.1c2.06.136 5.2.653 6.452 2.15 1.734 2.068 1.766 4.23.083 5.642a3.252 3.252 0 01-2.552.8 4.837 4.837 0 01-2.988-1.865c-1.25-1.491-1.217-4.676-.995-6.727z"/>
      <path d="M13.6 43.051a8.87 8.87 0 004.425 1.284 6.992 6.992 0 001.544-.171 6.986 6.986 0 005.041-8.731 8.236 8.236 0 00-3.948-4.613c-4.026-2.325-10.493.138-11.217.427a1.75 1.75 0 00-1.084 1.877c.109.776 1.209 7.603 5.239 9.927zm5.312-9.2a4.843 4.843 0 012.356 2.619 3.492 3.492 0 01-2.472 4.281 4.84 4.84 0 01-3.446-.731c-1.683-.972-2.741-3.974-3.236-5.981 1.986-.575 5.111-1.16 6.795-.188zM9.472 61.553a10.423 10.423 0 001.806.163 7.633 7.633 0 004.185-1.159 6.987 6.987 0 001.75-9.928 8.24 8.24 0 00-5.288-2.985c-4.574-.8-9.812 3.719-10.394 4.237a1.751 1.751 0 00-.376 2.136c.369.683 3.739 6.729 8.317 7.536zm1.845-10.462a4.835 4.835 0 013.11 1.656 3.492 3.492 0 01-.858 4.867 4.837 4.837 0 01-3.489.492c-1.914-.337-3.934-2.8-5.086-4.513 1.671-1.22 4.417-2.844 6.323-2.502zM11.925 80.35a8.236 8.236 0 005.288-2.985 6.987 6.987 0 00-1.75-9.928 8.245 8.245 0 00-5.99-1c-4.579.807-7.949 6.851-8.318 7.536a1.751 1.751 0 00.376 2.136c.534.476 4.992 4.334 9.264 4.333a6.481 6.481 0 001.13-.092zM4.994 74.4c1.152-1.717 3.173-4.176 5.086-4.513a4.839 4.839 0 013.488.492 3.493 3.493 0 01.858 4.868 4.839 4.839 0 01-3.11 1.655c-1.905.343-4.652-1.28-6.322-2.502zM23.948 87.122c-2.079-3.6-6.335-4.5-10.351-2.179S8.47 94.1 8.358 94.87a1.752 1.752 0 001.084 1.878 20.854 20.854 0 006.943 1.416 8.544 8.544 0 004.274-.989c4.015-2.319 5.367-6.453 3.289-10.053zm-5.039 7.022c-1.683.971-4.812.386-6.8-.189.495-2.008 1.553-5.009 3.236-5.981 2.337-1.35 4.471-1.006 5.57.9s.331 3.92-2.006 5.27zM34.272 99.426a6.778 6.778 0 00-5.242-1.595 8.244 8.244 0 00-5.23 3.088c-2.99 3.561-1.687 10.357-1.528 11.12a1.751 1.751 0 001.661 1.394c.08 0 .226.006.426.006 1.739 0 7.58-.248 10.26-3.441 2.981-3.553 2.838-7.898-.347-10.572zm-2.333 8.322c-1.249 1.488-4.39 2.009-6.452 2.147-.222-2.056-.255-5.237.994-6.726a4.839 4.839 0 012.989-1.869 3.166 3.166 0 01.4-.025 3.318 3.318 0 012.153.829c1.682 1.415 1.65 3.576-.084 5.644zM48.182 107.457c-3.91-1.421-7.743.628-9.33 4.984s1.959 10.31 2.369 10.973a1.751 1.751 0 002.037.741c.74-.244 7.277-2.514 8.866-6.883a8.236 8.236 0 00.06-6.072 6.764 6.764 0 00-4.002-3.743zm.653 8.618c-.664 1.826-3.437 3.389-5.327 4.225-.912-1.857-2.031-4.836-1.366-6.661.923-2.536 2.778-3.646 4.843-2.893a3.264 3.264 0 011.972 1.808 4.842 4.842 0 01-.122 3.521zM64 110.246c-4.158 0-7.062 3.238-7.062 7.875s5.366 9.017 5.978 9.5a1.751 1.751 0 002.168 0c.612-.483 5.978-4.85 5.978-9.5s-2.904-7.875-7.062-7.875zm0 13.667c-1.492-1.433-3.562-3.849-3.562-5.792 0-2.7 1.365-4.375 3.562-4.375s3.562 1.676 3.562 4.375c0 1.944-2.071 4.36-3.562 5.792zM79.818 107.457a6.764 6.764 0 00-4 3.743 8.241 8.241 0 00.06 6.072c1.589 4.369 8.126 6.639 8.866 6.883a1.751 1.751 0 002.037-.741c.41-.663 3.958-6.6 2.369-10.973s-5.425-6.406-9.332-4.984zm4.674 12.843c-1.891-.836-4.663-2.4-5.327-4.225a4.842 4.842 0 01-.122-3.521 3.264 3.264 0 011.972-1.808 3.631 3.631 0 011.249-.232c1.544 0 2.863 1.114 3.594 3.125.665 1.826-.458 4.805-1.366 6.661zM98.97 97.831a6.768 6.768 0 00-5.242 1.594c-3.185 2.675-3.328 7.02-.348 10.575 2.68 3.194 8.522 3.441 10.26 3.441.2 0 .346 0 .426-.006a1.752 1.752 0 001.661-1.394c.159-.763 1.461-7.559-1.527-11.12a8.244 8.244 0 00-5.23-3.09zm3.544 12.064c-2.064-.138-5.2-.659-6.453-2.147-1.734-2.068-1.766-4.229-.083-5.642a3.272 3.272 0 012.552-.8 4.843 4.843 0 012.989 1.866c1.249 1.486 1.216 4.668.995 6.728zM114.4 84.943c-4.014-2.319-8.272-1.423-10.351 2.179s-.726 7.734 3.289 10.053a8.533 8.533 0 004.274.989 20.86 20.86 0 006.943-1.416 1.752 1.752 0 001.084-1.878c-.109-.77-1.209-7.602-5.239-9.927zm-5.312 9.2c-2.337-1.35-3.106-3.37-2.008-5.272s3.233-2.247 5.57-.9c1.683.972 2.741 3.974 3.236 5.981-1.986.578-5.112 1.162-6.795.192zM118.528 66.441a8.245 8.245 0 00-5.991 1 6.987 6.987 0 00-1.75 9.928 8.236 8.236 0 005.288 2.985 6.481 6.481 0 001.13.1c4.271 0 8.73-3.857 9.264-4.333a1.751 1.751 0 00.376-2.136c-.369-.693-3.739-6.737-8.317-7.544zM116.683 76.9a4.839 4.839 0 01-3.11-1.655 3.493 3.493 0 01.858-4.868 4.194 4.194 0 012.294-.6 6.953 6.953 0 011.2.11c1.914.337 3.934 2.8 5.086 4.513-1.675 1.222-4.419 2.845-6.328 2.5zM116.075 47.644a8.24 8.24 0 00-5.288 2.985 6.987 6.987 0 001.75 9.928 7.633 7.633 0 004.185 1.159 10.4 10.4 0 001.805-.163c4.579-.807 7.949-6.85 8.318-7.536a1.751 1.751 0 00-.376-2.136c-.582-.519-5.817-5.043-10.394-4.237zm6.931 5.949c-1.152 1.717-3.173 4.176-5.086 4.513a4.834 4.834 0 01-3.488-.492 3.492 3.492 0 01-.858-4.867 4.835 4.835 0 013.11-1.656 3.1 3.1 0 01.543-.045c1.861 0 4.262 1.438 5.779 2.547zM103.393 35.433a6.986 6.986 0 005.041 8.731 6.985 6.985 0 001.544.171 8.872 8.872 0 004.425-1.284c4.027-2.324 5.127-9.156 5.239-9.927a1.75 1.75 0 00-1.084-1.877c-.725-.289-7.191-2.753-11.217-.427a8.236 8.236 0 00-3.948 4.613zm3.342 1.037a4.843 4.843 0 012.356-2.619 4.992 4.992 0 012.46-.519 16.583 16.583 0 014.338.707c-.495 2.008-1.553 5.009-3.236 5.981a4.841 4.841 0 01-3.447.731 3.492 3.492 0 01-2.471-4.281zM93.728 28.568a6.828 6.828 0 004.406 1.648 6.528 6.528 0 00.836-.053 8.243 8.243 0 005.229-3.087c2.988-3.563 1.686-10.358 1.527-11.12a1.75 1.75 0 00-1.661-1.394c-.777-.021-7.7-.127-10.686 3.435s-2.836 7.903.349 10.571zm2.333-8.321c1.25-1.49 4.392-2.01 6.455-2.148.224 2.052.258 5.23-1 6.727a4.841 4.841 0 01-2.989 1.865 3.263 3.263 0 01-2.552-.8c-1.675-1.415-1.648-3.577.086-5.644zM79.818 20.538a7.2 7.2 0 002.459.447c2.976 0 5.621-2 6.871-5.432 1.589-4.369-1.959-10.309-2.369-10.972a1.748 1.748 0 00-2.037-.741c-.74.244-7.277 2.514-8.866 6.882a8.241 8.241 0 00-.06 6.072 6.768 6.768 0 004.002 3.744zm-.653-8.619c.664-1.826 3.435-3.389 5.327-4.219.912 1.856 2.031 4.835 1.366 6.661-.922 2.536-2.776 3.645-4.843 2.892a3.264 3.264 0 01-1.972-1.808 4.842 4.842 0 01.122-3.526z"/>
    </svg>
  )
}

function FallIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128" fill="currentColor" shapeRendering="geometricPrecision">
      <path d="M45.378 46.171A15.3 15.3 0 0032.416 53.3a1.75 1.75 0 002.953 1.879 11.815 11.815 0 0110.009-5.511 1.75 1.75 0 000-3.5z"/>
      <path d="M127.687 72.69a19.163 19.163 0 00-12.388-7.9l-4.423-.767a10.872 10.872 0 00.3-2.56 11.006 11.006 0 00-7.678-10.5 15.623 15.623 0 00-30.4-3.711 12 12 0 00-5.421.493 12.221 12.221 0 00-2.64 1.236 23.331 23.331 0 00-42.955 10.926 14.987 14.987 0 00-13.27 14.868 14.777 14.777 0 001.982 7.425L.848 88.188a1.749 1.749 0 00.9 3.248h94.877a1.75 1.75 0 00.85-3.28l-9.1-5.048a9.723 9.723 0 00-.611-7.669h38.486a1.75 1.75 0 001.437-2.749zM89.866 87.936H8.05l6.114-3.681a1.751 1.751 0 00.491-2.558 11.351 11.351 0 01-2.343-6.922A11.478 11.478 0 0123.74 63.311a1.766 1.766 0 001.788-1.749v-.08A19.824 19.824 0 0162.967 52.4a19.734 19.734 0 012.2 7.949 1.75 1.75 0 001.444 1.622 10.142 10.142 0 018.383 10.089l-.012.22a1.75 1.75 0 002.274 1.725 6.259 6.259 0 017.352 9.009 1.751 1.751 0 00.68 2.381zm-5.208-16a9.694 9.694 0 00-5.522-1.721c-.249 0-.5.009-.743.028a13.618 13.618 0 00-9.845-11.414 23.189 23.189 0 00-1.856-6.756 8.791 8.791 0 012.074-1 8.613 8.613 0 015.113-.088 1.749 1.749 0 002.192-1.32 12.123 12.123 0 0123.98 2.478c0 .031-.008.133-.009.164a1.75 1.75 0 001.442 1.756 7.5 7.5 0 015.478 10.59 1.749 1.749 0 001.285 2.467l6.454 1.119a15.636 15.636 0 017.666 3.7z"/>
    </svg>
  )
}

function TuesdayIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128" fill="currentColor" shapeRendering="geometricPrecision">
      <path d="M64 10a43.5 43.5 0 1043.5 43.5A43.549 43.549 0 0064 10zm0 83.5a40 40 0 1140-40 40.044 40.044 0 01-40 40z"/>
      <path d="M64 23.751A29.75 29.75 0 1093.75 53.5 29.784 29.784 0 0064 23.751zm0 56A26.25 26.25 0 1190.25 53.5 26.279 26.279 0 0164 79.751z"/>
      <path d="M69.571 34.134a6.06 6.06 0 00-6.053 6.054 1.75 1.75 0 003.5 0 2.556 2.556 0 012.553-2.554 1.75 1.75 0 000-3.5zM79.766 41.009a6.061 6.061 0 00-6.054 6.055 1.75 1.75 0 103.5 0 2.557 2.557 0 012.554-2.555 1.75 1.75 0 000-3.5zM66.474 47.447a6.062 6.062 0 00-6.055 6.053 1.75 1.75 0 003.5 0 2.558 2.558 0 012.555-2.555 1.75 1.75 0 000-3.5z"/>
      <path d="M64 0a53.5 53.5 0 00-17.3 104.124l15.861 23.113a1.75 1.75 0 002.886 0L81.3 104.124A53.5 53.5 0 0064 0zm15.645 100.989a1.757 1.757 0 00-.9.672L64 123.154l-14.749-21.493a1.755 1.755 0 00-.9-.672 50 50 0 1131.291 0z"/>
    </svg>
  )
}

function JuinorIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128" fill="currentColor" shapeRendering="geometricPrecision">
      <path d="M126.25 58.906a1.749 1.749 0 001.75-1.75V46.844a1.749 1.749 0 00-1.606-1.744l-6.458-.534-5.855-3.082a22.5 22.5 0 00-10.435-2.578H84.664a22.433 22.433 0 00-11.207 3 18.963 18.963 0 01-18.914 0 22.424 22.424 0 00-11.207-3.005H24.353a22.494 22.494 0 00-10.435 2.579l-5.855 3.086-6.457.534A1.749 1.749 0 000 46.844v10.312a1.749 1.749 0 001.75 1.75h5.7l4.14 8.921-10.548 4.667A1.748 1.748 0 000 74.094v7.8a7.2 7.2 0 0012.55 4.811l5.2-5.792a13.8 13.8 0 0011.78 6.678h17.19a13.753 13.753 0 0011.3-5.913 1.731 1.731 0 00.211-.41L62.81 68.43a1.263 1.263 0 012.379 0l4.579 12.841a1.765 1.765 0 00.21.41 13.755 13.755 0 0011.3 5.913h17.19a13.8 13.8 0 0011.781-6.678l5.2 5.792A7.2 7.2 0 00128 81.9v-7.8a1.748 1.748 0 00-1.042-1.6l-10.543-4.667 4.14-8.921zM9.946 84.368A3.7 3.7 0 013.5 81.9v-6.667L13.059 71l.026.057 3 6.474zM124.5 75.233V81.9a3.7 3.7 0 01-6.446 2.471l-6.143-6.835L114.942 71zm-6.649-18.814l-5.358 11.545-4.24 9.138-.486 1.048a10.286 10.286 0 01-9.3 5.936H81.275a10.253 10.253 0 01-8.292-4.226l-4.5-12.614a4.763 4.763 0 00-8.972 0l-4.5 12.614a10.253 10.253 0 01-8.292 4.226H29.535a10.282 10.282 0 01-9.3-5.936l-3.623-7.807-1.1-2.382-5.36-11.549a1.749 1.749 0 00-1.587-1.013H3.5v-6.944l5.206-.43a1.742 1.742 0 00.672-.2l6.17-3.248a18.987 18.987 0 018.805-2.176h18.983a18.936 18.936 0 019.457 2.535 22.467 22.467 0 0022.414 0 18.936 18.936 0 019.457-2.535h18.982a18.981 18.981 0 018.8 2.176l6.171 3.248a1.742 1.742 0 00.672.2l5.206.43v6.951h-5.063a1.749 1.749 0 00-1.581 1.013z"/>
      <path d="M113.849 50.4l-3.493-1.838a14.466 14.466 0 00-6.709-1.658H84.664a14.247 14.247 0 00-7.151 1.9c-.63.367-1.286.712-1.951 1.026a8.8 8.8 0 00-4.624 10.9l5.91 16.574a1.752 1.752 0 00.431.67 5.721 5.721 0 004 1.616h17.185a5.771 5.771 0 005.217-3.33l10.94-23.576a1.75 1.75 0 00-.772-2.284zm-13.344 24.391a2.256 2.256 0 01-2.041 1.3H81.275a2.233 2.233 0 01-1.289-.406l-5.751-16.13A5.309 5.309 0 0177.06 53c.752-.357 1.5-.748 2.211-1.163a10.735 10.735 0 015.393-1.426h18.983a10.947 10.947 0 015.079 1.255l2.019 1.063zM52.436 49.831c-.663-.314-1.319-.659-1.95-1.026a14.241 14.241 0 00-7.15-1.9H24.352a14.465 14.465 0 00-6.708 1.658L14.151 50.4a1.75 1.75 0 00-.772 2.285l10.94 23.576a5.771 5.771 0 005.217 3.33h17.189a5.721 5.721 0 004-1.616 1.764 1.764 0 00.431-.67l5.909-16.574a8.8 8.8 0 00-4.629-10.9zm1.329 9.727l-5.751 16.13a2.233 2.233 0 01-1.289.406H29.536a2.256 2.256 0 01-2.041-1.3l-10.24-22.07 2.019-1.063a10.934 10.934 0 015.078-1.256h18.984a10.722 10.722 0 015.391 1.426c.716.415 1.46.806 2.212 1.162a5.31 5.31 0 012.826 6.565z"/>
    </svg>
  )
}

function JuinorFreeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128" fill="currentColor" shapeRendering="geometricPrecision">
      <path d="M38.908 112.751l-11.414-6.59a1.75 1.75 0 10-1.75 3.031l11.414 6.59a1.75 1.75 0 101.75-3.031zM33.122 116.468l-5.955-3.438a1.75 1.75 0 10-1.75 3.031l5.955 3.438a1.73 1.73 0 00.873.235 1.75 1.75 0 00.877-3.266z"/>
      <path d="M112.061 105.039a12.748 12.748 0 00-17.393-4.661l-9.068 5.239-15.311-26.44 9.641-16.653a4.689 4.689 0 00.746.066 4.811 4.811 0 004.17-2.4l3.816-6.611L96.7 39.652l16.286-28.208a5.831 5.831 0 00-2.132-7.957L106.169.781a5.834 5.834 0 00-7.957 2.132L75.3 42.591l-1.415 2.451-3.815 6.614a4.776 4.776 0 00.433 5.423L64 68.313l-6.5-11.234a4.775 4.775 0 00.433-5.422l-3.818-6.612-5.542-9.595L29.788 2.913A5.833 5.833 0 0021.831.781l-4.687 2.706a5.831 5.831 0 00-2.132 7.957L31.3 39.652l8.037 13.921 3.816 6.611a4.755 4.755 0 004.916 2.336l9.641 16.654-15.305 26.443-9.073-5.239A12.733 12.733 0 1020.6 122.433l6.4 3.693a13.984 13.984 0 0019.09-5.115L64 90.043l17.915 30.968a13.984 13.984 0 0019.09 5.115l6.4-3.693a12.731 12.731 0 004.661-17.394zM81.991 38.01l2.092-3.624 8.717 5.031-6.288 10.89-8.712-5.03zm19.252-33.347a2.328 2.328 0 013.176-.851l4.687 2.706a2.328 2.328 0 01.851 3.176L94.546 36.386l-8.713-5.031zM73.1 53.407l2.943-5.1 8.713 5.031-2.944 5.1a1.307 1.307 0 01-1.784.478l-6.451-3.725a1.306 1.306 0 01-.477-1.784zm-7.08 18.4l7.347-12.691 3.365 1.943-8.465 14.625zM35.2 39.417l8.713-5.031 6.288 10.891-8.713 5.03zm-16.31-32.9l4.687-2.706a2.326 2.326 0 013.176.851l15.41 26.692-8.713 5.031L18.043 9.694a2.328 2.328 0 01.851-3.176zm27.291 51.92l-2.943-5.1 8.713-5.031 2.943 5.1a1.306 1.306 0 01-.477 1.784l-6.447 3.726a1.308 1.308 0 01-1.785-.478zm15.792 28.11l-18.919 32.714a10.488 10.488 0 01-14.309 3.839l-6.395-3.7a9.233 9.233 0 019.232-15.992l10.587 6.112a1.75 1.75 0 002.39-.639l15.174-26.21zm47.98 27.253a9.178 9.178 0 01-4.3 5.607l-6.4 3.693a10.487 10.487 0 01-14.309-3.834l-33.68-58.2 3.365-1.943 28.81 49.768a1.75 1.75 0 002.39.639l10.587-6.112a9.233 9.233 0 0113.537 10.382z"/>
      <path d="M102.9 106.8a1.75 1.75 0 00-2.39-.641l-11.414 6.59a1.75 1.75 0 101.75 3.031l11.414-6.59a1.748 1.748 0 00.64-2.39zM100.833 113.03l-5.955 3.438a1.75 1.75 0 00.877 3.266 1.733 1.733 0 00.873-.235l5.955-3.438a1.75 1.75 0 10-1.75-3.031z"/>
    </svg>
  )
}

function StaffIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128" fill="currentColor" shapeRendering="geometricPrecision">
      <path d="M17.75 100.69a9.75 9.75 0 109.75 9.75 9.761 9.761 0 00-9.75-9.75zm0 16a6.25 6.25 0 116.25-6.25 6.257 6.257 0 01-6.25 6.25z"/>
      <path d="M115.125 102.44a12.809 12.809 0 00-4.991 1.007L95.549 93.016a1.752 1.752 0 00-1.018-.326H78.147a3.807 3.807 0 00.04-.4v-5.32a4.005 4.005 0 003.77-3.987v-4.97L99.5 63.585a13.918 13.918 0 00-8.843-24.666h-8.7V35.91a4 4 0 00-3.77-3.986v-2.846a4.015 4.015 0 00-4.011-4.011h-2.538l.008-7.5h6.184a8.877 8.877 0 000-17.754h-6.794a9.694 9.694 0 00-9.683 9.683l-.011 15.574h-2.983l-.011-15.577a9.693 9.693 0 00-9.683-9.682h-6.794a8.877 8.877 0 000 17.754h6.185l.008 7.5h-1.026a4.016 4.016 0 00-4.012 4.011v2.846a4 4 0 00-3.769 3.986v47.074a4.005 4.005 0 003.769 3.987v5.32a3.808 3.808 0 00.041.4H24.5V12.565A12.764 12.764 0 0011.75-.185h-10A1.749 1.749 0 000 1.565v10a1.75 1.75 0 001.75 1.75H11v80.716a17.8 17.8 0 1023.964 12.159h55.8l11.531 8.246c-.019.292-.044.582-.044.879a12.875 12.875 0 1012.875-12.875zM81.957 48.449h8.7a4.388 4.388 0 012.787 7.776l-11.487 9.447zm0 21.755l13.707-11.276a7.887 7.887 0 00-5.01-13.979h-8.7v-2.53h8.7a10.418 10.418 0 016.619 18.463L81.957 73.48zM64.853 9.493a6.19 6.19 0 016.183-6.183h6.794a5.377 5.377 0 010 10.754H69.9a1.75 1.75 0 00-1.75 1.748l-.01 9.254h-3.3zm-22.982 4.572a5.377 5.377 0 010-10.754h6.794a6.19 6.19 0 016.183 6.182l.01 15.574h-3.294l-.01-9.254a1.75 1.75 0 00-1.75-1.748zm4.655 15.013a.513.513 0 01.512-.511h27.138a.512.512 0 01.511.511V31.9H46.526zm-3.769 53.9V35.91a.512.512 0 01.512-.511h34.676a.513.513 0 01.512.511v47.072a.512.512 0 01-.512.511H43.269a.511.511 0 01-.512-.511zm31.93 4.011v5.3a.4.4 0 01-.4.4h-27.36a.4.4 0 01-.4-.4v-5.3zM3.5 9.815v-6.5h8.25a9.26 9.26 0 019.25 9.25V92.69h-3.25a17.762 17.762 0 00-3.25.31V12.565a2.752 2.752 0 00-2.75-2.75zM17.75 124.69A14.25 14.25 0 1132 110.44a14.267 14.267 0 01-14.25 14.25zm85.363-13.972l-10.771-7.7a1.752 1.752 0 00-1.018-.326h-57.63a17.831 17.831 0 00-5.406-6.5H93.97l12.919 9.239a12.921 12.921 0 00-3.776 5.287zm12.012 13.972a9.375 9.375 0 119.375-9.375 9.387 9.387 0 01-9.375 9.375z"/>
      <path d="M49.007 78.994h23.2a1.749 1.749 0 001.75-1.75V41.649a1.75 1.75 0 00-1.75-1.75h-23.2a1.75 1.75 0 00-1.75 1.75v35.6a1.749 1.749 0 001.75 1.745zm1.75-35.594h19.7v32.1h-19.7zM50.725 8.706a1.75 1.75 0 00-1.75-1.75h-4.462a1.75 1.75 0 000 3.5h4.462a1.75 1.75 0 001.75-1.75zM70.727 10.456h4.461a1.75 1.75 0 100-3.5h-4.461a1.75 1.75 0 000 3.5z"/>
    </svg>
  )
}

function BallIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128" fill="currentColor" shapeRendering="geometricPrecision">
      <path d="M123.065 18.109h-1.235V1.749A1.75 1.75 0 00120.08 0h-16.322a1.75 1.75 0 00-1.75 1.75v16.36h-2.591a4.951 4.951 0 00-4.836 3.952l-1.261 6.207-2.99 14.715H39.864a14.505 14.505 0 00-14.489 14.49V60.4A34.4 34.4 0 1068.5 98.2l45.976-7.392A16.014 16.014 0 00128 74.935V23.044a4.941 4.941 0 00-4.935-4.935zM105.508 3.5h12.822v14.61h-12.822zm-7.5 19.26a1.44 1.44 0 011.406-1.15h23.648a1.437 1.437 0 011.435 1.435v3.824H97.176zM34.406 124.5a30.907 30.907 0 010-61.813c.364 0 .725.015 1.086.028a30.9 30.9 0 01-1.09 61.785zM66.63 81.546h11.218a1.75 1.75 0 000-3.5H65.083a34.461 34.461 0 00-3.408-5.4h46.2a1.75 1.75 0 000-3.5H59.25a1.743 1.743 0 00-.557.1 34.6 34.6 0 00-7.2-5.5h56.379a1.75 1.75 0 000-3.5H43.5a1.733 1.733 0 00-.4.051 34.292 34.292 0 00-5.851-.988v-1.835a2.622 2.622 0 012.619-2.62h76.262v20.081a4.193 4.193 0 01-3.543 4.158l-44.57 7.166a34.084 34.084 0 00-1.387-4.713zm57.87-6.611a12.527 12.527 0 01-10.585 12.421l-45.128 7.255c.01-.338.026-.675.026-1.016a34.589 34.589 0 00-.226-3.883l44.556-7.163a7.678 7.678 0 006.487-7.614V53.1a1.75 1.75 0 00-1.75-1.75H39.864a6.126 6.126 0 00-6.119 6.12v1.732a34.42 34.42 0 00-4.87.434v-2.162a11 11 0 0110.989-10.99h51.9a1.75 1.75 0 001.715-1.4l2.99-14.715H124.5z"/>
      <path d="M39.063 72.11a1.95 1.95 0 012.757 2.758 1.75 1.75 0 102.48 2.474 5.45 5.45 0 10-7.707-7.707 1.75 1.75 0 002.475 2.475zM55.224 80.123a1.953 1.953 0 010 2.758 1.75 1.75 0 102.476 2.474 5.45 5.45 0 10-7.707-7.707 1.75 1.75 0 102.474 2.475 1.953 1.953 0 012.757 0zM38.317 86.1a1.75 1.75 0 002.475 2.475 1.95 1.95 0 112.758 2.758 1.75 1.75 0 002.474 2.475 5.45 5.45 0 10-7.707-7.708zM61.325 91.692a5.451 5.451 0 00-7.708 0 1.75 1.75 0 002.475 2.475 2 2 0 012.758 0 1.954 1.954 0 010 2.757 1.75 1.75 0 102.474 2.476 5.456 5.456 0 00.001-7.708z"/>
    </svg>
  )
}

function CoachingIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128" fill="currentColor" shapeRendering="geometricPrecision">
      <defs/>
      <circle cx="24.682" cy="103.649" r="3.562"/>
      <circle cx="103.318" cy="103.649" r="3.562"/>
      <path d="M120.25 86.087h-1V78.1a15.767 15.767 0 00-15.75-15.75h-6.033l-8.836-36.062h13.619a6.75 6.75 0 000-13.5H6.75a6.75 6.75 0 000 13.5h2.19v59.8H7.75a7.75 7.75 0 000 15.5h5.565a11.563 11.563 0 1022.735 0h55.9a11.563 11.563 0 1022.735 0h5.565a7.75 7.75 0 000-15.5zM93.864 62.354H89.23l-8.836-36.066h4.633zm-19.879 0l-8.106-8.265 4.4-3.865a1.75 1.75 0 10-2.31-2.63l-5.558 4.882a1.727 1.727 0 00-.325.246 1.68 1.68 0 00-.123.147l-5.525 4.853a1.75 1.75 0 102.309 2.63l4.5-3.95 8.253 8.417v9.4H45.085l-4.243-13.8a9.7 9.7 0 00-9.319-6.884H20.44V26.288h56.351l8.836 36.066zM3.5 19.538a3.254 3.254 0 013.25-3.25h95.5a3.25 3.25 0 010 6.5H6.75a3.254 3.254 0 01-3.25-3.25zm13.44 6.75v27.246h-4.5V26.288zm-4.5 30.746h19.083a6.219 6.219 0 015.977 4.413l4.62 15.037a1.749 1.749 0 001.672 1.236H73.25A1.751 1.751 0 0075 75.97V65.854h28.5A12.263 12.263 0 01115.75 78.1v7.983H12.44zm12.242 54.678a8.063 8.063 0 118.063-8.063 8.071 8.071 0 01-8.063 8.063zm78.636 0a8.063 8.063 0 118.062-8.063 8.072 8.072 0 01-8.062 8.063zm16.932-13.625h-6.793a11.567 11.567 0 00-20.278 0H34.821a11.567 11.567 0 00-20.279 0H7.75a4.25 4.25 0 010-8.5h112.5a4.25 4.25 0 010 8.5z"/>
    </svg>
  )
}