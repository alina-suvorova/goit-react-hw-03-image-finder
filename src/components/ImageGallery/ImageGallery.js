import React from "react";
import ImageGalleryItem from "./ImageGalleryItem";
import style from "./ImageGallery.module.css";
import PropTypes from 'prop-types';

const ImageGallery = ({ imageData, showModalWindow }) => {
    return (
        <ul className={style.ImageGallery}>
            {imageData.map((data) => (
                <ImageGalleryItem
                    urlWeb={data.webformatURL}
                    urlLarge={data.largeImageURL}
                    showModalWindow={showModalWindow}
                    key={data.id}
                />
            ))}
        </ul>
    );
};

export default ImageGallery;


ImageGalleryItem.propTypes = {
    pictures: PropTypes.array,
}