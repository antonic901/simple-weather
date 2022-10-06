import { Box, IconButton } from "@mui/material";
import AppBar from "../components/AppBar";
import SearchBox from "../components/common/SearchBox";
import HomeInfo from "../components/Home/HomeInfo";

const Home = () => {
    return (
        <Box
            sx={{background: `linear-gradient(to bottom right, ${'#cee5f3'} 50%, ${'#fff2e2'} 90%)`}}
        >
            <AppBar />
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
                sx={{pr: 2, pl: 2}}
            >
                <SearchBox />
                <HomeInfo />
            </Box>
        </Box>
    );
};

export default Home;
