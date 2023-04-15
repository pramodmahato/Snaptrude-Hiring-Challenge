import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import snaptrudeLogo from "../assets/snaptrude.png"

function Header() {
  return (
    <AppBar position="static" style={{backgroundColor:"#000001"}}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters style={{backgroundColor:"#000001"}}>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' }, justifyContent: {xs: 'center', md: 'start'} }} >
          <img src={snaptrudeLogo} alt="Snaptrude Logo" height="40px"/>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'normal', marginRight:"13%" }}>
            <h5>Map Visualizer</h5>
          </Box>


        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;