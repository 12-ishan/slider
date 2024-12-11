import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const MySliderTwo = () => {
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 1920);

//   useEffect(() => {
   
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 1920);
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    mobileFirst: true,
    adaptiveHeight: true,
   
    responsive: [
      {
        breakpoint: 1920,
       // settings: isMobile ? "slick" : "unslick", 
      },
    ],
  };

  return (
    <div className="row mySlider1">
     
        <Slider {...settings}>
         
  
 <div className="mySlider__item col-lg-12 col-md-12 program-overview-new">
<div className="card">
<div className="program-overview">
<img src="/assets/images/ispp-scholars-journey-with-the-harris-school.jpg" alt="" title=""/>
</div>
</div>
</div>
{/* <!-- END ITEM --> */}
 <div className="mySlider__item col-lg-12 col-md-12 program-overview-new">
<div className="card">
<div className="program-overview">
<img src="/assets/images/uchicago-partnership.jpg" alt="" title=""/>
</div>
</div>
</div>
{/* <!-- END ITEM -->  */}


        </Slider>
   
    </div>
  );
};

export default MySliderTwo;
