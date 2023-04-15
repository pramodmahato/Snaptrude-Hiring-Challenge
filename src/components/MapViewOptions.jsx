import IconButton from '@mui/material/IconButton';

import MapIcon from '@mui/icons-material/Map';
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
import LightModeIcon from '@mui/icons-material/LightMode';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import TrafficIcon from '@mui/icons-material/Traffic';
import { Box } from '@mui/system';
import { Tooltip } from '@mui/material';
function MapViewOptions({setMapStyle}) {
    const mapLayouts = [
        {
            id: 1,
            name: 'Street View',
            element: <TrafficIcon />,
            mapURL: 'mapbox://styles/mapbox/streets-v11'
        },
        {
            id: 2,
            name: 'Satellite View',
            element: <SatelliteAltIcon />,
            mapURL: 'mapbox://styles/mapbox/satellite-streets-v11'
        },
        {
            id: 3,
            name: 'Outdoor View',
            element: <MapIcon />,
            mapURL: 'mapbox://styles/mapbox/outdoors-v11'
        },
        {
            id: 4,
            name: 'Light View',
            element: <LightModeIcon />,
            mapURL: 'mapbox://styles/mapbox/light-v10'
        },
        {
            id: 5,
            name: 'Dark View',
            element: <BedtimeIcon />,
            mapURL: 'mapbox://styles/mapbox/dark-v10'
        },
    ]
    const changeMapLayout = (id) => {
       mapLayouts.forEach((view)=>{
        if(view.id === id){
            setMapStyle(view.mapURL);
        }
       })
    }
    return (<>
        <Box sx={{
            flexGrow: 1, display: { xs: 'flex', md: 'flex', lg: 'flex' }, justifyContent: 'center', marginTop: "20px"
        }}>
            {mapLayouts.map((view) => <Tooltip title={view.name}>
                <IconButton className='map-layout-options' onClick={()=>changeMapLayout(view.id)} key={view.id}>
                    {view.element}
                </IconButton>
            </Tooltip>)}

        </Box>
    </>)
}
export default MapViewOptions;