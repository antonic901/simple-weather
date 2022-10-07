import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControlLabel,
    IconButton,
    Modal,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import GithubIcon from "@mui/icons-material/GitHub";
import CircleChecked from "@mui/icons-material/CheckCircleOutline";
import CircleUnchecked from "@mui/icons-material/RadioButtonUnchecked";

import { red } from "@mui/material/colors";

import { useState } from "react";
import { fontWeight } from "@mui/system";

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
    p: 5
};

const AppBar = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            paddingTop={1}
            paddingLeft={1}
            paddingRight={1}
        >
            <IconButton size="large">
                <MenuIcon fontSize="inherit" />
            </IconButton>
            <IconButton onClick={handleOpen} size="large">
                <LoginIcon fontSize="inherit" />
            </IconButton>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div
                        style={{
                            color: "#9E9E9E",
                            fontWeight: "bold",
                            textAlign: "center",
                        }}
                    >
                        To continue, log in to Simple Weather.
                    </div>
                    {/* <Stack direction="column" spacing={2} marginTop={2}>
                        <Button
                            variant="contained"
                            startIcon={<FacebookIcon />}
                        >
                            Continue with Facebook
                        </Button>
                        <Button
                            variant="contained"
                            color="error"
                            startIcon={<GoogleIcon />}
                        >
                            Continue with Google
                        </Button>
                        <Button
                            color="info"
                            variant="outlined"
                            startIcon={<GithubIcon />}
                        >
                            Continue with GitHub
                        </Button>
                    </Stack> */}
                    <Divider sx={{ margin: 2 }} />
                    <TextField
                        sx={{ mb: 1 }}
                        label="Username"
                        placeholder="enter username"
                        fullWidth
                    />
                    <TextField
                        sx={{ mt: 1 }}
                        label="Password"
                        placeholder="enter password"
                        type="password"
                        fullWidth
                    />
                    <FormControlLabel
                        sx={{ mt: 1, mb: 1 }}
                        control={<Checkbox />}
                        label={<div style={{ color: '#37474F', fontWeight: 450 }}>Remember Me</div>}
                    />
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Button sx={{ width: "100%" }} variant="outlined">
                            Sign in
                        </Button>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '10px' }}><a href="www.google.com" style={{ color: '#9dcae6', fontWeight: 'bolder', textDecoration: 'none' }}>Forgot Your Password?</a></div>
                    <Divider sx={{ margin: 2 }} ><span style={{ color: '#37474F' }}>CONTINUE WITH</span></Divider>
                    <Stack direction="row" justifyContent='center' spacing={2} marginTop={2}>
                        <IconButton color="primary" size="large">
                            <FacebookIcon fontSize="inherit" />
                        </IconButton>
                        <IconButton color="error" size="large">
                            <GoogleIcon fontSize="inherit" />
                        </IconButton>
                        <IconButton color="info" size="large">
                            <GithubIcon fontSize="inherit" />
                        </IconButton>
                    </Stack>
                    <Divider sx={{ margin: 2 }} ><span style={{ color: '#37474F' }}>OR</span></Divider>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Button sx={{ width: "100%" }} variant="contained" color="success">
                            Sign Up
                        </Button>
                    </div>
                </Box>
            </Modal>
        </Box>
    );
};

export default AppBar;
