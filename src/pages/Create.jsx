import { useState } from 'react'
import { useAppContext } from '../store/Store'
import { useRouteMatch, Link } from 'react-router-dom'
import styles from './Create.module.css'
// import { useNavigate } from 'react-router-dom'

export default function Create () {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [cover, setCover] = useState('')
  const [intro, setIntro] = useState('')
  const [completed, setCompleted] = useState(false)
  const [review, setReview] = useState('')

  const store = useAppContext()
  // const navigate = useNavigate()
  const match = useRouteMatch()
  const url = match.url.slice(0, -1)
  console.log(url)

  function handleChange (e) {
    switch (e.target.name) {
      case 'title':
        setTitle(e.target.value)
        break
      case 'author':
        setAuthor(e.target.value)
        break
      case 'intro':
        setIntro(e.target.value)
        break
      case 'completed':
        setCompleted(e.target.checked)
        break
      case 'review':
        setReview(e.target.value)
        break
    }
  }

  function handleSubmit (e) {
    e.preventDefault()

    const newBook = {
      id: `${title}-${author}`,
      title,
      author,
      cover,
      intro,
      completed,
      review
    }

    store.createItem(newBook)
    // navigate('/')
  }

  function handleOnChangeFile (e) {
    const element = e.target
    const file = element.files[0]
    const reader = new FileReader()
    reader.onloadend = function () {
      // console.log('RESULT', reader.result)
      setCover(reader.result.toString())
    }
    reader.readAsDataURL(file)
  }

  return (

    <div className={styles.createContainer}>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <section>
          <div>
            <h2 className={styles.title}>Title</h2>
            <input
              minLength={3}
              maxLength={50}
              type='text'
              name='title'
              onChange={handleChange}
              value={title}
              required
            />
          </div>

          <div>
            <h2>Author</h2>
            <input
              maxLength={30}
              type='text'
              name='author'
              onChange={handleChange}
              value={author}
              required
            />
          </div>

        </section>

        <section>
          <div>
            <h2>Cover</h2>
            <input
              type='file' name='cover' onChange={handleOnChangeFile}
              style={{
                fontSize: '1.5rem',
                width: '100%'
              }}
              required
            />
            <div>{cover ? <img src={cover} className={styles.coverImg} /> : ''}</div>
          </div>
        </section>

        <section>
          <div>
            <h2>Intro</h2>
            <input
              maxLength={100}
              type='text'
              name='intro'
              onChange={handleChange}
              value={intro}
              required
            />
          </div>

          <div className={styles.checkSpace}>
            <input
              type='checkbox'
              name='completed'
              onChange={handleChange}
              value={completed}
            />
            <h2>Completed</h2>
          </div>

          <div>
            <h2>Review</h2>
            <textarea
              className={styles.review}
              maxLength={250}
              type='text'
              name='review'
              onChange={handleChange}
              value={review}
              required
            />
          </div>

          <input
            className={styles.register}
            type='submit'
            value='Register book'
            required
          />

        </section>

      </form>
    </div>

  )
}
