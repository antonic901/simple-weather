import { Dialog, DialogProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CustomDialog = styled(Dialog)<DialogProps>(
    (
        {
            /* theme */
        }
    ) => ({
        "& .MuiDialog-container": {
            backdropFilter: "blur(8px)",
        },
        "& .MuiDialog-paper": {
            borderRadius: "20px",
            margin: "10px",
        },
    })
);
