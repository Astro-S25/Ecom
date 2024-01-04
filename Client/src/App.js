import React from 'react'
import { Route ,Routes } from 'react-router-dom'
import {StoreHome,ExploreAll} from './allPages'



const App = () => {
  return (

    <Routes>
      <Route path="/" element={<StoreHome/>}/>
      <Route path='/ExploreAll' element={<ExploreAll/>}/>
    </Routes>
    
    
  )
}

export default App
