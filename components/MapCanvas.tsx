'use client'

import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import axios from 'axios'

const GEO_KEY = process.env.NEXT_PUBLIC_GEOJSON_KEY

interface Coordinates {
  lat: number
  lng: number
}

interface MapCanvasProps {
  origin: Coordinates
  destination: Coordinates
  returnToOrigin?: boolean
  onSummaryUpdate?: (summary: { distance: number; duration: number }) => void
}

const image_path = '/icons/6w-truck.png'

const customIcon = L.icon({
  iconUrl: typeof window !== 'undefined' ? new URL(image_path, window.location.origin).toString() : image_path,
  iconSize: [30, 40],
  iconAnchor: [15, 40],
  popupAnchor: [0, -35],
})

const MapCanvas: React.FC<MapCanvasProps> = ({
  origin,
  destination,
  returnToOrigin,
  onSummaryUpdate,
}) => {
  const [routeCoords, setRouteCoords] = useState<Coordinates[]>([])
  const [returnCoords, setReturnCoords] = useState<Coordinates[]>([])
  const [distance, setDistance] = useState<number | null>(null)
  const [duration, setDuration] = useState<number | null>(null)

  const center = {
    lat: (origin.lat + destination.lat) / 2,
    lng: (origin.lng + destination.lng) / 2,
  }

  useEffect(() => {
    const fetchRoute = async () => {
      try {
        // ขาไป
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
              Authorization: `Bearer ${GEO_KEY}`,
              'Content-Type': 'application/json',
            },
          }
        )

        const geometry = response.data.features[0].geometry.coordinates
        const route = geometry.map(([lng, lat]: [number, number]) => ({ lat, lng }))
        setRouteCoords(route)

        const summary = response.data.features[0].properties.summary
        let totalDistance = summary.distance
        let totalDuration = summary.duration

        // ขากลับ
        if (returnToOrigin) {
          const returnRes = await axios.post(
            'https://api.openrouteservice.org/v2/directions/driving-car/geojson',
            {
              coordinates: [
                [destination.lng, destination.lat],
                [origin.lng, origin.lat],
              ],
            },
            {
              headers: {
                Authorization: `Bearer ${GEO_KEY}`,
                'Content-Type': 'application/json',
              },
            }
          )

          const returnGeometry = returnRes.data.features[0].geometry.coordinates
          const returnRoute = returnGeometry.map(([lng, lat]: [number, number]) => ({ lat, lng }))
          setReturnCoords(returnRoute)

          const returnSummary = returnRes.data.features[0].properties.summary
          totalDistance += returnSummary.distance
          totalDuration += returnSummary.duration
        } else {
          setReturnCoords([])
        }

        const finalDistance = totalDistance / 1000 // meters → km
        const finalDuration = totalDuration / 60   // seconds → minutes

        setDistance(finalDistance)
        setDuration(finalDuration)

        if (onSummaryUpdate) {
          onSummaryUpdate({
            distance: finalDistance,
            duration: finalDuration,
          })
        }
      } catch (error) {
        console.error('Error fetching route:', error)
      }
    }

    fetchRoute()
  }, [origin, destination, returnToOrigin, onSummaryUpdate])

  return (
    <div className="w-full max-w-screen-sm mx-auto">
      {distance !== null && duration !== null && (
        <div className="mt-4 bg-white p-4 rounded shadow text-sm text-gray-700">
          <p><strong>Distance:</strong> {distance.toFixed(2)} km</p>
          <p><strong>Duration:</strong> {duration.toFixed(1)} minutes</p>
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
          {returnCoords.length > 0 && <Polyline positions={returnCoords} color="hotpink" />}
        </MapContainer>
      </div>
    </div>
  )
}

export default MapCanvas