import React from 'react'
import GoogleMapReact from 'google-map-react';
const SingleMap = () => {

    const lat = 51.520090
    const lng = -0.147470

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
            <div style={{ height: '60vh', width: '100%' }}>
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