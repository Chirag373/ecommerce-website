import React from "react";
import styles from "../../../styles/profileInformationContainer.module.css"

export const ProfileInformationContainer = () => {
    return (
        <div className={styles.profileContainer}>
            <h2>Personal Information</h2>
            <div className={styles.profileInformationInput}>
                <div className={styles.firstLastNameInput}>
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                    <button>Save</button>
                </div>
                <div className={styles.genderInput}>
                    <p>Your Gender</p>
                    <div className={styles.radioContainer}>
                        <div>
                            <input type="radio" />
                            <label htmlFor="">Male</label>
                        </div>
                        <div>
                            <input type="radio" />
                            <label htmlFor="">Female</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.emailAddressContainer}>
                <h2>Email Address</h2>
                <div className={styles.emailAddressInput}>
                    <input type="text" placeholder="Email Address" />
                    <button>Save</button>
                </div>
            </div>
            <div className={styles.mobileNumberContainer}>
                <h2>Mobile Number</h2>
                <div className={styles.mobileNumberInput}>
                    <input type="text" placeholder="Mobile Number" />
                    <button>Save</button>
                </div>
            </div>
        </div>
    )
}