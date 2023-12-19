import { useState, useEffect } from "react";

function useImageLoader(imageSrc) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => setIsLoaded(true);
  }, [imageSrc]);

  return isLoaded;
}

export default useImageLoader;
