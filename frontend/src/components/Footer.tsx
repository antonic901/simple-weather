import { Box, IconButton } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import { useState } from "react";
import SettingsModal from "./Modals/SettingsModal";
import HelpModal from "./Modals/HelpModal";

const Footer = () => {
    const [openSettings, setOpenSettings] = useState(false);
    const [openHelp, setOpenHelp] = useState(false);

    return (
        <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            paddingBottom={1}
            paddingLeft={1}
            paddingRight={1}
        >
            <IconButton
                size="large"
                onClick={() => {
                    setOpenHelp(true);
                }}
            >
                <HelpIcon fontSize="inherit" />
            </IconButton>
            <IconButton
                onClick={() => {
                    setOpenSettings(true);
                }}
                size="large"
            >
                <SettingsIcon fontSize="inherit" />
            </IconButton>
            <SettingsModal
                open={openSettings}
                onClose={() => {
                    setOpenSettings(false);
                }}
            />
            <HelpModal
                open={openHelp}
                onClose={() => {
                    setOpenHelp(false);
                }}
            />
        </Box>
    );
};

export default Footer;
