import { Box } from "@mui/material";
import SearchBox from "../components/common/SearchBox";
import HomeInfo from "../components/Home/HomeInfo";

const Home = () => {
    return (
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
    );
};

export default Home;
