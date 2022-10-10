import { Box } from "@mui/material";
import { useState } from "react";
import GeneralTab from "./Tabs/GeneralTab";
import LocationsTab from "./Tabs/LocationsTab";
import ProfileTab from "./Tabs/ProfileTab";

import { CustomDialog as Dialog } from "../../customized/Dialog";
import { StyledTabs as Tabs, StyledTab as Tab } from "../../customized/Tabs";

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
        <Dialog
            onClose={() => {
                props.onClose();
            }}
            open={props.open}
            fullWidth
            maxWidth="md"
        >
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
        </Dialog>
    );
};

export default SettingsModal;
