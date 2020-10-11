import React from 'react';
import ImageGallery from 'react-image-gallery';

const ApartmentImageGallery = ({ images }) => {
  const imagesArray = [];

  images.forEach(image => {
    const imgObj = {
      original: image.url,
      thumbnail: image.url,
    };

    imagesArray.push(imgObj);
  });

  return <ImageGallery items={imagesArray} />;
};

export default ApartmentImageGallery;
