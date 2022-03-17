import styles from "./Carrossel.module.css"
import { LeftIcon, RightIcon } from "../../Icons"
import CardProduto from "./CardProduto"

import { useRef } from 'react';

export default function Carrossel() {

    const carrossel = useRef(null);

    const handleLeftClick = (e) => {
        e.preventDefault();
        carrossel.current.scrollLeft -= carrossel.current.offsetWidth;
    };

    const handleRightClick = (e) => {
        e.preventDefault();

        carrossel.current.scrollLeft += carrossel.current.offsetWidth;
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.carrossel} ref={carrossel}>
                    <CardProduto />
                    <CardProduto />
                    <CardProduto />
                    <CardProduto />
                    <CardProduto />
                    <CardProduto />
                    <CardProduto />
                    <CardProduto />
                    <CardProduto />
                    <CardProduto />
                </div>
                <div className={styles.passButtons}>
                    <div className={styles.passButtonsContent}>

                        <button className={styles.lButtons} onClick={handleLeftClick}>
                            {LeftIcon}
                        </button>
                        <button className={styles.rButtons} onClick={handleRightClick}>
                            {RightIcon}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}