import React from 'react';
import { useState } from 'react';
import ImageSlider from '../ImageSlider/ImageSlider';
import './modalImage.scss';

const ModalImageSlider = ({ isModalOpen, closeModal, openModal }) => {
  return (
    <div
      className="modal_image_slider"
      style={{ display: isModalOpen ? 'flex' : 'none' }}
    >
      <div className="modal_image_slider_container">
        <div className="close_icon_modal">
          <img
            src="/images/icon-close.svg"
            alt="close icon"
            onClick={closeModal}
          />
        </div>

        <ImageSlider setIsModalOpen={openModal} />
      </div>
    </div>
  );
};

export default ModalImageSlider;
