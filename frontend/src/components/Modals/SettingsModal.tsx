import { Box, Modal, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: 400,
    bgcolor: "background.paper",
    // border: "2px solid #000",
    borderRadius: 5,
    boxShadow: 24,
    // p: 5,
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
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const SettingsModal = (props: any) => {
    const [value, setValue] = useState(0)

    return (
        <Modal
            open={props.open}
            onClose={() => {props.onClose()}}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
              <Tabs
                value={value}
                onChange={(e, type: number) => {setValue(type)}}
                textColor="primary"
                indicatorColor="primary"
              >
                <Tab value={0} label="General" {...a11yProps(0)}/>
                <Tab value={1} label="Profile" {...a11yProps(1)}/>
                <Tab value={2} label="Locations" {...a11yProps(2)}/>
              </Tabs>
              <TabPanel value={value} index={0}>
                General
              </TabPanel>
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
