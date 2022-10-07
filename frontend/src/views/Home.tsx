import { Box, IconButton } from "@mui/material";
import AppBar from "../components/AppBar";
import SearchBox from "../components/common/SearchBox";
import HomeInfo from "../components/Home/HomeInfo";

const Home = () => {
    return (
        <Box
            sx={{ background: `linear-gradient(to bottom right, ${'#cee5f3'} 50%, ${'#fff2e2'} 90%)` }}
            display="flex"
            flexDirection="column"
            height="100vh"
        >
            <AppBar />
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="stretch"
                sx={{ pr: 2, pl: 2 }}
                flex={1}
            >
                <SearchBox />
                <HomeInfo />
            </Box>
            <div style={{ height: 60 }}></div>
        </Box>
    );
};

export default Home;
