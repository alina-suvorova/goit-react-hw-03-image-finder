import React from "react";
import style from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ urlWeb, urlLarge, showModalWindow }) => {
    return (
        <li
            className={style.ImageGalleryItem}
            onClick={() => showModalWindow(urlLarge)}
        >
            <img src={urlWeb} alt="" className={style.ImageGalleryItemImage} />
        </li>
    );
};

export default ImageGalleryItem;

