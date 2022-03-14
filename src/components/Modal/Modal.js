import React from "react";
import style from "./Modal.module.css";

const Modal = ({urlLarge, closeModalWindow}) => {
    return (
        <div onClick={closeModalWindow} className={style.Overlay} >
            <div className={style.Modal}>
                <img src={urlLarge} alt="" />
            </div>
        </div>
    );
};

export default Modal;
