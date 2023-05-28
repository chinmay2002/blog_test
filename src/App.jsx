import Navbar from "./components/Navbar"
import Home from "./components/Home"
import React from 'react'

const App = () => {
  return (
    <div className="h-screen w-full">
      <div className=" w-full">
        <Navbar />
      </div>
      <div className=' w-screen  flex  justify-center bg-slate-100'>
        <Home/>
      </div>
    </div>
  )
}

export default App
