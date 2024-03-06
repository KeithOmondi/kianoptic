import React from "react";
import Slider from "react-slick";
import styles from "../../styles/styles";
//import "./Brand.css"; // Import custom CSS file for styling (you can name it as you prefer)

const Brand = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set autoplay speed in milliseconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  

  return (
    <div className={`${styles.section}`}>
      <div className="gap-[20px] md:grid-cols-2 md:gap-[25px]">
        <Slider {...settings}>
          <div className="mb-6">
            <img
              className="w-[90%]"
              src="https://images.pexels.com/photos/6023575/pexels-photo-6023575.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div className="mb-6">
            <img
              className="w-[90%]"
              src="https://img.freepik.com/premium-photo/eyeglasses-digital-desk_53876-10490.jpg?w=740"
              alt=""
            />
          </div>
          <div className="mb-6">
            <img
              className="w-[90%]"
              src="https://img.freepik.com/free-photo/young-woman-wearing-big-modern-sunglasses_186202-809.jpg?t=st=1709574137~exp=1709577737~hmac=e3c195dcf17fba4ef440fac60a8e7ed7b7b9800883f9271e40eafc35ca00eeec&w=740"
              alt=""
            />
          </div>
          <div className="mb-6">
            <img
              className="w-[90%]"
              src="https://img.freepik.com/premium-photo/young-african-american-girl-sunglasses-posing-outdoors-dressed-casul-with-short-voluminous-hair_118342-46147.jpg?w=740"
              alt=""
            />
          </div>
          <div className="mb-6">
            <img
              className="w-[90%]"
              src="https://img.freepik.com/free-photo/crop-closeup-head-ethnic-male_23-2148141982.jpg?t=st=1709574252~exp=1709577852~hmac=3a365769da3cb6dc8f4b2c03c183c1fd9b901878dfae315cde897bcb4498b8ba&w=740"
              alt=""
            />
          </div>
          <div className="mb-6">
            <img
              className="w-[90%]"
              src="https://optica.africa/cdn/shop/collections/TOMMY_RESIZE.png?height=500&v=1638004324"
              alt=""
            />
          </div>

         
        </Slider>
      </div>
    </div>
  );
};

export default Brand;
