'use client'

import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import axios from 'axios'

interface Coordinates {
  lat: number
  lng: number
}

interface MapCanvasProps {
  origin: Coordinates
  destination: Coordinates
}

// ✅ Define your custom image path here
const image_path = '/icons/6w-truck.png'

// ✅ Create custom icon
const customIcon = L.icon({
  iconUrl: typeof window !== 'undefined' ? new URL(image_path, window.location.origin).toString() : image_path,
  iconSize: [30, 40],
  iconAnchor: [15, 40],
  popupAnchor: [0, -35],
})

const MapCanvas: React.FC<MapCanvasProps> = ({ origin, destination }) => {
  const [routeCoords, setRouteCoords] = useState<Coordinates[]>([])
  const [distance, setDistance] = useState<number | null>(null)
  const [duration, setDuration] = useState<number | null>(null)

  const center = {
    lat: (origin.lat + destination.lat) / 2,
    lng: (origin.lng + destination.lng) / 2,
  }

  useEffect(() => {
    const fetchRoute = async () => {
      try {
        const response = await axios.post(
          'https://api.openrouteservice.org/v2/directions/driving-car/geojson',
          {
            coordinates: [
              [origin.lng, origin.lat],
              [destination.lng, destination.lat],
            ],
          },
          {
            headers: {
              Authorization:
                'eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6IjBjNzE1ZjcwNzZhNTQ0ZTY4ODcyOTEzNWM0NjA1MTYxIiwiaCI6Im11cm11cjY0In0=',
              'Content-Type': 'application/json',
            },
          }
        )

        const geometry = response.data.features[0].geometry.coordinates
        const route = geometry.map(([lng, lat]: [number, number]) => ({ lat, lng }))
        setRouteCoords(route)

        const summary = response.data.features[0].properties.summary
        setDistance(summary.distance / 1000)
        setDuration(summary.duration / 50)
      } catch (error) {
        console.error('Error fetching route:', error)
      }
    }

    fetchRoute()
  }, [origin, destination])

  return (
    <div className="w-full max-w-screen-sm mx-auto">
      {distance !== null && duration !== null && (
        <div className="mt-4 bg-white p-4 rounded shadow text-sm text-gray-700">
          <p>
            <strong>Distance:</strong> {distance.toFixed(2)} km
          </p>
          <p>
            <strong>Duration:</strong> {duration.toFixed(1)} minutes
          </p>
        </div>
      )}

      <div className="mt-4 h-[300px] w-full rounded overflow-hidden shadow border border-gray-300">
        <MapContainer center={center} zoom={10} className="h-full w-full">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          <Marker position={origin} icon={customIcon}>
            <Popup>Origin</Popup>
          </Marker>

          <Marker position={destination} icon={customIcon}>
            <Popup>Destination</Popup>
          </Marker>

          {routeCoords.length > 0 && <Polyline positions={routeCoords} color="blue" />}
        </MapContainer>
      </div>
    </div>
  )
}

export default MapCanvas