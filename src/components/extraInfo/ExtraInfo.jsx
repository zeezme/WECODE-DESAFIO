import React from "react";
import "./extraInfo.css";
import { Slider, SliderSwiper } from "../common/slider/";

export default function ExtraInfo(props) {
  const settings = {
    spaceBetween: 1,
    slidesPerView: 1,
    pagination: {
      clickable: true,
    },
    autoplay: {
      delay: 2500,
    },
    loop: true,
    loopFillGroupWithBlank: true,
  };

  return (
    <div className="extraInfo-container">
      <Slider className='extrainfo-slider' settings={settings}>

      <SliderSwiper className="extraInfo-item">          
            <img
              className="extraInfo-image"
              src="/assets/svg/icon-footer-card.svg"
              alt="Box"
            />
            <p>Em até 12x sem juros</p>
        </SliderSwiper>

      <SliderSwiper className="extraInfo-item">          
            <img
              className="extraInfo-image"
              src="/assets/svg/icon-footer-locker.svg"
              alt="Box"
            />
            <p>Compra 100% segura</p>
        </SliderSwiper>
        
        <SliderSwiper className="extraInfo-item">          
            <img
              className="extraInfo-image"
              src="/assets/svg/icon-footer-box.svg"
              alt="Box"
            />
            <p>Produto de alta qualidade</p>
        </SliderSwiper>
        <SliderSwiper className="extraInfo-item">          
            <img
              className="extraInfo-image"
              src="/assets/svg/icon-footer-pix.svg"
              alt="Box"
            />
            <p>5% de desconto no PIX</p>
        </SliderSwiper>
      </Slider>
    </div>
  );
}
