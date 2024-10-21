import './App.css'
import ServiceInstallation from './pages/ServiceInstallation'
import { BrowserRouter, Route,Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ServiceInstallation/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
