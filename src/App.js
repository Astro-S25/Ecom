import React from 'react'
import { Route ,Routes } from 'react-router-dom'
import { StoreHomePage } from './pages'


const App = () => {
  return (

    <Routes>
      <Route path="/" element={<StoreHomePage/>}/>
    </Routes>
    
    
  )
}

export default App
