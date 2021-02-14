import Image from 'next/image'
import { useAuth } from '../lib/auth'

import styles from '../styles/components/MemberNav.module.scss'

export default function MemberNav() {
  const auth = useAuth()
  return (
    <div className={styles.MemberNav}>
      <Avatar user={auth.user} />

      
    </div>
  );
}

function Avatar({ user }) {
  return (
    <div className={styles.Avatar}>
      {user ? (
          <div>
            <div className={styles.AvatarActive}>
              <Image 
                src={user.photoUrl}
                width={30}
                height={30}
                layout="responsive"
              />
            </div>
          </div>
        ) : (
          <div className={styles.AvatarInactive}>
            <div className={styles.AvatarInactiveContent}>
              <svg
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                shapeRendering="geometricPrecision"
              >
                <path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2' />
                <circle cx='12' cy='7' r='4' />
              </svg>
            </div>
          </div>
        )}
    </div>
  )
}