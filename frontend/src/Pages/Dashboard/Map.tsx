import React from 'react'
import L from "leaflet"
import { useSelector } from 'react-redux'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/images/marker-icon.png';
import 'leaflet/dist/images/marker-shadow.png';

type Props = {}

const Map = (props: Props) => {
    const icon = L.icon({ iconUrl: "/sensor.png" });
    const devices = useSelector((state: any) => (state.devices))
    console.log(devices)
    return (
        <MapContainer center={[51.1074, 17.0343]} zoom={13} scrollWheelZoom={true} className="w-full h-[calc(100vh-50px)]">
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
            />
            {devices && devices.map((device:any) => (
                <Marker position={[device.lat, device.lng]} icon={icon}>
                    <Popup>
                        <h4 className="text-[primary-light]">Device 1</h4> <br/> device1
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    )
}

export default Map