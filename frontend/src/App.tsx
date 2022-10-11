import { Box } from "@mui/material";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./views/Home";
import Weather from "./views/Weather";

function App() {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <div>
            <Box
                sx={{
                    background: `linear-gradient(to bottom right, ${"#cee5f3"} 50%, ${"#fff2e2"} 90%)`,
                }}
                display="flex"
                flexDirection="column"
                minHeight="100vh"
            >
                <Header openSidebar={() => setShowSidebar(true)} />
                {/* <Home /> */}
                <Weather />
                <Footer />
            </Box>
            <Sidebar
                anchor="left"
                status={showSidebar}
                toggleSidebar={(state: boolean) => {
                    setShowSidebar(state);
                }}
            />
        </div>
    );
}

export default App;
