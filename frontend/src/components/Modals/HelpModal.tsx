import { Box, useMediaQuery, useTheme } from "@mui/material";
import useWindowDimensions from "../../customhooks/useWindowDimensions";
import { CustomDialog as Dialog } from "../customized/Dialog";

const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    p: 1,
};

const HelpModal = (props: any) => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

    const { height } = useWindowDimensions();

    return (
        <Dialog open={props.open} onClose={() => props.onClose(false)}>
            <Box sx={style} flexDirection={isDesktop ? "row" : "column"}>
                {height < 720 ? (
                    ""
                ) : (
                    <div>
                        <img
                            style={{ marginTop: "10px" }}
                            alt="icon"
                            width="136"
                            height="136"
                            src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png"
                        />
                    </div>
                )}
                <Box display="flex" flexDirection="column" sx={{ p: 2.5 }}>
                    <div
                        style={{
                            color: "#9E9E9E",
                            fontWeight: "900",
                            fontSize: "1.7rem",
                        }}
                    >
                        Simple Weather
                    </div>
                    <div
                        style={{
                            marginTop: "10px",
                            color: "#9E9E9E",
                            fontWeight: "bold",
                            fontSize: "1.2rem",
                        }}
                    >
                        Version: 0.0.1
                    </div>
                    <div
                        style={{
                            marginTop: "6px",
                            color: "#9E9E9E",
                            fontWeight: "500",
                            fontSize: "1.0rem",
                        }}
                    >
                        Using React.js 18, Compiled against Node.js v18
                    </div>
                    <div
                        style={{
                            marginTop: "6px",
                            color: "#9E9E9E",
                            fontWeight: "500",
                            fontSize: "1.0rem",
                        }}
                    >
                        Copyright (C) 2021-2022, antonic901, A.K.A RADIORAMA
                    </div>
                    <div
                        style={{
                            marginTop: "20px",
                            color: "#9E9E9E",
                            fontWeight: "500",
                            fontSize: "1.0rem",
                        }}
                    >
                        Website:{" "}
                        <a href="https://www.antonicnikola.com">
                            https://www.antonicnikola.com
                        </a>
                    </div>
                    <div
                        style={{
                            marginTop: "2px",
                            color: "#9E9E9E",
                            fontWeight: "500",
                            fontSize: "1.0rem",
                        }}
                    >
                        GitHub:{" "}
                        <a href="https://github.com/antonic901/simple-weather">
                            https://github.com/antonic901/simple-weather
                        </a>
                    </div>
                    <div
                        style={{
                            marginTop: "2px",
                            color: "#9E9E9E",
                            fontWeight: "500",
                            fontSize: "1.0rem",
                        }}
                    >
                        Issue tracker:{" "}
                        <a href="https://github.com/antonic901/simple-weather/issues">
                            https://github.com/antonic901/simple-weather/issues
                        </a>
                    </div>
                    <div
                        style={{
                            marginTop: "2px",
                            color: "#9E9E9E",
                            fontWeight: "500",
                            fontSize: "1.0rem",
                        }}
                    >
                        Developer's E-Mail:{" "}
                        <a href="mailto:antonicnikola6@gmail.com">
                            antonicnikola6@gmail.com
                        </a>
                    </div>
                    <div
                        style={{
                            marginTop: "25px",
                            color: "#9E9E9E",
                            fontWeight: "500",
                            fontSize: "1.0rem",
                        }}
                    >
                        The logo is designed by community. Support Open Source!
                    </div>
                    <div
                        style={{
                            marginTop: "5px",
                            color: "#9E9E9E",
                            fontWeight: "500",
                            fontSize: "1.0rem",
                        }}
                    >
                        Special thanks to community for testing and reporting
                        bugs!
                    </div>
                </Box>
            </Box>
        </Dialog>
    );
};

export default HelpModal;
