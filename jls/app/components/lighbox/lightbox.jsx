import React from 'react'
import styles from './lightbox.module.css'
import Image from "next/image";

function Lightbox({close}) {
    return (
        <div className={styles.lightbox}>
            <Image
                onClick={close}
                className={styles.lightboxClose}
                src="/assets/closeMenu.svg"
                alt="close-page"
                width={50}
                height={50}
            />
             <Image
                className={styles.lightboxImg}
                src="/assets/chablons/chablon01.jpg"
                alt="close-page"
                width={800}
                height={800}
            />
            <Image
                className={styles.lightboxLeft}
                src="/assets/leftLightbox.svg"
                alt="previous-page"
                width={50}
                height={50}
            />
            <Image
                className={styles.lightboxRight}
                src="/assets/rightLightbox.svg"
                alt="next-page"
                width={50}
                height={50}
            />

        </div >
    )
}

export default Lightbox