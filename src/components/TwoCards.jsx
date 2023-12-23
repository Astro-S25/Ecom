import React from 'react'

const TwoCards = (props) => {
  return (
    <div className='inline-block'>
    <div className="card card-compact w-96 bg-white shadow-xl float-left ml-72 h-96  mb-20">
  <figure><img src={props.image1} alt={props.alt1} /></figure>
  <div className="card-body">
    <h2 className="card-title text-black">{props.title1}</h2>
    <p className='text-black'>{props.p1}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-warning">Buy Now</button>
    </div>
  </div>
</div>

<div className="card card-compact w-96 bg-white shadow-xl h-96 ml-36 float-left mb-20">
<figure><img src={props.image2} alt={props.alt2} /></figure>
<div className="card-body">
  <h2 className="card-title text-black">{props.title2}</h2>
  <p className='text-black'>{props.p2}</p>
  <div className="card-actions justify-end">
    <button className="btn btn-warning">Buy Now</button>
  </div>
</div>
</div>


</div>

  )
}

export default TwoCards