import { Navbar } from "@/common components/Navbar";
import { AccountNavigationContainer } from "@/components/profile/AccountNavigation/AccountNavigationBar";
import styles from "../../styles/accountPage.module.css";
import React from "react";
import { ManageAddressContainer } from "@/components/profile/AccountFunctionality/AddressContainer";

const AccountPage = () => {
    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <AccountNavigationContainer />
                <ManageAddressContainer />
            </div>
        </>
    )
}

export default AccountPage;