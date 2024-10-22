import './App.css'
import ServiceInstallation from './pages/ServiceInstallation'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import { ServicePage } from './pages/ServicePage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ServiceInstallation/>} />
        <Route path='/ser' element={<ServicePage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
