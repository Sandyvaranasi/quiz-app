import Homepage from '../components/Homepage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Quiz from '../components/Quiz'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Homepage/>}/>
        <Route exact path='/quiz' element={<Quiz/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
