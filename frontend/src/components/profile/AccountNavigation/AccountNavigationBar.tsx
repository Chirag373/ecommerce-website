import React from "react";
import styles from "../../../styles/accountNavigationBar.module.css"

export const AccountNavigationContainer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.accountNavigationListContainer}>
                <div>
                    <span className="material-symbols-outlined">manage_accounts</span>
                    My Profile
                </div>
                <div>
                    <span className="material-symbols-outlined">local_shipping</span>
                    Address
                </div>
                <div>
                    <span className="material-symbols-outlined">shopping_cart</span>
                    Orders
                </div>
                <div>
                    <span className="material-symbols-outlined">favorite</span>
                    WishList
                </div>
                <div>
                    <span className="material-symbols-outlined">logout</span>
                    Logout
                </div>
            </div>
        </div>
    )
}