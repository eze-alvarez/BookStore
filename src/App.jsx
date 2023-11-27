import Index from './pages/Index'
import View from './pages/View'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Store from './store/Store'
import Create from './pages/Create'

function App () {
  return (
    <Store>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='create' element={<Create />} />
          <Route path='view/:bookId' element={<View />} />
        </Routes>
      </div>
    </Store>
  )
}

export default App
