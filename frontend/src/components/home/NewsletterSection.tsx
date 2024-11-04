import React from "react";
import styles from "../../styles/newsletterSection.module.css";

export const Newsletter = () => {
    return (
        <div className={styles.container}>
            <div className={styles.newsLetterText}>
                <h1>Join Our Newsletter</h1>
                <p>We love to surprise our subscribers with occasional gifts.</p>
            </div>
            <div className={styles.newsLetterInputContainer}>
                <input placeholder="Your email address" />
                <button>Subscribe</button>
            </div>
        </div>
    )
}