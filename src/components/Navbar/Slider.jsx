import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function Slider() {
  
  const slides = [
    {
      url: 'https://th.bing.com/th/id/OIP.hF7QTj2zZqAf4Mu0SpB6MgHaE_?rs=1&pid=ImgDetMain',
    },
    {
      url: 'https://th.bing.com/th/id/R.72c00bd493c54384967a36d236c5960f?rik=XFZHbckqnGIaxw&riu=http%3a%2f%2fairehomeloans.com.au%2fwp-content%2fuploads%2f2020%2f07%2fHappy-family-in-their-new-home.jpg&ehk=PsIGWOwiCpsjLy9KvLwCIFx8cd%2bWqBo0CHUy3rZwa2c%3d&risl=&pid=ImgRaw&r=0',
    },
    {
      url: 'https://i1.wp.com/buddymantra.com/wp-content/uploads/2015/12/1b-1.jpg',
    },

    {
      url: 'https://bloximages.chicago2.vip.townnews.com/madison.com/content/tncms/assets/v3/editorial/5/6f/56fa5e0f-445c-5295-9ef6-8b12a831a079/5f554764b453a.image.jpg?resize=1700%2C1212',
    },
    {
      url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-[100%] h-[480px] w-full m-auto py-8 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
