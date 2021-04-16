import useSWR from 'swr'

import fetcher from '../../lib/fetcher'

import styles from '../../styles/components/ui/AccountBadge.module.scss'

export default function AccountBadge({ userID }) {
  const { data } = useSWR(`/api/user/${userID}`, fetcher)

  if (!data) {
    return null
  }

  // console.log(data)

  const type = data.role

  let {
    admin,
    staff,
    member,
    user
  } = false

  if (type == 'admin') { admin = true }
  if (type == 'staff') { staff = true }
  if (type == 'member') { member = true }
  if (type == 'user') { user = true }

  return (
    <div className={`${styles.AccountBadge} ${admin ? styles.Admin : ''} ${staff ? styles.Staff : ''} ${member ? styles.Member : ''} ${user ? styles.User : ''}`}>
      <span>{type}</span>
    </div>
  )
}