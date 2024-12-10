import React from "react";
import Slider from "react-slick";

export default function SliderOne() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true, dots: true },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
      {
        breakpoint: 500,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div>
        <img src="/assets/images/creating-next-gen-policy-leaders-for-a-rising-india-banner.jpg" alt="" title="" />
        <img src="/assets/images/creating-next-gen-policy-leaders-for-a-rising-india-banner-new.jpg" alt="" title="" className="banner-pic" />
      </div>

      <div>
        <img src="/assets/images/our-uchicago-collaboration-banner.jpg" alt="" title="" />
        <img src="/assets/images/our-uchicago-collaboration-banner-new.jpg" alt="" title="" className="banner-pic" />
      </div>

      <div>
        <img src="/assets/images/learn-from-our-unmatched-faculty-banner.jpg" alt="" title="" />
        <img src="/assets/images/learn-from-our-unmatched-faculty-banner-new.jpg" alt="" title="" className="banner-pic" />
      </div>

      <div>
        <img src="/assets/images/lead-policy-change-with-our-partners-banner.jpg" alt="" title="" />
        <img src="/assets/images/lead-policy-change-with-our-partner-banner-new.jpg" alt="" title="" className="banner-pic" />
      </div>
    </Slider>
  );
}