import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import { useAppContext } from '../store/Store'
import styles from './View.module.css'
export default function View () {
  // const [item, setItem] = useState({})
  const [item, setItem] = useState([])
  const params = useParams()
  const store = useAppContext()
  useEffect(() => {
    const book = store.getItem(params.bookId)
    setItem(book)
  }, [])

  return (
    <Layout>
      {
        item && (
          <section className={styles.detailContainer}>
            <div className={styles.detailArea}>

              <div className={styles.area}>
                <img src={item.cover} />
              </div>

              <div className={styles.items}>
                <article>
                  <h3>Title</h3>
                  <p>{item.title}</p>
                </article>
                <article>
                  <h3>Author</h3>
                  <p>{item.author}</p>
                </article>
                <article>
                  <h3>Intro</h3>
                  <p>{item.intro}</p>
                </article>
                <article>
                  <h3>Leido</h3>
                  <p>{item.completed ? 'Completado' : 'No terminado'}</p>
                </article>
                <article>
                  <h3>Review</h3>
                  <p>{item.review}</p>
                </article>
              </div>
            </div>

          </section>
        )
      }

    </Layout>
  )
}
