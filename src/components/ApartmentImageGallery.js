import React from 'react';

import PropTypes from 'prop-types';

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

ApartmentImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ApartmentImageGallery;
