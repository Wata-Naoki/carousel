import { useEffect, useState } from "react";
import { sliderImgData } from "./sliderImgData/sliderImgData";

export const useCurrentSlider = () => {
  const [current, setCurrent] = useState<number>(0);

  const prevSlide = () => {
    setCurrent(
      sliderImgData && current === 0 ? sliderImgData.length - 1 : current - 1
    );
  };

  const nextSlide = () => {
    setCurrent(
      sliderImgData && current === sliderImgData.length - 1 ? 0 : current + 1
    );
  };
  // 黒い点の処理
  const specifiedSlide = (index: number) => {
    setCurrent(index);
  };
  // 10秒毎に自動でスライドする処理
  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 10000);
    return () => clearTimeout(timer);
  }, [current]);

  return { current, nextSlide, prevSlide, specifiedSlide };
};
