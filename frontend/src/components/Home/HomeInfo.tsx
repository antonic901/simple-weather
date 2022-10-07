import { Box } from "@mui/material";

const HomeInfo = () => {
    const days: number[] = Array.from(Array(7).keys())

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            paddingTop={7}
        >
            <div style={{ color: '#37474F', fontFamily: 'Zelda-DemiBold', fontSize: '1.0rem', marginBottom: "1.5rem" }}>MAY 4 - 10 2020</div>
            <div style={{ display: 'flex', color: 'white', marginTop: 10 }}>
                <div style={{ fontSize: '8rem', fontWeight: 900, marginTop: 17, fontFamily: 'Zelda-DemiBold' }}>10</div>
                <div style={{ fontSize: '3.0rem', fontWeight: 900 }}>&#8451;</div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {days.map(() => {
                    return <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        margin={2}
                    >
                        <div style={{ color: '#37474F', fontFamily: 'Zelda-DemiBold' }}>MONDAY</div>
                        <div style={{ display: 'flex', color: 'white' }}>
                            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: 5, fontFamily: 'Zelda-DemiBold' }}>10</div>
                            <div style={{ fontSize: '1.0rem', fontWeight: 'bold' }}>&#8451;</div>
                        </div>
                    </Box>
                })}
            </div>
        </Box>
    )
}

export default HomeInfo;