import { Box, Divider } from "@mui/material";
import "../../styles/WeatherWidget.css";

const style = {
    display: "flex",
    background: `linear-gradient(to bottom right, hsl(201.70000000000005, 82.5%, 45.5%) 50%, hsl(193.39999999999998, 99.2%, 79%) 90%)`,
    borderRadius: 5,
    p: 1,
    m: 1,
    mb: 1.5,
};

const WeatherWidget = () => {
    return (
        <Box className="widget" sx={style}>
            <Box
                display="flex"
                flexDirection="column"
                flexGrow={1}
                margin={1}
                justifyContent="space-between"
            >
                <div
                    style={{
                        color: "#37474F",
                        fontFamily: "Zelda-Bold",
                        fontSize: "1.4rem",
                    }}
                >
                    Siberia
                </div>
                <div
                    style={{
                        color: "white",
                        fontFamily: "Zelda-Bold",
                        fontSize: "1.4rem",
                    }}
                >
                    0&#8451;
                </div>
                <div style={{ alignSelf: "center" }}>
                    <img
                        alt="weather-icon"
                        width={84}
                        height={84}
                        src="http://openweathermap.org/img/wn/10d@2x.png"
                    />
                </div>
                <div style={{ color: "#37474F", fontFamily: "Zelda-Bold" }}>
                    Clouds
                </div>
                <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div style={{ color: "white", textAlign: "center" }}>
                        <span
                            style={{ color: "white", fontFamily: "Zelda-Bold" }}
                        >
                            L
                        </span>{" "}
                        :{" "}
                        <span
                            style={{ color: "white", fontFamily: "Zelda-Bold" }}
                        >
                            10&#8451;
                        </span>
                    </div>
                    <div style={{ color: "white", textAlign: "center" }}>
                        <span
                            style={{ color: "white", fontFamily: "Zelda-Bold" }}
                        >
                            H
                        </span>{" "}
                        :{" "}
                        <span
                            style={{ color: "white", fontFamily: "Zelda-Bold" }}
                        >
                            15&#8451;
                        </span>
                    </div>
                </div>
            </Box>
            <Divider sx={{ m: 1 }} orientation="vertical" flexItem />
            <Box display="flex" flexDirection="column" flexGrow={1} margin={1}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        color: "white",
                        marginLeft: 1,
                        marginRight: 1,
                    }}
                >
                    <div
                        style={{
                            color: "#37474F",
                            fontFamily: "Zelda-Bold",
                            textAlign: "center",
                        }}
                    >
                        UV Index
                    </div>
                    <div
                        style={{
                            fontFamily: "Zelda-Bold",
                            textAlign: "center",
                        }}
                    >
                        0.98 of 10
                    </div>
                </div>
                <Divider
                    sx={{ mt: 1, mb: 1 }}
                    orientation="horizontal"
                    flexItem
                />
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        color: "white",
                        marginLeft: 1,
                        marginRight: 1,
                    }}
                >
                    <div
                        style={{
                            color: "#37474F",
                            fontFamily: "Zelda-Bold",
                            textAlign: "center",
                        }}
                    >
                        Wind
                    </div>
                    <div
                        style={{
                            fontFamily: "Zelda-Bold",
                            textAlign: "center",
                        }}
                    >
                        2.6 kmh
                    </div>
                </div>
                <Divider
                    sx={{ mt: 1, mb: 1 }}
                    orientation="horizontal"
                    flexItem
                />
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        color: "white",
                        marginLeft: 1,
                        marginRight: 1,
                    }}
                >
                    <div
                        style={{
                            color: "#37474F",
                            fontFamily: "Zelda-Bold",
                            textAlign: "center",
                        }}
                    >
                        Humidity
                    </div>
                    <div
                        style={{
                            fontFamily: "Zelda-Bold",
                            textAlign: "center",
                        }}
                    >
                        73%
                    </div>
                </div>
                <Divider
                    sx={{ mt: 1, mb: 1 }}
                    orientation="horizontal"
                    flexItem
                />
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        color: "white",
                        marginLeft: 1,
                        marginRight: 1,
                    }}
                >
                    <div style={{ color: "#37474F", fontFamily: "Zelda-Bold" }}>
                        Dew point
                    </div>
                    <div
                        style={{
                            fontFamily: "Zelda-Bold",
                            textAlign: "center",
                        }}
                    >
                        -3.23
                    </div>
                </div>
                <Divider
                    sx={{ mt: 1, mb: 1 }}
                    orientation="horizontal"
                    flexItem
                />
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        color: "white",
                        marginLeft: 1,
                        marginRight: 1,
                    }}
                >
                    <div
                        style={{
                            color: "#37474F",
                            fontFamily: "Zelda-Bold",
                            textAlign: "center",
                        }}
                    >
                        Pressure
                    </div>
                    <div
                        style={{
                            fontFamily: "Zelda-Bold",
                            textAlign: "center",
                        }}
                    >
                        1012 mbar
                    </div>
                </div>
                <Divider
                    sx={{ mt: 1, mb: 1 }}
                    orientation="horizontal"
                    flexItem
                />
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        color: "white",
                        marginLeft: 1,
                        marginRight: 1,
                    }}
                >
                    <div
                        style={{
                            color: "#37474F",
                            fontFamily: "Zelda-Bold",
                            textAlign: "center",
                        }}
                    >
                        Visibility
                    </div>
                    <div
                        style={{
                            fontFamily: "Zelda-Bold",
                            textAlign: "center",
                        }}
                    >
                        9.543 km
                    </div>
                </div>
            </Box>
        </Box>
    );
};

export default WeatherWidget;
