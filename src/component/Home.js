import React from "react";
import image from '../image/wp1.png'
import HomeSectionone from "./HomeSectionone";
import HomeSectiontwo from "./HomeSectiontwo";

const Home=()=>{
    return(

<div className="home">
    <HomeSectionone/>
    <HomeSectiontwo/>
    <img src={image} className="img"></img>
   
</div>


    )
}
export default Home;