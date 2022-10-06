import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";

const SearchBox = () => {
    return (
        <Card sx={{ width: 610, borderRadius: "16px", padding: 1 }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img
                        style={{ alignSelf: "center" }}
                        alt="icon"
                        width="58"
                        height="58"
                        src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png"
                    />
                </div>
                <Grid container style={{ flexGrow: 1 }}>
                    <Grid
                        xs={12}
                        lg={6}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                            marginBottom: 0.5,
                            marginTop: 0.5,
                            paddingLeft: 0.5,
                            paddingRight: 1,
                        }}
                    >
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={["A", "B", "C"]}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Please enter your country"
                                    placeholder="Enter name of country"
                                />
                            )}
                            size="small"
                            fullWidth
                        />
                    </Grid>
                    <Grid
                        xs={12}
                        lg={6}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                            marginTop: 0.5,
                            marginBottom: 0.5,
                            paddingLeft: 0.5,
                            paddingRight: 1,
                        }}
                    >
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={["A", "B", "C"]}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Please enter your location"
                                    placeholder="Enter name of city"
                                />
                            )}
                            size="small"
                            fullWidth
                        />
                    </Grid>
                </Grid>
            </div>
        </Card>
    );
};

export default SearchBox;
