import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'
import CategoryBar from './components/CategoryBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <CategoryBar/>
      <div className="min-h-[85.5vh]">
      <Manager/>
      </div>
      <Footer/>
      
    </>
  )
}

export default App
