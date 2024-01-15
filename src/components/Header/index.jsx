import { useMediaQuery } from "react-responsive";
import Button from "../Button";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <>
            <header className={styles.header}>
                <Link to="/">
                    <img
                        className={styles.logo}
                        src="/logo.png"
                        alt="Logo do Uneflix"
                    />
                </Link>
                {!isMobile && <Button text="Novo vídeo" />}
            </header>
        </>
    );
};

export default Header;
