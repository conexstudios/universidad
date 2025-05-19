import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 function checkAuth() {
    const loginUrl = import.meta.env.VITE_LOGIN_URL
    const token = localStorage.getItem('token')
    if (token) {
      document.location.href = '/dashboard'
      return true
    } else {
      document.location.href = loginUrl
      return false
    }
  } 
  
  checkAuth()

  const [count, setCount] = useState(0)

  return (
    <>
      
    </>
  )
}

export default App
