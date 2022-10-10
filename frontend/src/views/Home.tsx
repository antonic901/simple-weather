import { Container, Stack } from "@mui/material";
import SearchBox from "../components/common/SearchBox";
import HomeInfo from "../components/Home/HomeInfo";

const Home = () => {
    return (
        <Stack sx={{ flexGrow: 1, justifyContent: "center" }}>
            <Container
                sx={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <SearchBox
                    sx={{ flexGrow: 1, maxWidth: 610, borderRadius: "16px" }}
                />
            </Container>
            <HomeInfo />
        </Stack>
    );
};

export default Home;
