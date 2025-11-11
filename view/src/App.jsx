import './assets/styles/App.css'
import { BrowserRouter,Route } from 'react-router'
import AppRouter from './routes'

function App() {
 

  return (
    <BrowserRouter>
    <AppRouter/>
    </BrowserRouter>
  )
}

export default App
