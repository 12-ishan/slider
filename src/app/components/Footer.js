'use client';
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Footer = () => {
  useEffect(() => {
   
    window.onscroll = function () {
      myFunction();
    };

    const header = document.getElementById("myHeader");
    const sticky = header.offsetTop;

    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }


    const scriptSlick = document.createElement("script");
    scriptSlick.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
    scriptSlick.defer = true;
    document.body.appendChild(scriptSlick);

    const scriptSlickCarousel = document.createElement("script");
    scriptSlickCarousel.src = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js";
    scriptSlickCarousel.defer = true;
    document.body.appendChild(scriptSlickCarousel);

    scriptSlickCarousel.onload = () => {
      window.addEventListener("DOMContentLoaded", (e) => {
        $(".multiple-items").slick({
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: true,
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
        });

        $(".multiple-items1").slick({
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
        });

        $(".multiple-items2").slick({
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 4,
          autoplay: true,
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
        });
      });
    };


    const setupAccordion = (accordionClass, activeClass) => {
      const accordions = document.getElementsByClassName(accordionClass);

      for (let i = 0; i < accordions.length; i++) {
        accordions[i].addEventListener("click", function () {
          const isActive = this.classList.contains(activeClass);
          const activeAccordions = document.querySelectorAll(
            `.${accordionClass}.${activeClass}`
          );

          activeAccordions.forEach((accordion) => {
            accordion.classList.remove(activeClass);
            accordion.nextElementSibling.style.display = "none";
          });

          if (!isActive) {
            this.classList.add(activeClass);
            this.nextElementSibling.style.display = "block";
          }
        });
      }
    };

    setupAccordion("accordion-main", "active-main");
    setupAccordion("accordion", "active");


    window.addEventListener("DOMContentLoaded", () => {
      const t = [].slice.call(document.querySelectorAll("iframe[data-src]"));
      if ("IntersectionObserver" in window) {
        const n = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const iframe = entry.target;
              iframe.src = iframe.dataset.src;
              observer.unobserve(iframe);
            }
          });
        });

        t.forEach((iframe) => {
          n.observe(iframe);
        });
      }
    });

    return () => {

      window.removeEventListener("scroll", myFunction);
    };
  }, []);

  return (
    <section className="footer-section">
    <div className="container">
    <div className="row">
    <div className="col-md-12">
    <h3>Application for Class of 2025</h3>
    <p>Applications submitted by 30<sup>th</sup> June are eligible to participate in free bridge classes</p>
    <a href="#apply-now"><strong>Apply Now</strong></a>
    </div>
    </div>
    </div>
    </section>
  );
};

export default Footer;
