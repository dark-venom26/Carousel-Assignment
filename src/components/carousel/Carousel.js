import React, { useState, useEffect, useCallback } from 'react';
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';
import PauseCircleRoundedIcon from '@mui/icons-material/PauseCircleRounded';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded';
import './carousel.scss'
import { Link } from 'react-router-dom';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const goToPrevious = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const goToNext = useCallback(() => {
    setCurrentIndex((currentIndex + 1) % images.length);
  }, [currentIndex, images.length]);


  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    let intervalId;

    if (isPlaying) {
      intervalId = setInterval(() => {
        goToNext();
      }, 3000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, isPlaying, goToNext]);

  return (
    <div className='carousel'>
      <div className='carousel__slider'>
        <Link to={`/${currentIndex}`}><img src={images[currentIndex].imageUrl} alt={images[currentIndex].title} className='carousel__slider__img' /></Link>
        <p className='carousel__slider__detail'>{images[currentIndex].title}</p>

        <div className='carousel__slider__container'>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.thumbnailUrl}
            alt={image.title}
            style={{ filter: index === currentIndex ? 'grayscale(0)' : 'grayscale(100%)' }}
            className='carousel__slider__container__thumbsnail'
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
      </div>
      <div className='carousel__btns'>
        <button onClick={goToPrevious} className='carousel__btns__btn'><SkipPreviousRoundedIcon/></button>
        <button onClick={togglePlay} className='carousel__btns__btn'>{isPlaying ? <PauseCircleRoundedIcon/> : <PlayCircleRoundedIcon/>}</button>
        <button onClick={goToNext} className='carousel__btns__btn'><SkipNextRoundedIcon/></button>
      </div>
      
    </div>
  );
};

export default Carousel;
