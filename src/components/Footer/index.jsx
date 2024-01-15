import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <Link to="/">
                    <img
                        className={styles.logo}
                        src="/logo.png"
                        alt="Logo do Uneflix"
                    />
                </Link>
            </footer>
        </>
    );
};

export default Footer;
