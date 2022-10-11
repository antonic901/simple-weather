import { Box } from "@mui/material";
import { useState } from "react";
import ForgotPasswordForm from "../common/forms/ForgotPasswordForm";
import LoginForm from "../common/forms/LoginForm";
import SignupForm from "../common/forms/SignupForm";
import { CustomDialog as Dialog } from "../customized/Dialog";

const LoginSignupModal = (props: any) => {
    const [form, setForm] = useState("login");

    const handleClose = () => {
        setForm("login");
        props.onClose();
    };

    let formRender = null;
    switch (form as String) {
        case "login":
            formRender = (
                <LoginForm
                    onChange={(type: string) => {
                        setForm(type);
                    }}
                />
            );
            break;
        case "signup":
            formRender = (
                <SignupForm
                    onChange={(type: string) => {
                        setForm(type);
                    }}
                />
            );
            break;
        case "forgotpassword":
            formRender = (
                <ForgotPasswordForm
                    onChange={(type: string) => {
                        setForm(type);
                    }}
                />
            );
            break;
        default:
            formRender = <div>Unknown form!</div>;
    }

    return (
        <Dialog onClose={handleClose} open={props.open}>
            <Box sx={{ p: 3 }}>{formRender}</Box>
        </Dialog>
    );
};

export default LoginSignupModal;
