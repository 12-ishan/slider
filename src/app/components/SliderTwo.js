import React from "react";
import Slider from "react-slick";
import Image from "next/image";

export default function SliderTwo() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 2, slidesToScroll: 2, infinite: true, dots: true },
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
        <div className="public-policy">
          <Image 
            src="/assets/images/government.png" 
            alt="Government" 
            title="Government" 
            width={500} 
            height={100} 
          />
          <p>Government</p>
        </div>
      </div>

      <div>
        <div className="public-policy">
          <Image 
            src="/assets/images/ngos.png" 
            alt="NGOs" 
            title="NGOs" 
            width={500} 
            height={100} 
          />
          <p>NGOs</p>
        </div>
      </div>

      <div>
        <div className="public-policy">
          <Image 
            src="/assets/images/think-tanks.png" 
            alt="Think Tanks" 
            title="Think Tanks" 
            width={500} 
            height={100} 
          />
          <p>Think Tanks</p>
        </div>
      </div>

      <div>
        <div className="public-policy">
          <Image 
            src="/assets/images/industry-bodies.png" 
            alt="Industry Bodies" 
            title="Industry Bodies" 
            width={500} 
            height={100} 
          />
          <p>Industry Bodies</p>
        </div>
      </div>

      <div>
        <div className="public-policy">
          <Image 
            src="/assets/images/academia.png" 
            alt="Academia" 
            title="Academia" 
            width={500} 
            height={100} 
          />
          <p>Academia</p>
        </div>
      </div>

      <div>
        <div className="public-policy">
          <Image 
            src="/assets/images/public-affairs.png" 
            alt="Public Affairs" 
            title="Public Affairs" 
            width={500} 
            height={100} 
          />
          <p>Public Affairs</p>
        </div>
      </div>

      <div>
        <div className="public-policy">
          <Image 
            src="/assets/images/corporates.png" 
            alt="Corporates" 
            title="Corporates" 
            width={500} 
            height={100} 
          />
          <p>Corporates</p>
        </div>
      </div>

      <div>
        <div className="public-policy">
          <Image 
            src="/assets/images/consultancies.png" 
            alt="Consultancies" 
            title="Consultancies" 
            width={500} 
            height={100} 
          />
          <p>Consultancies</p>
        </div>
      </div>
    </Slider>
  );
}