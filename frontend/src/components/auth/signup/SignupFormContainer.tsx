import React from "react";
import styles from "../../../styles/loginFormContainer.module.css"
import GoogleLogo from "../../../../public/common icons/google_logo.svg"
import Image from "next/image";

export const SignupFormContainer = () => {
    return (
        <div className={styles.container}>
            <button className={styles.googleButton}>
                <Image src={GoogleLogo} alt="google logo" width={20} />
                Continue with Google
            </button>
            <div className={styles.horizontalLineText}>OR</div>
            <div className={styles.formInputContainer}>
                <div className={styles.formInput}>
                    <label htmlFor="email">Name</label>
                    <input type="text" />
                </div>
                <div className={styles.formInput}>
                    <label htmlFor="email">Email</label>
                    <input type="text" />
                </div>
                <div className={styles.formInput}>
                    <label htmlFor="email">Password</label>
                    <input type="text" />
                </div>
                <p>By creating an account you agree with our Terms of Service, Privacy Policy.</p>
                <button className={styles.signupButton}>Sign up</button>
            </div>
            <p className={styles.redirectSignup}>Don't have an account? Sign up</p>
        </div>
    )
}