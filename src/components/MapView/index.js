import React from "react";
import { Map, Marker } from "pigeon-maps"

const MapView = ({ latlng }) => {


    return (
        <div style={{ width: "83.33vw" }}>
            <Map height={573} defaultCenter={[latlng[0], latlng[1]]} defaultZoom={4}>
                <Marker width={50} anchor={[latlng[0], latlng[1]]} ></Marker>
            </Map>
      </div>
    );
};

export default MapView;