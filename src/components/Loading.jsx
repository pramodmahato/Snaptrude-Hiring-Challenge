import { Box } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';

function Loading() {
    return (<Box 
        className="loading">
            <CircularProgress 
            className="progress-bar" 
            style={{ marginTop: "40px" }}/>
            </Box>)
}
export default Loading;