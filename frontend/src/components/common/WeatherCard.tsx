import { Card, Typography } from "@mui/material";

type Props = {
    label1: string;
    label2: string;
    label3: string;
};

const WeatherCard = (props: Props) => {
    return (
        <Card sx={{ margin: "5px" }}>
            <div style={{ padding: "10px" }}>
                <Typography textAlign="center" fontWeight="bold">
                    {props.label1}
                </Typography>
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
                        src="http://openweathermap.org/img/wn/10d@2x.png"
                    />
                </div>
                <Typography
                    textAlign="center"
                    color="#BDBDBD"
                    fontWeight="bold"
                >
                    Rain
                </Typography>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "15px",
                    }}
                >
                    {" "}
                    <Typography
                        textAlign="center"
                        color="#BDBDBD"
                        fontWeight="bold"
                        fontSize="15px"
                    >
                        {props.label2}
                    </Typography>
                    <Typography
                        textAlign="center"
                        color="#BDBDBD"
                        fontWeight="bold"
                        fontSize="15px"
                    >
                        20&#8451;
                    </Typography>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    {" "}
                    <Typography
                        textAlign="center"
                        color="#BDBDBD"
                        fontWeight="bold"
                        fontSize="15px"
                    >
                        {props.label3}
                    </Typography>
                    <Typography
                        textAlign="center"
                        color="#BDBDBD"
                        fontWeight="bold"
                        fontSize="15px"
                    >
                        20&#8451;
                    </Typography>
                </div>
            </div>
        </Card>
    );
};

export default WeatherCard;
