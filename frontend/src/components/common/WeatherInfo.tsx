import { Divider, Stack, SxProps, Theme, Typography } from "@mui/material";

type Props = {
    sx: SxProps<Theme>;
};

const WeatherInfo = (props: Props) => {
    return (
        <Stack sx={{ ...props.sx }}>
            <div
                style={{
                    textAlign: "center",
                    color: "#455A64",
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                    marginBottom: "10px",
                }}
            >
                CURRENT WEATHER CONDITIONS
            </div>
            <Divider />
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Typography color="#546E7A" fontWeight="bold">
                    Current condition:
                </Typography>
                <Typography color="#78909C" fontWeight="bold">
                    Clouds
                </Typography>
            </div>
            <Divider />
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Typography color="#546E7A" fontWeight="bold">
                    Feels like:
                </Typography>
                <Typography color="#78909C" fontWeight="bold">
                    10&#8451;
                </Typography>
            </div>
            <Divider />
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Typography color="#546E7A" fontWeight="bold">
                    UV Index:
                </Typography>
                <Typography color="#78909C" fontWeight="bold">
                    0 of 10
                </Typography>
            </div>
            <Divider />
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Typography color="#546E7A" fontWeight="bold">
                    Wind:
                </Typography>
                <Typography color="#78909C" fontWeight="bold">
                    1.65 kmh
                </Typography>
            </div>
            <Divider />
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Typography color="#546E7A" fontWeight="bold">
                    Humidity:
                </Typography>
                <Typography color="#78909C" fontWeight="bold">
                    84%
                </Typography>
            </div>
            <Divider />
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Typography color="#546E7A" fontWeight="bold">
                    Dew point:
                </Typography>
                <Typography color="#78909C" fontWeight="bold">
                    7&#8451;
                </Typography>
            </div>
            <Divider />
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Typography color="#546E7A" fontWeight="bold">
                    Pressure:
                </Typography>
                <Typography color="#78909C" fontWeight="bold">
                    1016 mbar
                </Typography>
            </div>
        </Stack>
    );
};

export default WeatherInfo;
