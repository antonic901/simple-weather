import { Box, Modal, useMediaQuery, useTheme } from "@mui/material";
import useWindowDimensions from "../../customhooks/useWindowDimensions";

const style = {
  display: "flex",
  // flexDirection: 'row',
  justifyContent: "center",
  alignItems: "center",
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  // border: "2px solid #000",
  borderRadius: 5,
  boxShadow: 24,
  p: 2,
};

const HelpModal = (props: any) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  const { height } = useWindowDimensions();

  return (
    <Modal
      open={props.open}
      onClose={() => {
        props.onClose();
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
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
            Special thanks to community for testing and reporting bugs!
          </div>
        </Box>
      </Box>
    </Modal>
  );
};

export default HelpModal;
