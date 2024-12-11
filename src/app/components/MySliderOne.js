import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const MySliderOne = () => {
    // const [isMobile, setIsMobile] = useState(false);

    // useEffect(() => {
     
    //   const handleResize = () => {
    //     setIsMobile(window.innerWidth <= 1920);
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
              <div className="program-overview">
                <img
                  src="/assets/images/programme-overview-1.png"
                  alt=""
                  title=""
                />
                <p>
                  The Programme is divided into 5 terms consisting of coursework
                  including 10 weeks of internship, with a capstone and internship
                  report due at the end of the programme
                </p>
              </div>
              <div className="program-overview">
                <img
                  src="/assets/images/programme-overview-2.png"
                  alt=""
                  title=""
                />
                <p>
                  Scholars have the option to choose from domains for further studies
                  in Education, Environment, Food Systems and Rural Development, Health,
                  Infrastructure, Technology, and Urbanisation
                </p>
              </div>
            </div>
          </div>

          <div className="mySlider__item col-lg-12 col-md-12 program-overview-new">
            <div className="card">
              <div className="program-overview">
                <img
                  src="/assets//images/programme-overview-3.png"
                  alt=""
                  title=""
                />
                <p>
                  Opportunity to engage with leaders in the samaj, sarkar, and bazaar in
                  small-group closed-door discussions through Tea and Policy sessions at
                  the campus
                </p>
              </div>
              <div className="program-overview">
                <img
                  src="/assets/images/programme-overview-4.png"
                  alt=""
                  title=""
                />
                <p>
                  Workshops with business leaders, senior bureaucrats, and internationally
                  renowned academicians to impart problem-solving, critical thinking, and
                  leadership skills
                </p>
              </div>
            </div>
          </div>

          <div className="mySlider__item col-lg-12 col-md-12 program-overview-new">
            <div className="card">
              <div className="program-overview">
                <img
                  src="/assets/images/programme-overview-5.png"
                  alt=""
                  title=""
                />
                <p>
                  Scholars get the opportunity to opt for Immersive Learning Experiences
                  where they work with organisations/corporations on live projects and apply
                  learnings from the classroom to solving contemporary policy challenges
                </p>
              </div>
              <div className="program-overview">
                <img
                  src="/assets/images/programme-overview-6.png"
                  alt=""
                  title=""
                />
                <p>
                  Dedicated career support and training with workshops and training
                  sessions by leaders from the corporate and consulting space.
                </p>
              </div>
            </div>
          </div>
        </Slider>
     
    </div>
  );
};

export default MySliderOne;
