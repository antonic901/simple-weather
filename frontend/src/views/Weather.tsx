import {
    createTheme,
    Divider,
    IconButton,
    ListItemText,
    Menu,
    MenuItem,
    Stack,
    ThemeProvider,
    Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import React, { useState } from "react";
import WeatherCard from "../components/common/WeatherCard";
import WeatherInfo from "../components/common/WeatherInfo";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { grey } from "@mui/material/colors";
import { useParams } from "react-router-dom";

const theme = createTheme({
    palette: {
        neutral: {
            main: grey[500],
        },
    },
});

const Weather = () => {
    let { id } = useParams();
    console.log("LOGGING: opening information for weather with ID: " + id);

    const [anchor, setanchor] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchor);
    const [range, setRange] = useState(8);

    const daily: number[] = Array.from(Array(8).keys());
    const hourly: number[] = Array.from(Array(range).keys());

    return (
        <Stack sx={{ flexGrow: 1 }}>
            <Grid container>
                <Grid
                    xs={12}
                    sm={8}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <div
                        style={{
                            textAlign: "center",
                            color: "#37474F",
                            fontWeight: "bold",
                            fontSize: "2.2rem",
                        }}
                    >
                        Sanski Most, Bosnia and Herzegovina
                    </div>
                    <div
                        style={{
                            textAlign: "center",
                            color: "#546E7A",
                            fontWeight: "bold",
                            fontSize: "1.2rem",
                        }}
                    >
                        Wed Apr 27 2022 - 02:58
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <img
                            alt="weather-icon"
                            width={128}
                            height={128}
                            src="https://openweathermap.org/img/wn/10d@2x.png"
                        />
                        <div
                            style={{
                                color: "white",
                                fontSize: "2.5rem",
                            }}
                        >
                            <span style={{ fontFamily: "Zelda-Bold" }}>10</span>
                            &#8451;
                        </div>
                    </div>
                </Grid>
                <Grid
                    xs={12}
                    sm={4}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <WeatherInfo sx={{ flexGrow: 1, mx: 3 }} />
                </Grid>
            </Grid>
            <Typography
                color="#546E7A"
                fontWeight="bold"
                sx={{ mx: "10px", my: "5px" }}
            >
                Daily weather:
            </Typography>
            <Divider sx={{ mx: "10px" }} />
            <Grid container columns={8} padding="10px">
                {daily.map((i) => (
                    <Grid key={i} xs={4} sm={2} lg={1}>
                        <WeatherCard
                            label1="Thursday"
                            label2="High"
                            label3="Low"
                        />
                    </Grid>
                ))}
            </Grid>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginLeft: "10px",
                    marginRight: "10px",
                    marginTop: "5px",
                }}
            >
                <Typography color="#546E7A" fontWeight="bold">
                    Hourly weather:
                </Typography>
                <div>
                    <Typography color="#546E7A" fontWeight="bold">
                        Hours: <span>{range}</span>
                        <ThemeProvider theme={theme}>
                            <IconButton
                                id="basic-button"
                                aria-controls={open ? "basic-menu" : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? "true" : undefined}
                                onClick={(event) => {
                                    setanchor(event.currentTarget);
                                }}
                                color="neutral"
                            >
                                <KeyboardArrowDownIcon />
                            </IconButton>
                        </ThemeProvider>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchor}
                            open={open}
                            onClose={() => setanchor(null)}
                            MenuListProps={{
                                "aria-labelledby": "basic-button",
                            }}
                        >
                            {Array.from(Array(6).keys()).map((i) => (
                                <MenuItem
                                    key={i}
                                    onClick={() => {
                                        setRange((i + 1) * 8);
                                        setanchor(null);
                                    }}
                                >
                                    <ListItemText>{(i + 1) * 8}</ListItemText>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Typography>
                </div>
            </div>
            <Divider sx={{ mx: "10px" }} />
            <Grid container columns={8} padding="10px">
                {hourly.map((i) => (
                    <Grid key={i} xs={4} sm={2} lg={1}>
                        <WeatherCard
                            label1="2 AM"
                            label2="Temperature"
                            label3="Feels like"
                        />
                    </Grid>
                ))}
            </Grid>
        </Stack>
    );
};

export default Weather;
