import React from "react";
import "./Modal.css";
import ImageComponent from "../ImageComponent/ImageComponent";

const Modal = ({ selectedImage, onClose }) => {
  return (
    <div className="modal" onClick={onClose}>
      <ImageComponent
        imagePath={selectedImage?.url}
        altText={selectedImage?.altText}
      />
      <div className="modal-details">
        <span> Likes: {selectedImage?.likes}</span>
        <span> Username: {selectedImage?.user.username}</span>
        <ImageComponent
          imagePath={selectedImage.user.profile_image}
          altText={selectedImage?.user.username}
        />
        <span>
          Location:
          {selectedImage?.user.location
            ? ` ${selectedImage?.user.location}`
            : ` n/a`}
        </span>
      </div>
    </div>
  );
};

export default Modal;
