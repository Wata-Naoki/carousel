import React from "react";

import { LeftArrow } from "./icons/LeftArrow";
import { RightArrow } from "./icons/RightArrow";
import { sliderImgData } from "./sliderImgData/sliderImgData";
import { SliderLayout } from "./SliderLayout";
import { useCurrentSlider } from "./useCurrentSlider";

export const Slider = () => {
  // 画像データを取得する
  const { current, nextSlide, prevSlide, specifiedSlide } = useCurrentSlider();

  return (
    <SliderLayout
      leftArrow={<LeftArrow />}
      rightArrow={<RightArrow />}
      data={sliderImgData}
      // 後々apiから取得する際に使えるよう残しておく
      // isLoading={isLoading}
      current={current}
      nextSlide={nextSlide}
      prevSlide={prevSlide}
      specifiedSlide={specifiedSlide}
    />
  );
};
