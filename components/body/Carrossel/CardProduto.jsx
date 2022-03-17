import styles from "./Carrossel.module.css"
import Image from 'next/image'

export default function CardProduto() {
    return (
        <>
            <div className={styles.item}>
                <Image
                    src="/Produto01.png"
                    width={308}
                    height={381}
                />
                <div className={styles.info}>
                    <div className={styles.colorSelector}>
                    </div>
                    <span className={styles.price}>R$ 500,00 </span>
                    <span className={styles.productName}>Faux Suede Mini Skirt </span>
                    <span className={styles.disclaimer}> A faux suede mini skirt featuring exposed button-front closures and panel seam construction.</span>
                    <button className={styles.button}>
                        Adicionar
                    </button>
                </div>
            </div>
        </>
    )
}