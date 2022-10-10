import { Box, Modal } from "@mui/material";
import { useState } from "react";
import GeneralTab from "./Tabs/GeneralTab";
import LocationsTab from "./Tabs/LocationsTab";
import ProfileTab from "./Tabs/ProfileTab";

import { StyledTabs as Tabs, StyledTab as Tab } from "../../customized/Tabs";

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
    const { value } = props;

    switch (value) {
        case 0:
            return <GeneralTab />;
        case 1:
            return <ProfileTab />;
        case 2:
            return <LocationsTab />;
        default:
            return <div>This tab doesn't exists!</div>;
    }
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
                <Box>
                    <Tabs
                        value={value}
                        onChange={(e, type: number) => {
                            setValue(type);
                        }}
                        aria-label="styled tabs example"
                    >
                        <Tab label="General" />
                        <Tab label="Profile" />
                        <Tab label="Locations" />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}></TabPanel>
            </Box>
        </Modal>
    );
};

export default SettingsModal;
