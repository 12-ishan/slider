import React from "react";
import Slider from "react-slick";

export default function SliderThree() {
  var settings = {
    dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 3,
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
<div className="faculty-mentors"><img src="/assets/images/shubhashis-gangopadhyay.jpg" alt="" title=""/>
<h3><strong>Shubhashis Gangopadhyay</strong></h3>
<p className="faculty-mentors-content">Founding Dean of Indian School of Public Policy</p>
</div>
</div>

<div>
<div className="faculty-mentors"><img src="/assets/images/krishna-k-ladha.jpg" alt="" title=""/>
<h3><strong>Krishna K Ladha</strong></h3>
<p className="faculty-mentors-content">Professor at ISPP, Distinguished<br/> 
Fellow at India Development Foundation</p>
</div>
</div>

<div>
<div className="faculty-mentors"><img src="/assets/images/o-p-agarwal.jpg" alt="" title=""/>
<h3><strong>Dr O.P Agarwal</strong></h3>
<p className="faculty-mentors-content">Professor of Practice, ISPP<br/>
Former Joint Secretary<br/>
(Urban Transport), Union Ministry of<br/> 
Urban Development</p>
</div>
</div>

<div>
<div className="faculty-mentors"><img src="/assets/images/archana-gulati.jpg" alt="" title=""/>
<h3><strong>Archana Gulati</strong></h3>
<p className="faculty-mentors-content">Former Head of Public Policy, Google India</p>
</div>
</div>

<div>
<div className="faculty-mentors"><img src="/assets/images/nandita-banerjee.jpg" alt="" title=""/>
<h3><strong>Nandita Banerjee</strong></h3>
<p className="faculty-mentors-content">Head HR & Capacity Building at ASER Centre, Pratham Education Foundation</p>
</div>
</div>

<div>
<div className="faculty-mentors"><img src="/assets/images/kanu-priya-sekhri.jpg" alt="" title=""/>
<h3><strong>Kanu Priya Sekhri</strong></h3>
<p className="faculty-mentors-content">Business and Mindset Coach, Live Your Message</p>
</div>
</div>
    </Slider>
  );
}