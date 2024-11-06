import React from "react";
import styles from "../styles/navbar.module.css";
import { Logo } from "./Logo";

export const Navbar = () => {
    return (
        <div className={styles.navbarContainer}>
            <Logo />
            <div className={styles.searchBarContainer}>
                <input type="text" placeholder="search the product here...." />
                <button className={styles.searchBarButton}>
                    <span className="material-symbols-outlined">search</span>
                </button>
            </div>
            <div className={styles.quickAccessSection}>
                <span className="material-symbols-outlined">notifications</span>
                <span className="material-symbols-outlined">shopping_cart</span>
                <span className="material-symbols-outlined">person</span>
            </div>
        </div>
    )
}