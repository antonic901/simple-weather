import { Button, IconButton, TextField } from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import axios from "../../../utils/axios.util";

type User = {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
};

const SignupForm = (props: any) => {
    const user: User = {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
    };
    // const user: User = {
    //     firstName: "Nikola",
    //     lastName: "Antonic",
    //     username: "antonic901",
    //     email: "antonicnikola6@gmail.com",
    //     password: "kinzo123",
    // };

    const handleClick = () => {
        console.log(user);
        axios
            .post("/authentication/register", user)
            .then((r) => {
                console.log(r);
            })
            .catch((e) => {
                console.error(e);
            });
    };

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
                onChange={(e) => {
                    user.firstName = e.target.value;
                }}
            />
            <TextField
                sx={{ mb: 1 }}
                label="Surname"
                placeholder="Enter your surname..."
                fullWidth
                onChange={(e) => {
                    user.lastName = e.target.value;
                }}
            />
            <TextField
                sx={{ mb: 1 }}
                label="Username"
                placeholder="Enter your username..."
                fullWidth
                onChange={(e) => {
                    user.username = e.target.value;
                }}
            />
            <TextField
                sx={{ mb: 1 }}
                label="E-Mail"
                placeholder="Enter your e-mail..."
                fullWidth
                onChange={(e) => {
                    user.email = e.target.value;
                }}
            />
            <TextField
                sx={{ mb: 1 }}
                label="Password"
                placeholder="Type your password..."
                type="password"
                fullWidth
                onChange={(e) => {
                    user.password = e.target.value;
                }}
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
                <Button size="large" color="success" onClick={handleClick}>
                    CREATE
                </Button>
            </div>
        </div>
    );
};

export default SignupForm;
