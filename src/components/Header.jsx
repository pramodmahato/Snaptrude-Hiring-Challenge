import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import snaptrudeLogo from "../assets/snaptrude.png"
import '../styles/Header.css';

function Header() {
    return (
        <AppBar position="static">
            <Container maxWidth="xl" >
                <Toolbar>
                    <Box className="header-logo" >
                        <img src={snaptrudeLogo} alt="Snaptrude Logo" height="40px" />
                    </Box>
                    <Box className="header-text">
                        <h5>Map Visualizer</h5>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;