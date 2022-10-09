import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const ProfileTab = () => {
    const [isEditable, setIsEditable] = useState(false);

    return (
        <div
            style={{
                padding: "1rem",
                minHeight: "336.5px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
        >
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
            >
                <div>
                    <img
                        style={{ margin: "12px" }}
                        width="64"
                        alt="profile"
                        src="https://www.freeiconspng.com/thumbs/profile-icon-png/user-icon-png-person-user-profile-icon-20.png"
                    />
                </div>
                <div
                    style={{
                        color: "#9E9E9E",
                        fontWeight: "bold",
                        textAlign: "center",
                        margin: "12px",
                    }}
                >
                    antonic901
                </div>
            </Stack>
            <Grid container>
                <Grid
                    xs={12}
                    md={isEditable ? 6 : 12}
                    sx={{ pr: 0.5, pl: 0.5 }}
                >
                    <TextField
                        sx={{ mb: 1 }}
                        label="Name"
                        // placeholder="Enter your name..."
                        value={"Nikola"}
                        InputProps={{ readOnly: !isEditable }}
                        fullWidth
                    />
                    <TextField
                        sx={{ mb: 1 }}
                        label="Surname"
                        // placeholder="Enter your surname..."
                        value={"Antonic"}
                        InputProps={{ readOnly: !isEditable }}
                        fullWidth
                    />
                    <TextField
                        sx={{ mb: 1 }}
                        label="E-Mail"
                        // placeholder="Enter your e-mail..."
                        value={"antonicnikola6@gmail.com"}
                        InputProps={{ readOnly: !isEditable }}
                        fullWidth
                    />
                </Grid>
                {isEditable && (
                    <Grid
                        xs={12}
                        md={isEditable ? 6 : 12}
                        sx={{ pr: 0.5, pl: 0.5 }}
                    >
                        <TextField
                            sx={{ mb: 1 }}
                            label="Enter old password"
                            placeholder="Type your old password..."
                            type="password"
                            fullWidth
                        />
                        <TextField
                            sx={{ mb: 1 }}
                            label="Enter new password"
                            placeholder="Type your new password..."
                            type="password"
                            fullWidth
                        />
                        <TextField
                            sx={{ mb: 1 }}
                            label="Confirm new password"
                            placeholder="Confirm your new password..."
                            type="password"
                            fullWidth
                        />
                    </Grid>
                )}
            </Grid>
            {!isEditable && (
                <Stack direction="row" justifyContent="end">
                    <Button
                        onClick={() => setIsEditable(true)}
                        startIcon={<EditIcon />}
                    >
                        Edit
                    </Button>
                </Stack>
            )}
            {isEditable && (
                <Stack direction="row" justifyContent="space-between">
                    <Button
                        onClick={() => setIsEditable(false)}
                        startIcon={<ClearIcon />}
                    >
                        Abort
                    </Button>
                    <Button startIcon={<CheckIcon />}>Confirm</Button>
                </Stack>
            )}
        </div>
    );
};

export default ProfileTab;
