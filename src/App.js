import React, { useState } from "react";
import SearchLocation from "./components/SearchLocation";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Header from "./components/Header";
import './App.css'

function App() {
  const handleLocationSelect = (location) => {
    console.log(location); // Do something with the selected location
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" >
        <Box sx={{ bgcolor: "#00001", height: "100vh" }}>
          <Header/>
          <SearchLocation onLocationSelect={handleLocationSelect} />
        </Box>
      </Container>
    </>
  );
}

export default App;
