import React from 'react';

type SliderLayoutProps = {
  leftArrow: React.ReactNode;
  rightArrow: React.ReactNode;
  data: any;
  current: number;
  nextSlide: () => void;
  prevSlide: () => void;
  specifiedSlide: (index: number) => void;
};

export const SliderLayout: React.FC<SliderLayoutProps> = ({
  leftArrow,
  rightArrow,
  data,
  current,
  nextSlide,
  prevSlide,
  specifiedSlide,
}) => (
  <div className="flex items-center justify-center w-screen px-5 sm:mb-16 sm:mt-2 sm:px-6 lg:px-8">
    <div className="w-full py-10 sm:py-12">
      <div className="flex justify-center w-full h-52 sm:h-64 md:h-80 lg:h-96">
        <div className="flex items-center justify-center w-full h-full 2xl:max-w-screen-2xl ">
          <div onClick={prevSlide}>{leftArrow}</div>

          <div className="w-full h-full mx-3 sm:mx-10 lg:mx-12">
            <div
              style={{ backgroundImage: `url(${data[current]?.img})` }}
              className="w-full h-full duration-1000 bg-center bg-cover rounded-2xl"
            />
            <div className="flex justify-center mt-4">
              {data &&
                data?.map((item: any, index: number) => (
                  // 4つ目以降はdotの1つ目に戻る
                  <div
                    key={item.id}
                    onClick={() => specifiedSlide(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full mx-1  cursor-pointer ${
                      // dotは10個まで
                      index === current ? 'bg-gray-500' : 'bg-gray-200'
                    }`}
                  />
                ))}
            </div>
          </div>

          <div onClick={nextSlide}>{rightArrow}</div>
        </div>
      </div>
    </div>
  </div>
);
