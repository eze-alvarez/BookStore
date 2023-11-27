import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

export default function NavBar () {
  // const linkStyle = {
  //   padding: '10px',
  //   display: 'block',
  //   fontSize: '18px'
  // }

  return (
    <div className={styles.navContainer}>
      <Link to='/' className={styles.linkStyle}>
        Home
      </Link>

      <Link to='/create' className={styles.linkStyle}>
        Create
      </Link>
    </div>
  )
}
