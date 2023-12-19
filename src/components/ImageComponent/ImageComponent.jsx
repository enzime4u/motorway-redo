import React, { useState } from "react";

import { getImageUrl } from "../../utils/getImageURL";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";

import useImageLoader from "../../utils/useImageLoader";

const ImageComponent = ({ imagePath, altText, onClick, role, ariaLabel }) => {
  const imageURL = getImageUrl(imagePath);

  const isLoaded = useImageLoader(imageURL);
  const [hasError, setHasError] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick();
    }
  };

  const handleError = () => {
    setHasError(true);
  };

  if (hasError) {
    return (
      <div className="error-container">
        <p className="error-message">Image not found</p>
      </div>
    );
  }

  return isLoaded ? (
    <img
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role={role}
      aria-label={ariaLabel}
      src={imageURL}
      alt={altText}
      tabIndex="0"
      onError={handleError}
    />
  ) : (
    <SkeletonLoader aria-busy="true" alt="Loading image" />
  );
};
export default ImageComponent;
