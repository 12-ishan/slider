import React from "react";
import Slider from "react-slick";

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
      <img src="/assets/images/government.png" alt="" title=""/>
      <p>Government</p>
      </div>
      </div>

      <div>
      <div className="public-policy">
      <img src="/assets/images/ngos.png" alt="" title=""/>
      <p>NGOs</p>
      </div>
      </div>

      <div>
      <div className="public-policy">
      <img src="/assets/images/think-tanks.png" alt="" title=""/>
      <p>Think Tanks</p>
      </div>
      </div>

      <div>
      <div className="public-policy">
      <img src="/assets/images/industry-bodies.png" alt="" title=""/>
      <p>Industry Bodies</p>
      </div>
      </div>

      <div>
      <div className="public-policy">
      <img src="/assets/images/academia.png" alt="" title=""/>
      <p>Academia</p>
      </div>
      </div>

      <div>
      <div className="public-policy">
      <img src="/assets/images/public-affairs.png" alt="" title=""/>
      <p>Public Affairs</p>
      </div>
      </div>

      <div>
      <div className="public-policy">
      <img src="/assets/images/corporates.png" alt="" title=""/>
      <p>Corporates</p>
      </div>
      </div>

      <div>
      <div className="public-policy">
      <img src="/assets/images/consultancies.png" alt="" title=""/>
      <p>Consultancies</p>
      </div>
      </div>
    </Slider>
  );
}