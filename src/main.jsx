import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import Details from './components/Details.jsx'
import Contact from './components/Contact.jsx'
import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />
  },
  {
    path: '/about',
    element: <><Navbar/><About /></>
  },
  {
    path: '/details',
    element: <><Navbar/><Details /></>
  },
  {
    path: '/contact',
    element: <><Navbar/><Contact /></>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
