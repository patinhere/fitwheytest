import { useState } from "react";
import "./imageSlide.css";

function ImageSlide() {
  const [index, setIndex] = useState(0);
  const images = [
    "assets/img/place-holder0.png",
    "assets/img/place-holder0-1.png",
    "assets/img/place-holder3.png",
  ];

  const handleSlideRight = () => {
    if (index === images.length - 1) setIndex(0);
    else setIndex((prev) => prev + 1);
  };
  const handleSlideLeft = () => {
    if (index === 0) setIndex(images.length - 1);
    else setIndex((prev) => prev - 1);
  };

  return (
    <div>
      <div class="slider-item pd-image-slider">
        <ion-buttons class="slide-btn-left" onClick={handleSlideLeft}>
          <img src="assets/img/icon/arrow-left.svg" />
        </ion-buttons>
        <ion-buttons class="slide-btn-right" onClick={handleSlideRight}>
          <img src="assets/img/icon/arrow-right.svg" />
          <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px">
            <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z" />
            <path d="M9.293 8.707 12.586 12l-3.293 3.293 1.414 1.414L15.414 12l-4.707-4.707-1.414 1.414z" />
          </svg>
        </ion-buttons>

        <div class="product-label">
          <span>5lb</span>
        </div>
        <div class="slide-count">
          <span>1/{images.length}</span>
        </div>
        <div class="swiper-wrapper pd-image-slide">
          <div class="swiper-slide">
            <ion-img src={images[index]} class="slides-product-image"></ion-img>
          </div>
        </div>
        <div class="tier-level">
          <span class="sub-text">Your Tier</span>
          <span class="main-text">
            <img src="assets/img/icon/dumbbell-icon.svg" />
            Pro Member
          </span>
        </div>
      </div>
    </div>
  );
}

export default ImageSlide;
