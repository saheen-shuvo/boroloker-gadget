import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/Routes'
import { CartProvider } from './routes/cartContext'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider><RouterProvider router={routes}></RouterProvider></CartProvider>
  </StrictMode>,
)
