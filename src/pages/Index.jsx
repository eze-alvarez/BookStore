import Book from '../components/Book'
import { useAppContext } from '../store/Store'
import styles from './Index.module.css'
// import { data } from '../api/api'

export default function Index () {
  const store = useAppContext()

  return (
    <div className={styles.books}>
      <div className={styles.title}>
        <h2>Libros</h2>
      </div>
      <div className={styles.booksContainer}>
        {store.items.map((item) => (
          // {data.map((item) => (
          <Book key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
