import React from "react";
import styles from "./Banner.module.css";
import CategoryTitle from "../CategoryTitle";
import { useMediaQuery } from "react-responsive";

const Banner = () => {
    const isBigMobile = useMediaQuery({ maxWidth: 1024 });

    return (
        <section className={styles.background}>
            <section className={styles.bannerContainer}>
                {isBigMobile ? (
                    <h2 className={styles.title}>Seo com React</h2>
                ) : (
                    <div className={styles.content}>
                        <CategoryTitle category="Front End" bigger />
                        <h2 className={styles.title}>Seo com React</h2>
                        <p className={styles.description}>
                            Esse desafio é uma forma de aprendizado. É um
                            mecanismo onde você pode se engajar na resolução de
                            um problema para poder aplicar todo o conhecimento
                            adquirido na Formação React.
                        </p>
                    </div>
                )}
                {!isBigMobile && <img className={styles.player} src="/banner-image.jpg" alt="" />}
            </section>
        </section>
    );
};

export default Banner;
