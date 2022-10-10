import React, { useState } from "react";
import {
    Divider,
    IconButton,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    Slider,
    Stack,
    Switch,
    Typography,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import grey from "@mui/material/colors/grey";

declare module "@mui/material/styles" {
    interface Palette {
        neutral: Palette["primary"];
    }

    // allow configuration using `createTheme`
    interface PaletteOptions {
        neutral?: PaletteOptions["primary"];
    }
}

declare module "@mui/material/Slider" {
    interface SliderPropsColorOverrides {
        neutral: true;
    }
}

declare module "@mui/material/Switch" {
    interface SwitchPropsColorOverrides {
        neutral: true;
    }
}

declare module "@mui/material/Tabs" {
    interface TabsPropsColorOverrides {
        neutral: true;
    }
}

declare module "@mui/material/IconButton" {
    interface IconButtonPropsColorOverrides {
        neutral: true;
    }
}

const theme = createTheme({
    palette: {
        neutral: {
            main: grey[500],
        },
    },
});

const GeneralTab = () => {
    const [anchorSort, setanchorSort] = React.useState<null | HTMLElement>(
        null
    );
    const openSort = Boolean(anchorSort);

    const [anchorInterval, setanchorInterval] =
        React.useState<null | HTMLElement>(null);
    const openInterval = Boolean(anchorInterval);

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
            <Typography color={"#9E9E9E"} fontWeight="bold">
                Refresh interval
            </Typography>
            <Stack
                spacing={2}
                direction="row"
                sx={{ mb: 1 }}
                alignItems="center"
            >
                <RefreshIcon htmlColor="#9E9E9E" />
                <ThemeProvider theme={theme}>
                    <Slider
                        color="neutral"
                        valueLabelDisplay="auto"
                        value={30}
                        min={10}
                        max={60}
                    />
                </ThemeProvider>
            </Stack>
            <Typography color={"#9E9E9E"} fontWeight="bold">
                Sidebar
            </Typography>
            <Stack
                spacing={2}
                direction="row"
                sx={{ mb: 1 }}
                alignItems="center"
                justifyContent="space-between"
            >
                <Typography color={"#9E9E9E"} fontWeight="normal">
                    Enable sorting
                </Typography>
                <ThemeProvider theme={theme}>
                    <Switch color="neutral" defaultChecked />
                </ThemeProvider>
            </Stack>
            <Divider />
            <Stack
                spacing={2}
                direction="row"
                alignItems="center"
                justifyContent="space-between"
            >
                <Typography color={"#9E9E9E"} fontWeight="normal">
                    Sorting order
                </Typography>
                <ThemeProvider theme={theme}>
                    <IconButton
                        id="basic-button"
                        aria-controls={openSort ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={openSort ? "true" : undefined}
                        onClick={(event) => {
                            setanchorSort(event.currentTarget);
                        }}
                        color="neutral"
                    >
                        <KeyboardArrowDownIcon />
                    </IconButton>
                </ThemeProvider>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorSort}
                    open={openSort}
                    onClose={() => setanchorSort(null)}
                    MenuListProps={{
                        "aria-labelledby": "basic-button",
                    }}
                >
                    <MenuItem onClick={() => setanchorSort(null)}>
                        <ListItemIcon>
                            <ArrowUpwardIcon />
                        </ListItemIcon>
                        <ListItemText>Ascending</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={() => setanchorSort(null)}>
                        <ListItemIcon>
                            <ArrowDownwardIcon />
                        </ListItemIcon>
                        <ListItemText>Descending</ListItemText>
                    </MenuItem>
                </Menu>
            </Stack>
            <Stack
                spacing={2}
                direction="row"
                sx={{ mb: 1 }}
                alignItems="center"
                justifyContent="space-between"
            >
                <Typography color={"#9E9E9E"} fontWeight="normal">
                    Interval units
                </Typography>
                <ThemeProvider theme={theme}>
                    <IconButton
                        id="basic-button"
                        aria-controls={openInterval ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={openInterval ? "true" : undefined}
                        onClick={(event) => {
                            setanchorInterval(event.currentTarget);
                        }}
                        color="neutral"
                    >
                        <KeyboardArrowDownIcon />
                    </IconButton>
                </ThemeProvider>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorInterval}
                    open={openInterval}
                    onClose={() => setanchorInterval(null)}
                    MenuListProps={{
                        "aria-labelledby": "basic-button",
                    }}
                >
                    <MenuItem onClick={() => setanchorInterval(null)}>
                        <ListItemText>Hourly</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={() => setanchorInterval(null)}>
                        <ListItemText>Daily</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={() => setanchorInterval(null)}>
                        <ListItemText>Weekly</ListItemText>
                    </MenuItem>
                </Menu>
            </Stack>
            <Typography color={"#9E9E9E"} fontWeight="normal">
                Interval:
            </Typography>
            <Stack
                spacing={2}
                direction="row"
                sx={{ mb: 1 }}
                alignItems="center"
            >
                <KeyboardDoubleArrowRightIcon htmlColor="#9E9E9E" />
                <ThemeProvider theme={theme}>
                    <Slider
                        valueLabelDisplay="auto"
                        color="neutral"
                        min={1}
                        max={48}
                        value={[10, 25]}
                    />
                </ThemeProvider>
                <KeyboardDoubleArrowLeftIcon htmlColor="#9E9E9E" />
            </Stack>
        </div>
    );
};

export default GeneralTab;
