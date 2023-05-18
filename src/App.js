import './App.scss'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Home from './pages/home/Home'
import Details from './pages/details/Details'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route exact path="/:id" element={<Details/>}/>
      </Routes>
    </Router>
  )
}

export default App