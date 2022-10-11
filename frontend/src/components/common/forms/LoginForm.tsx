import {
    Button,
    Checkbox,
    Divider,
    FormControlLabel,
    IconButton,
    Stack,
    TextField,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import GithubIcon from "@mui/icons-material/GitHub";
import "../../../styles/LoginForm.css";

const LoginForm = (props: any) => {
    return (
        <div>
            <div
                style={{
                    color: "#9E9E9E",
                    fontWeight: "bold",
                    textAlign: "center",
                }}
            >
                To continue, log in to Simple Weather.
            </div>
            <Divider sx={{ margin: 2 }} />
            <TextField
                sx={{ mb: 1 }}
                label="Username"
                placeholder="enter username"
                fullWidth
            />
            <TextField
                id="1"
                sx={{ mt: 1 }}
                label="Password"
                placeholder="enter password"
                type="password"
                fullWidth
            />
            <FormControlLabel
                sx={{ mt: 1, mb: 1 }}
                control={<Checkbox />}
                label={
                    <div
                        style={{
                            color: "#9E9E9E",
                            fontWeight: "normal",
                            textAlign: "center",
                        }}
                    >
                        Remember Me
                    </div>
                }
            />
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Button sx={{ width: "100%" }} variant="outlined">
                    Sign in
                </Button>
            </div>
            <div style={{ textAlign: "center", marginTop: "10px" }}>
                <button
                    onClick={() => {
                        props.onChange("forgotpassword");
                    }}
                    className="button"
                >
                    Forgot Your Password?
                </button>
            </div>
            <Divider sx={{ margin: 2 }}>
                <span
                    style={{
                        color: "#9E9E9E",
                        fontWeight: "normal",
                    }}
                >
                    CONTINUE WITH
                </span>
            </Divider>
            <Stack
                direction="row"
                justifyContent="center"
                spacing={2}
                marginTop={2}
            >
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
            <Divider sx={{ margin: 2 }}>
                <span
                    style={{
                        color: "#9E9E9E",
                        fontWeight: "normal",
                    }}
                >
                    OR
                </span>
            </Divider>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                    sx={{ width: "100%" }}
                    variant="contained"
                    color="success"
                    onClick={() => {
                        props.onChange("signup");
                    }}
                >
                    Sign Up
                </Button>
            </div>
        </div>
    );
};

export default LoginForm;
