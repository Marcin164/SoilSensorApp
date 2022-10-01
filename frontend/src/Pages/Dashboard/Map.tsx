import React from 'react'
import L from "leaflet"
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/images/marker-icon.png';
import 'leaflet/dist/images/marker-shadow.png';

type Props = {}

const Map = (props: Props) => {
    const icon = L.icon({ iconUrl: "/sensor.png" });

    return (
        <MapContainer center={[51.1074, 17.0343]} zoom={13} scrollWheelZoom={true} className="w-full h-[calc(100vh-50px)]">
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
            />
            <Marker position={[51.1074, 17.0343]} icon={icon}>
                <Popup>
                    <h4 className="text-[primary-light]">Device 1</h4> <br/> device1
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map