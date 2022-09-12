import React from "react";
import "./bestSellers.css";
import { Slider, SliderSwiper } from "../common/slider/";
import { Link } from "react-router-dom";

export default function BestSellers(props) {
  var getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  };

  var checkScreenX = (screenInfo) => {
    return screenInfo.width < 750 ? 1.3 : Math.round(screenInfo.width / 375);
  };

  const settings = {
    spaceBetween: 1,
    slidesPerView: checkScreenX(getWindowDimensions()),
    pagination: {
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
    loop: true,
    loopFillGroupWithBlank: true,
  };

  return (
    <div className="bestSellers-container">
      <p>{props.title}</p>
      <Slider settings={settings}>
        {props.json.map((content) => (
          <SliderSwiper key={content.id} className="bestSellers-swiper">
            <Link to={content.route}>
              <div className="bestSellers-product-info">
                <div className="bestSellers-product-info-top">
                  <div className="bestSellers-product-info-top-left">
                    <p>{content.product.title}</p>
                    <p>{content.product.size}</p>
                  </div>
                  <div className="bestSellers-product-info-top-right">
                    <p>{content.product.price1}</p>
                    <p>{content.product.price2}</p>
                  </div>
                </div>

                <div className="bestSellers-product-info-bottom">
                  <div className="bestSellers-product-info-bottom-left">
                    <div className="bestSellers-product-info-bottom-left-text">{content.product.lançamento}</div>
                  </div>

                  <div className="bestSellers-product-info-bottom-right">
                    <button className="bestSellers-product-info-bottom-right-buttom"></button>
                  </div>
                </div>
              </div>
              <img
                className="bestSellers-img"
                src={content.product.url}
                alt={content.product.alt}
              />
            </Link>
          </SliderSwiper>
        ))}
      </Slider>
    </div>
  );
}
