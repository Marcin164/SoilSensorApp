"use client";

import React from "react";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

type Props = {};

const page = (props: Props) => {
  return (
    <MapContainer
      center={[51.105, 17.0]}
      zoom={13}
      style={{ height: "calc(100vh - 100px)", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <CircleMarker center={[51.105, 17.0]} radius={20}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </CircleMarker>
    </MapContainer>
  );
};

export default page;
