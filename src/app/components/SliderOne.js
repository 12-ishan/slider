import React from "react";
import Slider from "react-slick";
import Image from "next/image";

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
        <Image 
          src="/assets/images/creating-next-gen-policy-leaders-for-a-rising-india-banner-min.jpg" 
          alt="Creating Next-Gen Policy Leaders" 
          title="Creating Next-Gen Policy Leaders" 
          width={1920} 
          height={1080} 
        />
        <Image 
          src="/assets/images/creating-next-gen-policy-leaders-for-a-rising-india-banner-new-min.jpg" 
          alt="Creating Next-Gen Policy Leaders New" 
          title="Creating Next-Gen Policy Leaders New" 
          className="banner-pic" 
          width={1920} 
          height={1080} 
        />
      </div>

      <div>
        <Image 
          src="/assets/images/our-uchicago-collaboration-banner-min.jpg" 
          alt="Our UChicago Collaboration" 
          title="Our UChicago Collaboration" 
          width={1920} 
          height={1080} 
        />
        <Image 
          src="/assets/images/our-uchicago-collaboration-banner-new-min.jpg" 
          alt="Our UChicago Collaboration New" 
          title="Our UChicago Collaboration New" 
          className="banner-pic" 
          width={1920} 
          height={1080} 
        />
      </div>

      <div>
        <Image 
          src="/assets/images/learn-from-our-unmatched-faculty-banner-min.jpg" 
          alt="Learn from Our Unmatched Faculty" 
          title="Learn from Our Unmatched Faculty" 
          width={1920} 
          height={1080} 
        />
        <Image 
          src="/assets/images/learn-from-our-unmatched-faculty-banner-new-min.jpg" 
          alt="Learn from Our Unmatched Faculty New" 
          title="Learn from Our Unmatched Faculty New" 
          className="banner-pic" 
          width={1920} 
          height={1080} 
        />
      </div>

      <div>
        <Image 
          src="/assets/images/lead-policy-change-with-our-partners-banner-min.jpg" 
          alt="Lead Policy Change with Our Partners" 
          title="Lead Policy Change with Our Partners" 
          width={1920} 
          height={1080} 
        />
        <Image 
          src="/assets/images/lead-policy-change-with-our-partner-banner-new-min.jpg" 
          alt="Lead Policy Change with Our Partner New" 
          title="Lead Policy Change with Our Partner New" 
          className="banner-pic" 
          width={1920} 
          height={1080} 
        />
      </div>
    </Slider>
  );
}