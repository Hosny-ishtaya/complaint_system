import React from "react";
import image from '../image/real-estate.png'
import Place from "./Choose_Place/Place";
import Footer from "./Footer";

const HomeSectionone=()=>{

    const goDown=()=>{

        window.scrollTo(0, document.body.scrollHeight);

    }

    return(


        <div className="Parent-home">

        
            <div className="sec1">
             <div className="container grid grid-two-column" >

                <div className="data-section">
                    {/* <p  className="Top-data">This is me</p> */}
                    <h1 className="head-data">مَزْرَعَتي</h1>
                    <p  className="All-data">  ابحث عن المزرعة التي تناسبك فقط بنقرة زر , يمكنك الاطلاع على جميع الشليهات المتوفره مع تفاصيلها كامله والميزات التي يمتلكها ومن ثم البدء باجراءات الحجز</p>
                    <div className="btnn">

                    <i class="zmdi zmdi-arrow-left"></i>
                    <button className="btn-comp">

                        <a href="/chalets">احجز هناا</a>   

                    </button>

                          

                    </div>


                </div>

                <div className="section-image">
                   <picture>
                            <img src={image} alt="hero-img"></img>
                   </picture>  
                </div>




            </div>
            </div>
           <div className="sec2">
           <Place/>
           </div>
            
            <Footer/>

            </div>
     

    )
}
export default HomeSectionone;