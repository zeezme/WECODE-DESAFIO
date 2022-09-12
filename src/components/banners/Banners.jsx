import React from "react";
import { Slider, SliderSwiper } from "../common/slider/";
import { Link } from "react-router-dom";

import bannerItems from "../../config/banners.json";

import "./banners.css";

export default function Banners() {
  
  var getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  };

  var checkScreenX = (screenInfo) => {
    return screenInfo.width < 750 ? 1 : Math.round(screenInfo.width / 375);
  };

  const settings = {
    spaceBetween: 10,
    slidesPerView: checkScreenX(getWindowDimensions()),
    pagination: {
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
    loop: true,
    loopFillGroupWithBlank: true
  };

  return (
    <div className="banners-container">
      <Slider settings={settings}>
        {bannerItems.map((content) => (
          <SliderSwiper key={content.id}>
            <Link className="banners-image-container" to={content.route}>
              <img
                className="banners-image-props"
                src={content.image.url}
                alt={content.image.alt}
              />
            </Link>
          </SliderSwiper>
        ))}
      </Slider>
    </div>
  );
}
