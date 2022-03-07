import { useEffect, useState } from "react";
import popupStyles from "./custom-popup.module.css";
import PropTypes from "prop-types";
import Image from 'next/image'

const CustomPopup = (props) => {
  const [show, setShow] = useState(false);

  const closeHandler = (e) => {
    setShow(false);
    props.onClose(false);
  };

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  return (
    <div
      style={{
        visibility: show ? "visible" : "hidden",
        opacity: show ? "1" : "0"
      }}
      className={popupStyles.overlay}
    >

      <div className={`${popupStyles.popupContent} flex flex-row justify-center items-center`}>
        <img className=" hidden lg:block" src="/image4.jpg" alt="corredor" />
        <div className={`${popupStyles.popup} flex flex-row justify-center items-center`}>
          <Image src="/newsletter-mail-icon.svg" width={32} height={32} alt="icon" />
          <h2>{props.title}</h2>
          <span className={popupStyles.close} onClick={closeHandler}>
            Fechar
          </span>
          <div className={popupStyles.content}>{props.children}</div>
        </div>
      </div>
    </div>
  );
};

CustomPopup.propTypes = {
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};
export default CustomPopup;