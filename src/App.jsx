import './App.css'
import {RouterProvider} from 'react-router-dom'
import { router } from './Routes/Routes/Routes';

export default function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    
    </div>
  )
}
