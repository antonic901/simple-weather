import { Box, Modal } from "@mui/material";
import { useState } from "react";
import ForgotPasswordForm from "../common/ForgotPasswordForm";
import LoginForm from "../common/LoginForm";
import SignupForm from "../common/SignupForm";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: 400,
    bgcolor: "background.paper",
    // border: "2px solid #000",
    borderRadius: 5,
    boxShadow: 24,
    p: 5,
};

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
        <Modal
            open={props.open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>{formRender}</Box>
        </Modal>
    );
};

export default LoginSignupModal;
