import styles from "./Button.module.css";

const Button = ({ text, buttonStyle }) => {
    const buttonStyleClass =
        buttonStyle === "primary"
            ? styles.primary
            : buttonStyle === "secondary"
            ? styles.secondary
            : "";

    return (
        <>
            <button className={`${styles.buttonAction} ${buttonStyleClass} `}>
                {text}
            </button>
        </>
    );
};

export default Button;
