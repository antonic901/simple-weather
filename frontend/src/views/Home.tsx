import { Box } from "@mui/material";
import Header from "../components/Header";
import SearchBox from "../components/common/SearchBox";
import Footer from "../components/Footer";
import HomeInfo from "../components/Home/HomeInfo";

const Home = () => {
    return (
        <Box
            sx={{ background: `linear-gradient(to bottom right, ${'#cee5f3'} 50%, ${'#fff2e2'} 90%)` }}
            display="flex"
            flexDirection="column"
            height="100vh"
        >
            <Header />
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
            <Footer />
        </Box>
    );
};

export default Home;
