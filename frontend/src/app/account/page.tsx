import { Navbar } from "@/common components/Navbar";
import { AccountNavigationContainer } from "@/components/profile/AccountNavigation/AccountNavigationBar";
import styles from "../../styles/accountPage.module.css";
import React from "react";
import { ProfileInformationContainer } from "@/components/profile/AccountFunctionality/MyProfileContainer";

const AccountPage = () => {
    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <AccountNavigationContainer />
                <ProfileInformationContainer />
            </div>
        </>
    )
}

export default AccountPage;