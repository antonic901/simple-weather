import { Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";

import { useState } from "react";
import LoginSignupModal from "./Modals/LoginSignupModal";

const Header = () => {
    const [open, setOpen] = useState(false);

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
            <IconButton onClick={() => {setOpen(true)}} size="large">
                <LoginIcon fontSize="inherit" />
            </IconButton>
            <LoginSignupModal open={open} onClose={() => {setOpen(false)}}/>
        </Box>
    );
};

export default Header;
