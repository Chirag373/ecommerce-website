import { Navbar } from "@/common components/Navbar";
import { SignupFormContainer } from "@/components/auth/signup/SignupFormContainer";
import React from "react";

const SignupPage = () => {
    return (
        <>
            <Navbar />
            <SignupFormContainer />
        </>
    )
}

export default SignupPage;