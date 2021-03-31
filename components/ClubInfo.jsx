import Link from 'next/link'

import styles from '../styles/components/ClubInfo.module.scss'

export default function ClubInfo() {
  return (
    <div className={styles.ClubInfo}>
      <div className={styles.Hours}>
        <h3>Hours</h3>
        <ul>
          <li><strong>Week:</strong> 7:30am - Twilight</li>
          <li><strong>Weekend:</strong> 7:00am - Twilight</li>
        </ul>
      </div>

      <div className={styles.ContactInfo}>
        <div>
          <h3>Email</h3>
          <ul>
            <li>
              <Link href="mailto:info@springlakesgolf.com">
                <a>info@springlakesgolf.com</a>
              </Link>
            </li>
          </ul>

          <br/><br/>

          <h3>Phone</h3>
          <ul>
            <li>(905)640-3633</li>
          </ul>
        </div>
      </div>

      <div className={styles.Extentions}>
        <div>
          <h3>Extentions</h3>
          <ul>
            <li><strong>Proshop:</strong></li>
            <li><strong>Restaurant:</strong></li>
            <li><strong>Simulators:</strong></li>
            <li><strong>General Inquiries:</strong></li>
          </ul>
        </div>
      </div>
    </div>
  )
}