import { Box, Modal, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import GeneralTab from "./Tabs/GeneralTab";
import LocationsTab from "./Tabs/LocationsTab";
import ProfileTab from "./Tabs/ProfileTab";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: 800,
    bgcolor: "background.paper",
    borderRadius: 5,
    boxShadow: 24,
};

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === 0 && <GeneralTab />}
            {value === 1 && <ProfileTab />}
            {value === 2 && <LocationsTab />}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
}

const SettingsModal = (props: any) => {
    const [value, setValue] = useState(0);

    return (
        <Modal
            open={props.open}
            onClose={() => {
                props.onClose();
            }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Tabs
                    value={value}
                    onChange={(e, type: number) => {
                        setValue(type);
                    }}
                    textColor="primary"
                    indicatorColor="primary"
                >
                    <Tab value={0} label="General" {...a11yProps(0)} />
                    <Tab value={1} label="Profile" {...a11yProps(1)} />
                    <Tab value={2} label="Locations" {...a11yProps(2)} />
                </Tabs>
                <TabPanel value={value} index={0}></TabPanel>
                <TabPanel value={value} index={1}>
                    Profile
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Locations
                </TabPanel>
            </Box>
        </Modal>
    );
};

export default SettingsModal;
