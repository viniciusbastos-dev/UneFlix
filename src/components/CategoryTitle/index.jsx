import React from "react";
import styles from "./CategoryTitle.module.css";

const CategoryTitle = ({ category, bigger }) => {
    return (
        <div
            className={bigger ? styles.bigger : styles.container}
            style={{ backgroundColor: "var(--color-frontend)" }}
        >
            <h1 className={bigger ? styles.biggerTitle : styles.title}>
                {category}
            </h1>
        </div>
    );
};

export default CategoryTitle;
