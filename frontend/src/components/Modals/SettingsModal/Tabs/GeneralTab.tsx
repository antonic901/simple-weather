import { Divider, Slider, Stack, Switch, Typography } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

const GeneralTab = () => {
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
            <Typography>Refresh interval</Typography>
            <Stack
                spacing={2}
                direction="row"
                sx={{ mb: 1 }}
                alignItems="center"
            >
                <RefreshIcon />
                <Slider valueLabelDisplay="auto" value={30} min={10} max={60} />
            </Stack>
            <Typography>Sidebar</Typography>
            <Stack
                spacing={2}
                direction="row"
                sx={{ mb: 1 }}
                alignItems="center"
                justifyContent="space-between"
            >
                <Typography>Enable sorting</Typography>
                <Switch defaultChecked />
            </Stack>
            <Divider />
            <Stack
                spacing={2}
                direction="row"
                sx={{ mb: 1 }}
                alignItems="center"
                justifyContent="space-between"
            >
                <Typography>Sorting order</Typography>
                <Switch defaultChecked />
            </Stack>
            <Stack
                spacing={2}
                direction="row"
                sx={{ mb: 1 }}
                alignItems="center"
                justifyContent="space-between"
            >
                <Typography>Interval units</Typography>
                <Switch defaultChecked />
            </Stack>
            <Typography>Interval:</Typography>
            <Stack
                spacing={2}
                direction="row"
                sx={{ mb: 1 }}
                alignItems="center"
            >
                <KeyboardDoubleArrowRightIcon />
                <Slider
                    valueLabelDisplay="auto"
                    min={1}
                    max={48}
                    value={[10, 25]}
                />
                <KeyboardDoubleArrowLeftIcon />
            </Stack>
        </div>
    );
};

export default GeneralTab;
