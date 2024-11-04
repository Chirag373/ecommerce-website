import { Navbar } from "@/common components/Navbar";
import { LoginFormContainer } from "@/components/auth/login/LoginFormContainer";
import React from "react";

const LoginPage = () => {
    return (
        <>
            <Navbar />
            <LoginFormContainer />
        </>
    )
}

export default LoginPage;