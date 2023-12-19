import React, { useState } from "react";
import "./Gallery.css";
import ImageComponent from "../ImageComponent/ImageComponent";
import Modal from "../Modal/Modal";

const Gallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const onOpenModal = (image) => {
    setSelectedImage(image);
  };

  const onCloseModal = () => setSelectedImage(null);

  return (
    <div className="gallery-container">
      <div className="gallery">
        {images.map((image) => {
          return (
            <ImageComponent
              className="gallery-image"
              key={image.id}
              imagePath={image.url}
              altText={image.altText}
              onClick={() => {
                onOpenModal(image);
              }}
              role="button"
              aria-label={`Open ${image.altText}`}
            />
          );
        })}
      </div>
      {selectedImage && (
        <Modal selectedImage={selectedImage} onClose={onCloseModal} />
      )}
    </div>
  );
};

export default Gallery;
