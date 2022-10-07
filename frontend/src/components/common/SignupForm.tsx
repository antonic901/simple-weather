import { Button, IconButton, TextField } from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

const SignupForm = (props: any) => {
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                    style={{ alignSelf: "center" }}
                    alt="icon"
                    width="58"
                    height="58"
                    src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png"
                />
            </div>
            <div
                style={{
                    color: "#9E9E9E",
                    fontWeight: "bold",
                    textAlign: "center",
                }}
            >
                <h2>Create your Simple Weather Account</h2>
            </div>
            <TextField
                sx={{ mb: 1 }}
                label="Name"
                placeholder="Enter your name..."
                fullWidth
            />
            <TextField
                sx={{ mb: 1 }}
                label="Surname"
                placeholder="Enter your surname..."
                fullWidth
            />
            <TextField
                sx={{ mb: 1 }}
                label="E-Mail"
                placeholder="Enter your e-mail..."
                fullWidth
            />
            <TextField
                sx={{ mb: 1 }}
                label="Password"
                placeholder="Type your password..."
                type="password"
                fullWidth
            />
            <TextField
                sx={{ mb: 1 }}
                label="Confirm Password"
                placeholder="Confirm your password..."
                type="password"
                fullWidth
            />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <IconButton
                    onClick={() => {
                        props.onChange("login");
                    }}
                >
                    <ArrowBackOutlinedIcon />
                </IconButton>
                <Button size="large" color="success">
                    CREATE
                </Button>
            </div>
        </div>
    );
};

export default SignupForm;
