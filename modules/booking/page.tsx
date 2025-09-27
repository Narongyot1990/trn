'use client'

/* Mock Data for TEST ONLY */
import poNumbers from '@/mock/dts_poNumber'
import clientData from '@/mock/dts_cleint_data'

/* React and Core */
import React, {useState } from 'react'

/* Compenents */
import Dropdown from '@/components/Dropdown'
import Table from '@/components/Table'

/* Hooks and Utils */
import { useDelayedVisibility } from '@/hooks/useDelayedVisibility'
import formatNumber from '@/utils/formatNumber'

/* Dynamic and Map component */
import dynamic from 'next/dynamic'
const MapCanvas = dynamic(() => import('../../components/MapCanvas'), {
  ssr: false,
})

/* Logic PO */
const POSummaryTable: React.FC<{ poList: number[] }> = ({ poList }) => {
  const headers = ['PO Number', 'Max Value', 'Balance', 'Usage']

  const rows = poList.map((poNum) => {
    const po = poNumbers.find((p) => p.poNumber === poNum)
    return po
      ? [
          po.poNumber,
          formatNumber(po.maxValue),
          formatNumber(po.balance),
          formatNumber(po.maxValue - po.balance),
        ]
      : [poNum, 'PO data not found', '', '']
  })

  return (
    <div className="w-full max-w-full overflow-hidden">
      <Table headers={headers} rows={rows} />
    </div>
  )
}

/* Logic Booking */
const Booking: React.FC = () => {
  const [selectedProjectName, setSelectedProjectName] = useState('')
  const [selectedRouteDescription, setSelectedRouteDescription] = useState('')
  const [selectedPoNumber, setSelectedPoNumber] = useState('')
  const [selectedOrigin, setSelectedOrigin] = useState('')
  const [selectedDestination, setSelectedDestination] = useState('')
  const showDetails = useDelayedVisibility(!!selectedRouteDescription, 50)

  const selectedProject = clientData.customerProjects.find(
    (project) => project.name === selectedProjectName
  )

  const selectedRoute = selectedProject?.routesInformation.find(
    (route) => route.description === selectedRouteDescription
  )

  const originData = selectedRoute?.origin_info?.find(p => p.origin === selectedOrigin)
  const destinationData = selectedRoute?.destination_info.find(p => p.destination === selectedDestination)

  const resetSelections = () => {
    setSelectedRouteDescription('')
    setSelectedPoNumber('')
    setSelectedOrigin('')
    setSelectedDestination('')
  }

  return (
    <div className="w-full max-w-3xl px-4 sm:px-6 lg:px-8 py-6 mx-auto bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-2xl font-bold text-gray-800">Plant</h2>
      <Dropdown
        options={clientData.customerProjects.map((p) => p.name)}
        value={selectedProjectName}
        onChange={(e) => {
          setSelectedProjectName(e.target.value)
          resetSelections()
        }}
      />

      {selectedProject && (
        <>
          <h2 className="mt-6 mb-2 text-xl font-semibold text-gray-700">Route Description</h2>
          <Dropdown
            options={selectedProject.routesInformation.map((r) => r.description)}
            value={selectedRouteDescription}
            onChange={(e) => {
              setSelectedRouteDescription(e.target.value)
              setSelectedPoNumber('')
              setSelectedOrigin('')
              setSelectedDestination('')
            }}
          />
        </>
      )}

      {selectedRoute && (
        <div
          className={`transition-all duration-500 ease-out ${
            showDetails ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <h2 className="mt-6 mb-2 text-lg font-semibold text-gray-700">PO Summary</h2>
          <POSummaryTable poList={selectedRoute.poNumbers} />

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h2 className="mb-1 text-sm font-medium text-gray-600">PO Number</h2>
              <Dropdown
                options={selectedRoute.poNumbers.map((po) => po.toString())}
                value={selectedPoNumber}
                onChange={(e) => setSelectedPoNumber(e.target.value)}
              />
            </div>
            <div>
              <h2 className="mb-1 text-sm font-medium text-gray-600">Origin</h2>
              <Dropdown
                options={selectedRoute.origin_info.map(p => p.origin)}
                value={selectedOrigin}
                onChange={(e) => setSelectedOrigin(e.target.value)}
              />
            </div>
            <div>
              <h2 className="mb-1 text-sm font-medium text-gray-600">Destination</h2>
              <Dropdown
                options={selectedRoute.destination_info.map(p => p.destination)}
                value={selectedDestination}
                onChange={(e) => setSelectedDestination(e.target.value)}
              />
            </div>
          </div>

          {selectedOrigin && selectedDestination && (
            <div className="mt-6">
              <h2 className="mb-2 text-sm font-medium text-gray-600">Map Links</h2>
              <div className="space-y-2 text-sm text-gray-700">
                <p>
                  <strong>Origin:</strong>{' '}
                  <a
                    href={originData?.originLocation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View on Map
                  </a>
                </p>
                <p>
                  <strong>Destination:</strong>{' '}
                  <a
                    href={destinationData?.destinationLocation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View on Map
                  </a>
                </p>
              </div>
            </div>
          )}

          {selectedOrigin &&
            selectedDestination &&
            originData?.originCoordinates &&
            destinationData?.destinationCoordinates && (
              <div className="mt-6">
                <h2 className="mb-2 text-sm font-medium text-gray-600">Map Preview</h2>
                <div className="overflow-hidden rounded-md border border-gray-200 shadow-sm">
                  <MapCanvas
                    origin={originData?.originCoordinates}
                    destination={destinationData?.destinationCoordinates}
                  />
                </div>
              </div>
            )}
        </div>
      )}
    </div>
  )
}

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen w-full items-center">
      <h2 className="mb-4 text-2xl font-bold text-center text-gray-800">DTS Booking</h2>
      <Booking />
    </main>
  )
}