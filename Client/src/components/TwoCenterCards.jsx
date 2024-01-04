import React from 'react'

const TwoCenterCards = (props) => {
  return (
    <div className='inline-block'>
    <div className="card  w-96 bg-white shadow-xl float-left ml-60  h-96 mb-20">
    <figure className="px-10 pt-10">
      <img src={props.image1} alt={props.alt1} className="rounded-xl h-40 w-56 object-cover " />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title text-black">{props.title1}</h2>
      <p className='text-black text-lg'>&#8377;      <s>{props.strike1}</s>       {props.p1}</p>
      <div className="card-actions">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>

<div className="card w-96 bg-white shadow-xl float-left ml-72 h-96  mb-20">
<figure className="px-10 pt-10">
  <img src={props.image2} alt={props.alt2} className="rounded-xl h-40 w-56 object-cover" />
</figure>
<div className="card-body items-center text-center">
  <h2 className="card-title text-black">{props.title2}</h2>
  <p className='text-black text-lg'>&#8377;      <s>{props.strike2}</s>       {props.p2}</p>
  <div className="card-actions">
    <button className="btn btn-primary">Buy Now</button>
  </div>
</div>
</div>
</div>
  )
}

export default TwoCenterCards