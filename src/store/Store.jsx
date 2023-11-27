import { createContext, useContext, useState } from 'react'
import { recover, save } from '../logic/storage'
// const infoBook = recover('book', [])
// console.log({ infoBook })
const AppContext = createContext({
  items: [],
  createItem: (item) => {},
  getItem: (id) => {},
  updateItem: (item) => {},
  deleteItem: (id) => {}
})

export default function Store ({ children }) {
  const [items, setItems] = useState(() => recover('books', []))

  function createItem (item) {
    const temp = [...items]

    temp.unshift(item)

    save('books', temp)
    setItems([...temp])
  }

  function getItem (id) {
    const item = items.find((item) => item.id === id)

    return item
  }

  function updateItem (item) {
    const index = items.findIndex((i) => i.id === item.id)

    const temp = [...items]

    temp[index] = { ...item }

    return true
  }

  function deleteItem (id) {
    const item = items.filter((item) => item.id !== id)
    save('books', item)
    setItems(item)
  }

  return (
    <AppContext.Provider
      value={{
        items,
        createItem,
        getItem,
        updateItem,
        deleteItem
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext () {
  return useContext(AppContext)
}
