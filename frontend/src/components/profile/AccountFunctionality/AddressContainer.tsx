"use client"

import React, { useState } from "react";
import styles from "../../../styles/manageAddressContainer.module.css"

export const ManageAddressContainer = () => {
    const [selectExpandedForm, setSelectExpandedForm] = useState(false);

    return (
        <div className={styles.addressContainer}>
            <button className={styles.addAddressButton}
                onClick={() => setSelectExpandedForm(true)}
            >
                <span className="material-symbols-outlined">add</span>
                Add A New Address
            </button>
            {selectExpandedForm && (
                <div className={styles.addAddressForm}>
                    <div className={styles.nameMobileNumberInput}>
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Mobile Number" />
                    </div>
                    <div className={styles.pincodeLocalityInput}>
                        <input type="text" placeholder="Pincode" />
                        <input type="text" placeholder="Locality" />
                    </div>
                    <div className={styles.addressInput}>
                        <textarea cols={40} placeholder="Address (Area & Street)" />
                    </div>
                    <div className={styles.cityStateInput}>
                        <input type="text" placeholder="City/District/Town" />
                        <input type="text" placeholder="State" />
                    </div>
                    <div className={styles.landmarkAlternatePhoneInput}>
                        <input type="text" placeholder="Landmark (Optional)" />
                        <input type="text" placeholder="Alternate Phone (Optional)" />
                    </div>
                    <div className={styles.saveCancelInput}>
                        <button>Save</button>
                        <button onClick={() => setSelectExpandedForm(false)}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    )
}