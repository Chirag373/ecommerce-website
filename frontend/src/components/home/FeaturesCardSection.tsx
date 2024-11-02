import React from "react";
import styles from "../../styles/featuresCardSection.module.css";

export const FeaturesCardSection = () => {
    return (
        <div className={styles.featuresCardContainer}>
            <div className={styles.featureCard}>
                <span className="material-symbols-outlined">local_shipping</span>
                <h2>Free Shipping</h2>
                <p>Upgrade your style today and get FREE shipping on all orders! Don't miss out.</p>
            </div>
            <div className={styles.featureCard}>
                <span className="material-symbols-outlined">license</span>
                <h2>Satisfaction Guarantee</h2>
                <p>Shop confidently with our Satisfaction Guarantee: Love it or get a refund.</p>
            </div>
            <div className={styles.featureCard}>
                <span className="material-symbols-outlined">assured_workload</span>
                <h2>Secure Payment</h2>
                <p>Your security is our priority. Your payments are secure with us.</p>
            </div>
        </div>
    )
}