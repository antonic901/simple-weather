import { IconButton, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Stack } from "@mui/system";
import SearchBox from "../../../common/SearchBox";
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const LocationsTab = () => {
    const locations: number[] = Array.from(Array(4).keys());

    return (
        <Stack>
            <Stack
                direction={"row"}
                justifyItems="center"
                alignItems="center"
                sx={{ margin: "10px" }}
            >
                <SearchBox
                    sx={{
                        flexGrow: 1,
                        borderRadius: 0,
                        boxShadow: 0,
                        padding: "1px",
                    }}
                />
                <IconButton size="medium" sx={{ padding: 0 }}>
                    <AddIcon fontSize="inherit" />
                </IconButton>
            </Stack>
            <Stack>
                {locations.map((i) => (
                    <Stack
                        key={i}
                        direction="row"
                        justifyContent="space-between"
                    >
                        <div
                            style={{
                                padding: "5px",
                                marginLeft: "10px",
                                marginRight: "10px",
                                marginBottom: "10px",
                                borderRadius: "10px",
                                width: "100%",
                                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                            }}
                        >
                            <Grid container>
                                <Grid
                                    xs={12}
                                    sm={1}
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <img
                                        width="32px"
                                        height="32px"
                                        src="https://cdn-icons-png.flaticon.com/512/330/330553.png"
                                    />
                                </Grid>
                                <Grid
                                    xs={12}
                                    sm={5}
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <Typography
                                        color="#9E9E9E"
                                        fontWeight="bold"
                                    >
                                        Bosnia and Herzegovina
                                    </Typography>
                                </Grid>
                                <Grid
                                    xs={12}
                                    sm={5}
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <div style={{ textAlign: "center" }}>
                                        <Typography
                                            color="#9E9E9E"
                                            fontWeight="bold"
                                        >
                                            Sanski Most, Federation of Bosnia
                                            and Herzegovina
                                        </Typography>
                                    </div>
                                </Grid>
                                <Grid
                                    xs={12}
                                    sm={1}
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <IconButton color="error">
                                        <DeleteForeverIcon fontSize="inherit" />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </div>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    );
};

export default LocationsTab;
