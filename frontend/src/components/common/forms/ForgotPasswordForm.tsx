import { Button, IconButton, TextField } from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

import { createTheme, ThemeProvider } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}


const theme = createTheme({
  palette: {
    neutral: {
      main: '#9E9E9E',
      contrastText: '#fff',
    },
  },
});

const ForgotPasswordForm = (props: any) => {
    return (
        <div>
            <div style={{}}>
                <h1
                    style={{
                        color: "#9E9E9E",
                        fontWeight: "bold",
                        textAlign: "center",
                    }}
                >
                    Forgot your password
                </h1>
                <h5
                    style={{
                        color: "#9E9E9E",
                        fontWeight: "normal",
                        textAlign: "center",
                    }}
                >
                    Please enter the email address you'd like your password
                    reset information sent to
                </h5>
                <TextField
                    label="Enter e-mail address"
                    placeholder="Type your e-mail address..."
                    fullWidth
                />
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: 20,
                    }}
                >
                    <IconButton
                        onClick={() => {
                            props.onChange("login");
                        }}
                    >
                        <ArrowBackOutlinedIcon />
                    </IconButton>
                    <ThemeProvider theme={theme}>
                      <Button color="neutral" size="large"><span style={{fontWeight: 'bold'}}>Request reset link</span></Button>
                    </ThemeProvider>
                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordForm;
