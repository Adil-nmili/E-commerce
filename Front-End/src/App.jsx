import './App.css'
import { RouterProvider } from 'react-router-dom'
import { Router } from './router/Router'
import { AuthProvider } from './context/AuthContext'


export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={Router} />
    </AuthProvider>
  )
}