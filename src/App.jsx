
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { bookRouter } from './routes.jsx'


const App = () =>{
  return(
    <RouterProvider router={bookRouter}/>
  )
}

export default App
