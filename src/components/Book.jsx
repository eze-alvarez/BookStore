import { Link } from 'react-router-dom'
import styles from './Book.module.css'
import botonX from '../assets/eliminar.png'
import { useAppContext } from '../store/Store'
export default function Book ({ item }) {
  const store = useAppContext()
  const handleClick = () => {
    store.deleteItem(item.id)
  }

  return (
    <div className={styles.bookContainer}>
      <div
        className={styles.eliminar}
        onClick={handleClick}
        // onClick={() => console.log(1243)}
      >
        <img src={botonX} alt='boton para eliminar' />
      </div>
      <Link to={`/view/${item.id}`} className={styles.bookInfo}>
        <div className={styles.coverImg}>
          <img src={item.cover} />
        </div>
        <div className={styles.title}>
          <h5>{item.title}</h5>
        </div>
      </Link>
    </div>
  )
}
