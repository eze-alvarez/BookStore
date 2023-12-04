import Index from './pages/Index'
import View from './pages/View'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Store from './store/Store'
import Create from './pages/Create'
import NavBar from './components/Navbar'
import Error from './pages/Error'

function App () {
  return (
    <Store>
      <div className='App'>
        <NavBar />
        {/* <Routes>
          <Route path='/' element={<Index />} />
          <Route path='create' element={<Create />} />
          <Route path='view/:bookId' element={<View />} />
        </Routes> */}
        <Switch>

          <Route exact path='/'>
            <Index />
          </Route>

          <Route path='/create'>
            <Create />
          </Route>

          <Route path='/view/:bookId'>
            <View />
          </Route>

          <Route path='/'>
            <Error />
          </Route>

        </Switch>
      </div>
    </Store>
  )
}

export default App
