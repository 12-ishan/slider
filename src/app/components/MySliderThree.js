import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const MySliderThree = () => {
    // const [isMobile, setIsMobile] = useState(window.innerWidth <= 1920);

    // useEffect(() => {
     
    //   const handleResize = () => {
    //     setIsMobile(window.innerWidth <= 767);
    //   };
  
    //   window.addEventListener("resize", handleResize);
  
    //   return () => {
    //     window.removeEventListener("resize", handleResize);
    //   };
    // }, []);
  
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
<h2 className="title"><strong>Placement Sector Batches Wise</strong></h2>
<div className="scholar-placement">
<img src="/assets/images/placement-sector-batches-wise.jpg" alt="" title=""/>
</div>
</div>
</div>

<div className="mySlider__item col-lg-12 col-md-12 program-overview-new">
<div className="card">
<h2 className="title"><strong>Placement Trends 2023</strong></h2>
<div className="scholar-placement">
<img src="/assets/images/placement-trends-2023.jpg" alt="" title=""/>
</div>
</div>
</div> 



        </Slider>
     
    </div>
  );
};

export default MySliderThree;
