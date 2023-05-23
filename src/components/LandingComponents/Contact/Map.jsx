import React from 'react'
import GoogleMapReact from 'google-map-react';
const SingleMap = () => {

    const lat = 51.519510
    const lng = -0.146960

    const renderMarkers = (map, maps) => {
        let marker = new maps.Marker({
            position: { lat: lat, lng: lng },
            map,
            title: 'Hello World!'
        });
        return marker;
    };



    return (
        <>
            <div className='xl:!h-[60vh] xl:w-[100%] md:!h-[30vh] md:!w-[80%] !h-[40vh] !w-[100%]' >
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyD0tGMAgpuMIlO51AcuBmxpOWtRGa76Fro' }}
                    defaultCenter={{ lat: lat, lng: lng }}
                    defaultZoom={11}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
                >
                </GoogleMapReact>
            </div>
        </>
    )
}

export default SingleMap