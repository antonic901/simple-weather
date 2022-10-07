import { Box, Modal } from "@mui/material";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: 400,
    bgcolor: "background.paper",
    // border: "2px solid #000",
    borderRadius: 5,
    boxShadow: 24,
    p: 5,
};

const HelpModal = (props: any) => {
    return (
        <Modal
            open={props.open}
            onClose={() => {props.onClose()}}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>Help</Box>
        </Modal>
    );
};

export default HelpModal;
