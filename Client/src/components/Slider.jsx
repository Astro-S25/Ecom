import React from 'react'

const Slider = (props) => {
  return (
    <>
    <div className="carousel w-full scroll  ">
  <div id="slide1" className="carousel-item relative w-full h-[550px]">
 <img src={props.image1} className="w-full object-cover" alt={props.alt1}/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-warning btn-lg btn-square btn-outline  ">❮</a> 
      <a href="#slide2" className="btn btn-warning btn-lg btn-square btn-outline ">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full h-[550px] ">
 <img src={props.image2} className="w-full object-cover" alt={props.alt2}/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-warning btn-lg btn-square btn-outline">❮</a> 
      <a href="#slide3" className="btn btn-warning btn-lg btn-square btn-outline">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full h-[550px]">
 <img src={props.image3} className="w-full object-cover" alt={props.alt3}/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-warning btn-lg btn-square btn-outline">❮</a> 
      <a href="#slide4" className="btn btn-warning btn-lg btn-square btn-outline">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full h-[550px]">
 <img src={props.image4} className="w-full object-cover" alt={props.alt4}/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-warning btn-lg btn-square btn-outline">❮</a> 
      <a href="#slide1" className="btn btn-warning btn-lg btn-square btn-outline">❯</a>
    </div>
  </div>
</div>


</>

  )
}

export default Slider
