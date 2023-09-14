import React, { useState, useEffect } from 'react';

const ProfilePicSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Function to cycle through images with a delay
    const nextImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Set an interval to advance to the next image every 3 seconds (adjust as needed)
    const intervalId = setInterval(nextImage, 3000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <div className="image-slider">
      <img
        src={images[currentIndex]}
        alt="sohai"
        className="image-slide"
      />
    </div>
  );
};

export default ProfilePicSlider;