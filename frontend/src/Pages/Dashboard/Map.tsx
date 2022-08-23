import React from 'react'
import { MapContainer, Marker, Popup } from 'react-leaflet'

type Props = {}

const Map = (props: Props) => {
  return (
        <MapContainer>
            <Marker position={[51.1074, 17.0343]}>
                <Popup>
                    Device 1
                </Popup>
            </Marker>
        </MapContainer>
  )
}

export default Map