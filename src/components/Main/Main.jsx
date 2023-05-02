import { useState, useEffect } from 'react';
import ImageSlider from '../ImageSlider/ImageSlider';
import ModalImageSlider from '../ModalImageSlider/ModalImageSlider';
import './main.scss';

const Main = ({ setCart }) => {
  const [quantity, setQuantity] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function addToCart() {
    setCart((prev) => prev + quantity);
    setQuantity(0);
  }

  function openModal() {
    if (isModalOpen) return;
    console.log(true);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <main>
      <div className="main_container">
        <div className="main_left">
          <ImageSlider open={openModal} isModalOpen={isModalOpen} />
        </div>
        <div className="main_right">
          <p className="main_subtitle">SNEAKER COMPANY</p>
          <h1 className="main_title">
            Fall Limited Edition <br />
            Sneakers
          </h1>
          <p className="main_text">
            these low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <div className="main_price_wrapper">
            <div className="price_tag">
              <h2 className="price_discount">$125.00</h2>
              <p className="discount">50%</p>
            </div>
            <div className="price_tag">
              <div className="price">$250.00</div>
            </div>
          </div>
          <div className="main_buttons">
            <div className="main_button_left">
              <div
                className="minus_icon"
                onClick={() => {
                  if (quantity === 0) return;
                  setQuantity((prev) => prev - 1);
                }}
              >
                <img src="images/icon-minus.svg" alt="minus icon" />
              </div>
              <span>{quantity}</span>
              <div
                className="plus_icon"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                <img src="images/icon-plus.svg" alt="plus icon" />
              </div>
            </div>
            <div className="main_button_right">
              <button className="btn_cart" onClick={addToCart}>
                <div className="main_cart_icon">
                  <svg
                    width="22"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                      fill="#ffffff"
                      fill-rule="nonzero"
                    />
                  </svg>
                </div>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <ModalImageSlider
        open={openModal}
        closeModal={closeModal}
        isModalOpen={isModalOpen}
      />
    </main>
  );
};

export default Main;
