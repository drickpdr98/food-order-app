import React from "react";
import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

function Backdrop({ onClick }) {
  return <div className={styles.backdrop} onClick={onClick}></div>;
}

function ModalOverlay({ children }) {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

const portalElement = document.getElementById("overlay");

export default function Modal({ children, onCloseCart }) {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClick={onCloseCart} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
}
