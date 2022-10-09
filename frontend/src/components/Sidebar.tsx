import React from 'react';

import Drawer from '@mui/material/Drawer';
import { Box, IconButton, useMediaQuery, useTheme } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import WeatherWidget from './common/WeatherWidget';

const Sidebar = (props: any) => {
    const theme = useTheme()
    const isPhone = useMediaQuery(theme.breakpoints.between("xs", "sm"))

    const toggleDrawer =
        (open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }
                props.toggleSidebar(open)
            };


    const widgets: JSX.Element[] = []
    for (let i = 0; i < 1; i++) {
        widgets.push(<WeatherWidget key={i} />)
    }

    const list = (anchor: string) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            minWidth={isPhone ? '100vw' : 400}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: "center", paddingLeft: "15px", paddingTop: "10px" }}>
                <div style={{ color: 'white', fontFamily: 'Zelda-Bold' }}>
                    <div style={{ marginBottom: "5px" }}>Simple Weather</div>
                    <div>
                        Powered by OpenWeather.com
                    </div>
                </div>
                <IconButton size="large"><ArrowBackIcon style={{ color: 'white' }} fontSize='inherit' /></IconButton>
            </div>
            {widgets.map(element => { return element })}
        </Box >
    );

    return (
        <div>
            < Drawer
                anchor={props.anchor}
                open={props.status}
                onClose={toggleDrawer(false)}
            >
                {list(props.anchor)}
            </Drawer >
        </div >
    );
}

export default Sidebar;