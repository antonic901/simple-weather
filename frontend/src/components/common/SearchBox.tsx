import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import { Box, SxProps, Theme } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import { countries, CountryType } from "../../utils/restcountries";
import { useState } from "react";

type Props = {
    sx: SxProps<Theme>;
};

const SearchBox = (props: Props) => {
    const [country, setCountry] = useState<CountryType | null>(null);

    return (
        <Card sx={{ padding: 1, ...props.sx }}>
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
                        lg={5}
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
                            options={countries}
                            onChange={(e, input) => {
                                setCountry(input);
                            }}
                            renderOption={(props, option) => (
                                <Box
                                    component="li"
                                    sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                                    {...props}
                                >
                                    <img
                                        loading="lazy"
                                        width="20"
                                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                        alt=""
                                    />
                                    {option.label}
                                </Box>
                            )}
                            renderInput={(params) => {
                                return (
                                    <TextField
                                        {...params}
                                        InputProps={{
                                            ...params.InputProps,
                                            startAdornment: !country ? null : (
                                                <img
                                                    alt=""
                                                    src={`https://flagcdn.com/w20/${country?.code.toLowerCase()}.png`}
                                                    style={{
                                                        height: "20px",
                                                        width: "30px",
                                                        marginLeft: "10px",
                                                        marginRight: "10px",
                                                        borderRadius: "5px",
                                                    }}
                                                />
                                            ),
                                        }}
                                        label="Search country"
                                        placeholder="Enter name of country"
                                    />
                                );
                            }}
                            size="small"
                            fullWidth
                        />
                    </Grid>
                    <Grid
                        xs={12}
                        lg={7}
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
                            popupIcon={<SearchIcon />}
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
