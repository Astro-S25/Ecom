import React from "react";
import { Header , Slider ,TwoCards, Tiles ,Footer} from "./components";
import { WhiteHeadphone , blackkey ,blacktws ,androidphone ,microwaveold ,penblack, hangingheadphone, applekey ,iphonetable ,airpod ,mouse , silvermic} from "./images";
import TwoCenterCards from "./components/TwoCenterCards";


function App() {
  return (
    <>
  <Header />
  <Slider image1={blacktws} image2={WhiteHeadphone} image3={blackkey} image4={androidphone}
   alt1={"Blacktws"} alt2={"Whtieheadphone"} alt3={"Blackkey"} alt4={"androidphone"}/> 
   
  <div className="w-auto h-1 mt-14 bg-amber-500  mb-20"></div>

  <TwoCards image1={microwaveold} image2={penblack} alt1={"Microwave"} alt2={"Pendrive"} 
   title1={"Microwave ovens"} title2={"Pendrives"} p1={"Upto 40% off"} p2={"Upto 60% off"}/>
   

  <TwoCards  image1={hangingheadphone} image2={applekey} alt1={"mainHeadphone"} alt2={"keyboard"}
   title1={"Headphones"} title2={"Keyboards"} p1={"Upto 35% off"} p2={"Upto 50% off"}/>

  <br/>  

  <div className="w-auto h-1  bg-amber-500  mb-24 "></div>

  <Tiles text1={"TVs"} text2={"Headphones"} text3={"Mobiles"} text4={"Laptops"} text5={"Explore all"}/>

  <div className="w-auto h-1  bg-amber-500  mb-24 "></div>

  <TwoCenterCards image1={iphonetable} image2={mouse}   alt1={"mainiphone"} alt2={"mainmouse"}
   title1={"Iphone 8 (256 GB)"} title2={"Mouse(grey)"} strike1={"35000"} strike2={"1000"} p1={"30000"} p2={"800"}/>

  <TwoCenterCards image1={silvermic} image2={airpod}   alt1={"mainmic"} alt2={"mainairpod"}
   title1={"Microphone (Silver)"} title2={"Airpods"} strike1={"5000"} strike2={"10000"} p1={"2500"} p2={"7000"}/>

   <Footer/>

   </>
  );
}

export default App;
