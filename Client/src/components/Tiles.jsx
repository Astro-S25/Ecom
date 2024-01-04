import React from 'react'
import {  useNavigate } from 'react-router-dom';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';






const Tiles = (props) => {
  
const navigate=useNavigate();

 
  return (
    <div className='mb-24'>
     <button name={props.button1}><div className=" text-center text-lg  pt-8 font-medium border-opacity-10 rounded-3xl ml-44 h-32 w-32 bg-amber-400 border-amber-600 border-8 shadow-xl inline-block text-black mr-22">{props.text1}</div></button>
     <button name={props.button2}><div className=" text-center text-lg  pt-8 font-medium border-opacity-10 rounded-3xl ml-32 h-32 w-32 bg-amber-400 border-amber-600 border-8 shadow-xl inline-block text-black mr-22">{props.text2}</div></button>
     <button name={props.button3}><div className=" text-center text-lg  pt-8 font-medium border-opacity-10 rounded-3xl ml-32 h-32 w-32 bg-amber-400 border-amber-600 border-8 shadow-xl inline-block text-black mr-22">{props.text3}</div></button>
     <button name={props.button4}><div className=" text-center text-lg  pt-8 font-medium border-opacity-10 rounded-3xl ml-32 h-32 w-32 bg-amber-400 border-amber-600 border-8 shadow-xl inline-block text-black mr-22">{props.text4}</div></button>
    <button name={props.button5} onClick={()=>navigate('../ExploreAll')}><div className=" text-center text-lg  pt-8 font-medium border-opacity-60 rounded-3xl ml-32 h-32 w-32 bg-amber-400 border-black border-8 shadow-xl inline-block text-black mr-4">{props.text5}</div></button>
    <NavigateNextIcon  sx={{fontSize:'65px'}}/>
    </div>
  )
}

export default Tiles