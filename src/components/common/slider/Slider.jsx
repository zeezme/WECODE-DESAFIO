import React from "react";
import { Swiper } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './slider.css'

export default function Slider({ settings, children }) {

  return <Swiper modules={[Navigation, Pagination, A11y, Autoplay]} {...settings}>{children}</Swiper>;

}
