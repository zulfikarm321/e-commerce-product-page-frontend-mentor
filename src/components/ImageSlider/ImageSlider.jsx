import { useState, useEffect } from 'react';
import './ImageSlider.scss';

const ImageSlider = ({ open, isModalOpen }) => {
  const [images] = useState([
    {
      image: 'images/image-product-1.jpg',
      thumbnail: 'images/image-product-1-thumbnail.jpg',
      active: true
    },
    {
      image: 'images/image-product-2.jpg',
      thumbnail: 'images/image-product-2-thumbnail.jpg',
      active: false
    },
    {
      image: 'images/image-product-3.jpg',
      thumbnail: 'images/image-product-3-thumbnail.jpg',
      active: false
    },
    {
      image: 'images/image-product-4.jpg',
      thumbnail: 'images/image-product-4-thumbnail.jpg'
    }
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="image_slider">
      <div
        className="btn_prev"
        onClick={() => {
          if (currentIndex === 0) return;
          setCurrentIndex((prev) => prev - 1);
        }}
      >
        <img src="/images/icon-previous.svg" alt="prev icon" />
      </div>
      <div
        className="btn_next"
        onClick={() => {
          if (currentIndex === 3) return;
          setCurrentIndex((prev) => prev + 1);
        }}
      >
        <img src="/images/icon-next.svg" alt="next icon" />
      </div>
      <div className="image_slider_preview">
        <img
          src={images[currentIndex].image}
          alt="preview image"
          onClick={open}
        />
      </div>
      <div className="image_slider_thumbnail">
        {images.map((image, index) => (
          <div
            className={
              index === currentIndex ? 'thumbnail active' : 'thumbnail'
            }
            key={index}
            onClick={() => setCurrentIndex(index)}
          >
            <img src={image.thumbnail} alt="thumbnail image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
