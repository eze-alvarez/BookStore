import { Link } from 'react-router-dom'
import style from './NavBar.module.css'

export default function NavBar () {
  // const linkStyle = {
  //   padding: '10px',
  //   display: 'block',
  //   fontSize: '18px'
  // }

  return (
    <div className={style.navContainer}>
      <Link to='/' className={style.linkStyle}>
        Home
      </Link>

      <Link to='/create' className={style.linkStyle}>
        Create
      </Link>
    </div>
  )
}
