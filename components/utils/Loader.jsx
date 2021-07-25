import Spinner from './Spinner'
import Box, { BoxResponsiveGrid, BoxGrid, BoxResponsiveFlex, BoxFlex } from './Box'

import styles from '../../styles/components/utils/Loader.module.scss'

export default function Loader() {
  return (
    <div className={styles.Loader}>
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Spinner />
      </div>
    </div>
  )
}