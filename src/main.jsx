import React from 'react'
import ReactDOM from 'react-dom/client'
import routes from './routes/Routes'
import './index.css'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
    
  </React.StrictMode>,
)
