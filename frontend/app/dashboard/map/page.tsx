'use client'

import React from 'react'
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useQuery } from 'react-query'
import { getDevices } from '@/app/_services/deviceService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const page = () => {
  const devices: any = useQuery('devices', getDevices)

  if (!devices?.data) return null

  const getMapCenter = () => {
    let totalLat: any = 0
    let totalLng: any = 0

    devices.data.forEach((device: any) => {
      totalLat += device.lat
      totalLng += device.lng
    })

    const latlngs = { lat: totalLat / devices.data.length, lng: totalLng / devices.data.length }
    return latlngs
  }

  const mapCenter = getMapCenter()

  return (
    <div className="relative">
      <MapContainer center={[mapCenter.lat, mapCenter.lng]} zoom={10} style={{ height: 'calc(100vh - 100px)', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {devices.data.map((device: any) => (
          <CircleMarker center={[device.lat, device.lng]} radius={20}></CircleMarker>
        ))}
      </MapContainer>
      <div className="p-4 z-[500] absolute bottom-0">
        {devices.data.map((device: any) => (
          <div className="w-[160px] h-[100px] bg-[#FFFFFF] p-2 mr-2 inline-block rounded shadow-xl">
            <div className="font-semibold text-[20px] text-[#6E62E5]">{device.name}</div>
            <div className="flex items-center h-fit">
              <div>
                <FontAwesomeIcon icon={faLocationDot} className="text-[#6E62E5] text-[30px]" />
              </div>
              <div className="px-2">
                <div className="text-[14px]">{device.city}</div>
                <div className="text-[14px]">{device.street}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default page
