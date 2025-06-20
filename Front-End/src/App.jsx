import './App.css'
// import { ThemeProvider } from "@/components/theme-provider"
import { RouterProvider } from 'react-router-dom'
import { Router } from './router/Router'


export default function App() {
  return(
    <>
      {/* <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme"> */}
      <RouterProvider router={Router}/>
    {/* </ThemeProvider> */}
    </>
  )
}