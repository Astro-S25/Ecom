import React from "react";
import { HomeData} from "../components";
import {Header ,Slider ,Tiles ,Footer ,TwoCards ,TwoCenterCards} from '../components'



function StoreHomePage() {
  return (
    <>
  <Header />

  {HomeData.sliderData.map(data=>

  <Slider image1={data.image1} image2={data.image2} image3={data.image3} image4={data.image4}
   alt1={data.alt1} alt2={data.alt2} alt3={data.alt3} alt4={data.alt4}/> )
  }
   
  <div className="w-auto h-1 mt-14 bg-amber-500  mb-20"></div>

  {HomeData.twoCardsData.map (data=><TwoCards image1={data.image1} image2={data.image2} alt1={data.alt1} alt2={data.alt2} 
   title1={data.title1} title2={data.title2} p1={data.p1} p2={data.p2}/>)}  

  <br/>  

  <div className="w-auto h-1  bg-amber-500  mb-24 "></div>

  <Tiles text1={"TVs"} text2={"Headphones"} text3={"Mobiles"} text4={"Laptops"} text5={"Explore all"}/>

  <div className="w-auto h-1  bg-amber-500  mb-24 "></div>
  {HomeData.twoCenterCardsData.map(data=> <TwoCenterCards image1={data.image1} image2={data.image2}   alt1={data.alt1} alt2={data.alt2}
   title1={data.title1} title2={data.title2} strike1={data.strike1} strike2={data.strike2} p1={data.p1} p2={data.p2}/>)}

   <Footer/>

   </>
  );
}

export default StoreHomePage;