import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { amber, grey } from '@mui/material/colors';
import LoginIcon from '@mui/icons-material/Login';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Avatar } from '@mui/material';



const Header = () => {
  return (
    <div className="h-14  w-auto bg-amber-400">
      
        <h1 className="text-black text-4xl font-Poppins font-black  p-1  float-left">GADGET STORE</h1>
        
        <div className="h-8   float-left ml-52 mt-2.5 bg-white rounded-lg ">
          <SearchIcon  style={{color:grey[900]}} className="mb-1 ml-1"/>
        <input type="search" placeholder=' Search' className="w-96 h-8 rounded-lg pl-2 pr-2 bg-white" />
        </div>

        <Avatar src="/broken-image.jpg" className="float-left ml-28 mt-2" style={{color:grey[900],backgroundColor:amber[200]}}/>
        <div  className="float-left ml-3 mt-2 bg-amber-200 p-1 rounded-lg " >
        <p className="font-Poppins font-semibold inline-block text-black">Login</p> 
   
         <LoginIcon style={{color:grey[900]}} className="ml-1 mb-1 "/>
         </div>
       
       
         <div className=" bg-gray-900 float-left  ml-28 mt-2 p-1 pl-2 rounded-lg">
          <p className="font-Poppins font-semibold inline-block  text-amber-200">Cart</p>
          <ShoppingCartIcon  style={{color:amber[300]}} className="ml-2 mb-1" />
           </div>


       
        
        
        
    </div>
  )
}

export default Header