// components/MySlider.js
import React from 'react';
import Slider from 'react-slick';

const MySlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="site-wrapper container">
      <div className="mySlider row">
        <Slider {...settings}>
          <div className="mySlider__item col-lg-6 col-md-6 eligibility-new">
            <div className="card">
              <div className="eligibility">
                <span>
                  <img src="/assets/images/icon-5.png" alt="" title="" />
                </span>
                <p>Graduates from any discipline from Indian or international universities</p>
              </div>
              <div className="eligibility">
                <span>
                  <img src="/assets/images/icon-6.png" alt="" title="" />
                </span>
                <p>Final-year undergraduate students can apply but must complete their degree before programme commencement</p>
              </div>
            </div>
          </div>
          <div className="mySlider__item col-lg-6 col-md-6 eligibility-new">
            <div className="card">
              <div className="eligibility">
                <span>
                  <img src="/assets/images/icon-7.png" alt="" title="" />
                </span>
                <p>Young professionals with up to 4 years of work experience can apply</p>
              </div>
              <div className="eligibility">
                <span>
                  <img src="/assets/images/icon-8.png" alt="" title="" />
                </span>
                <p>No specific skills or technical background is required, except for numerical literacy and language proficiency</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default MySlider;
