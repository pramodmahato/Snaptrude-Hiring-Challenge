import mapboxgl from "mapbox-gl";
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import React, { useState, useRef, useCallback, useEffect } from "react";

import Map, { Marker } from "react-map-gl";

import Geocoder from "react-map-gl-geocoder";
import markerLogo from "../assets/marker.png"
import html2canvas from "html2canvas";
import Cuboid from "./Cuboid";
import Button from '@mui/material/Button';
import { Box } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import MapViewOptions from "./MapViewOptions";

import '../App.css'
import '../styles/SearchLocation.css'

const MAPBOX_TOKEN = mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

function SearchLocation({ onLocationSelect }) {
    const mapRef = useRef(null);
    const [cuboidLoaded, setCuboidLoaded] = useState(false);
    const [screenshotUrl, setScreenshotUrl] = useState(null);
    const [mapStyle, setMapStyle] = useState("mapbox://styles/mapbox/streets-v11")

    //Below is the co-ordinates of Snaptrude's Hyderabad Office
    const longitude = 76.9784962;
    const latitude = 17.823122;

    useEffect(() => {
        if (screenshotUrl !== null) {
            //To mock a delay of 1.5s to crating a loading scenario
            setTimeout(() => { setCuboidLoaded(true) }, 1500)
        }
    }, [screenshotUrl])

    useEffect(() => {
        //To set everything to default state when the user changes the map layout
        setScreenshotUrl(null);
        setCuboidLoaded(false);
    }, [mapStyle])

    const [viewport, setViewport] = useState({
        latitude: latitude,
        longitude: longitude,
        zoom: 8,
        preserveDrawingBuffer: true
    });

    const handleScreenshotClick = () => {
        setCuboidLoaded(false)
        setScreenshotUrl(null)
        const element = document.getElementById("mapContainer");
        html2canvas(element).then((canvas) => {
            const dataUrl = canvas.toDataURL();
            setScreenshotUrl(dataUrl);
        });
    };


    const handleViewportChange = useCallback(
        (newViewport) => setViewport(newViewport),
        []
    );

    const handleGeocoderViewportChange = useCallback(
        (newViewport) => {
            const geocoderDefaultOverrides = { transitionDuration: 1000 };
            setCuboidLoaded(false)
            setScreenshotUrl(null);
            return handleViewportChange({
                ...newViewport,
                ...geocoderDefaultOverrides
            });
        },
        [handleViewportChange]
    );

    return (<div style={{ backgroundColor: "#000001" }}>
        <div style={{ height: "50vh" }}
            id="mapContainer">
            <Map
                ref={mapRef}
                {...viewport}
                width="100%"
                height="100%"
                onViewportChange={handleViewportChange}
                mapboxApiAccessToken={MAPBOX_TOKEN}
                projection="globe"
                mapStyle={mapStyle}
            >
                <Geocoder
                    mapRef={mapRef}
                    onViewportChange={handleGeocoderViewportChange}
                    mapboxApiAccessToken={MAPBOX_TOKEN}
                    position="top-left"
                />
                <Marker latitude={17.823122} longitude={76.9784962} anchor="bottom" color="#4668f2">
                    <img src={markerLogo} alt="marker" height="40" />
                </Marker>
            </Map>
        </div>

        <MapViewOptions setMapStyle={setMapStyle} />

        
        <Box className="loading">
            <Button onClick={handleScreenshotClick} variant="contained" className="snaptrude-button" style={{marginTop:"20px"}}>Snap it!</Button>
        </Box>

        { //Loading Screen
        screenshotUrl && !cuboidLoaded && <Box className="loading"><CircularProgress className="progress-bar" style={{ marginTop: "40px" }} /></Box>}

        {//3D Rendering Engine
        cuboidLoaded && (<div style={{ marginTop: "20px" }}>

            <div style={{ maxHeight: "500px", marginTop: "20px" }}>
                <Cuboid style={{ height: "50vh" }} screenshotUrl={screenshotUrl} setCuboidLoaded={setCuboidLoaded} />
            </div>
        </div>
        )}
    </div>
    );
}
export default SearchLocation;