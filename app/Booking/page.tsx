'use client'

/** Mock Data */
const clientData = {
  customerName: 'DTS',
  customerProjects: [
    {
      name: 'IS',
      customerContacts: [
        {
          name: 'Jirapreya Siangprasoet',
          tel: '092-257-2744',
          email: 'Jirapreya.Siangprasoet@draexlmaier.com',
          responsible: ['billing', 'truck booking'],
        },
        {
          name: 'Another',
          tel: '123-123-1234',
          email: '123123123@draexlmaier.com',
          responsible: ['truck booking'],
        },
      ],
      routesInformation: [
        {
          description: 'Milk run DTS to BMW in Jul - Dec 2025',
          poNumbers: [4500847337],
          origin_info : [
            {
              origin: 'DTS RAY1 (A3) IS',
              originLocation: 'https://maps.app.goo.gl/cA9W2YxUekMdDKRf7',
              originCoordinates: { lat: 12.94565118504992, lng: 101.11146932416544 },
            },
            {
              origin: 'BMW',
              originLocation: 'https://maps.app.goo.gl/zNNLxzmQKY1d8E777',
              originCoordinates: { lat: 12.979034643562205, lng: 101.12120041732254 },
            }
          ],
          destination_info : [
            {
              destination: 'BMW',
              destinationLocation: 'https://maps.app.goo.gl/zNNLxzmQKY1d8E777',
              destinationCoordinates: { lat: 12.979034643562205, lng: 101.12120041732254 },
            },
            {
              destination: 'IS',
              destinationLocation: 'https://maps.app.goo.gl/cA9W2YxUekMdDKRf7',
              destinationCoordinates: { lat: 12.94565118504992, lng: 101.11146932416544 },
            },
          ],
        },
        {
          description: 'To Internal Y2025',
          poNumbers: [4500877502],
          origin_info : [
            {
              origin: 'DTS RAY 1 (A3)',
              originLocation: 'https://maps.app.goo.gl/cA9W2YxUekMdDKRf7',
              originCoordinates: { lat: 12.94565118504992, lng: 101.11146932416544 },
            },

          ],
          destination_info : [
            {
              destination: 'New Plant (IS)',
              destinationLocation: 'https://maps.app.goo.gl/zNNLxzmQKY1d8E777',
              destinationCoordinates: { lat: 12.981452, lng: 101.123183 },
            }
          ],
        },
      ],
    },
    {
      name: 'ES',
      customerContacts: [
        {
          name: '',
          tel: '',
          email: '',
          responsible: [],
        },
        {
          name: '',
          tel: '',
          email: '',
          responsible: [''],
        },
      ],
      routesInformation: [
        {
          description: 'DTS ES to Mercedes',
          poNumbers: [4500847062],
          origin_info : [
            {
              origin: 'DTS RAY1 (A2) ES',
              originLocation: 'https://maps.app.goo.gl/cA9W2YxUekMdDKRf7',
              originCoordinates: { lat: 12.94565118504992, lng: 101.11146932416544 },
            },
          ],
          destination_info : [
            {
              destination: 'Mercedes',
              destinationLocation: 'https://maps.app.goo.gl/tJCCN77ft7Lu2jaN9',
              destinationCoordinates: { lat: 13.6275123, lng: 100.5956589 },
            },
          ],
        },
        {
          description: 'Mercedes to DTS ES',
          poNumbers: [4500847062],
          origin_info : [
            {
              origin: 'Mercedes',
              originLocation: 'https://maps.app.goo.gl/tJCCN77ft7Lu2jaN9',
              originCoordinates: { lat: 13.6275123, lng: 100.5956589 },
            },
          ],
          destination_info : [
            {
              destination: 'DTS RAY1 (A2) ES',
              destinationLocation: 'https://maps.app.goo.gl/cA9W2YxUekMdDKRf7',
              destinationCoordinates: { lat: 12.94565118504992, lng: 101.11146932416544 },
            },
          ],
        },
        {
          description: 'DTS ES to DTS BGK',
          poNumbers: [4500847062],
          origin_info : [
            {
              origin: 'DTS RAY1 (A2) ES',
              originLocation: 'https://maps.app.goo.gl/cA9W2YxUekMdDKRf7',
              originCoordinates: { lat: 12.94565118504992, lng: 101.11146932416544 },
            },
          ],
          destination_info : [
            {
              destination: 'BGK plant',
              destinationLocation: 'https://maps.app.goo.gl/FUiEhjNmxbNBKAaX7',
              destinationCoordinates: { lat: 13.5415924, lng: 100.6569161 },
            },
          ],
        },
        {
          description: 'DTS ES to BPM',
          poNumbers: [4500847062],
          origin_info : [
            {
              origin: 'DTS RAY1 (A2) ES',
              originLocation: 'https://maps.app.goo.gl/cA9W2YxUekMdDKRf7',
              originCoordinates: { lat: 12.94565118504992, lng: 101.11146932416544 },
            },
          ],
          destination_info : [
            {
              destination: 'BPM',
              destinationLocation: 'https://maps.app.goo.gl/USxve6EmvvYdNaQD6',
              destinationCoordinates: { lat: 12.9801119, lng: 101.1202951 },
            },
          ],
        },
        {
          description: 'BPM to DTS ES',
          poNumbers: [4500847062],
          origin_info : [
            {
              origin: 'BPM',
              originLocation: 'https://maps.app.goo.gl/USxve6EmvvYdNaQD6',
              originCoordinates: { lat: 12.9801119, lng: 101.1202951 },
            },
          ],
          destination_info : [
            {
              destination: 'DTS RAY1 (A2) ES',
              destinationLocation: 'https://maps.app.goo.gl/cA9W2YxUekMdDKRf7',
              destinationCoordinates: { lat: 12.94565118504992, lng: 101.11146932416544 },
            },
          ],
        },
      ],
    },
    {
      name: 'CHO',
      customerContacts: [
        {
          name: '',
          tel: '',
          email: '',
          responsible: [],
        },
        {
          name: '',
          tel: '',
          email: '',
          responsible: [''],
        },
      ],
      routesInformation: [
        {
          description: 'Transportation from DTS-CHO to BMW',
          poNumbers: [4500847338],
          origin_info : [
            {
              origin: 'DTS CHO',
              originLocation: 'https://maps.app.goo.gl/wLKEXYXsLqJYYfXQ6',
              originCoordinates: { lat: 13.07703, lng: 101.0866556 },
            },
          ],
          destination_info : [
            {
              destination: 'BMW',
              destinationLocation: 'https://maps.app.goo.gl/zNNLxzmQKY1d8E777',
              destinationCoordinates: { lat: 12.979034643562205, lng: 101.12120041732254 },
            },
          ],
        },
        {
          description: 'Transportation from DTS-CHO to TESM',
          poNumbers: [4500847338],
          origin_info : [
            {
              origin: 'DTS CHO',
              originLocation: 'https://maps.app.goo.gl/wLKEXYXsLqJYYfXQ6',
              originCoordinates: { lat: 13.07703, lng: 101.0866556 },
            },
          ],
          destination_info : [
            {
              destination: 'TESM',
              destinationLocation: 'https://maps.app.goo.gl/iDa8F4UuGKF7rBth9',
              destinationCoordinates: { lat: 13.6275473, lng: 100.5899152 },
            },
          ],
        },
      ],
    },
    {
      name: 'BGK',
      customerContacts: [
        {
          name: '',
          tel: '',
          email: '',
          responsible: [],
        },
        {
          name: '',
          tel: '',
          email: '',
          responsible: [''],
        },
      ],
      routesInformation: [
        {
          description: 'Transfer from DTS BGK to Mercedes',
          poNumbers: [4500848200],
          origin_info : [
            {
              origin: 'BGK plant',
              originLocation: 'https://maps.app.goo.gl/wLKEXYXsLqJYYfXQ6',
              originCoordinates: { lat: 13.5415924, lng: 100.6569161 },
            },
          ],
          destination_info : [
            {
              destination: 'Mercedes',
              destinationLocation: 'https://maps.app.goo.gl/tJCCN77ft7Lu2jaN9',
              destinationCoordinates: { lat: 13.6275123, lng: 100.5956589 },
            },
          ],
        },
        {
          description: 'Transfer round trip ES BGK and ES RAY',
          poNumbers: [4500846867],
          origin_info : [
            {
              origin: 'BGK plant',
              originLocation: 'https://maps.app.goo.gl/wLKEXYXsLqJYYfXQ6',
              originCoordinates: { lat: 13.5415924, lng: 100.6569161 },
            },
          ],
          destination_info : [
            {
              destination: 'DTS RAY1 (A2) ES',
              destinationLocation: 'https://maps.app.goo.gl/cA9W2YxUekMdDKRf7',
              destinationCoordinates: { lat: 12.94565118504992, lng: 101.11146932416544 },
            },
          ],
        },
      ],
    },
    {
      name: 'AD HOC',
      customerContacts: [
        {
          name: 'Somkiat',
          tel: '',
          email: '',
          responsible: [],
        },
        {
          name: '',
          tel: '',
          email: '',
          responsible: [],
        },
      ],
      routesInformation: [
        {
          description: 'Route 1 Transfer Equipment A3 to new plant',
          poNumbers: [4500894177],
          origin_info : [
            {
              origin: 'DTS RAY1 (A3) IS',
              originLocation: 'https://maps.app.goo.gl/cA9W2YxUekMdDKRf7',
              originCoordinates: { lat: 12.94565118504992, lng: 101.11146932416544 },
            },
          ],
          destination_info : [
            {
              destination: 'New Plant (IS)',
              destinationLocation: 'https://maps.app.goo.gl/zNNLxzmQKY1d8E777',
              destinationCoordinates: { lat: 12.981452, lng: 101.123183 },
            }
          ],
        },
      ],
    },
  ],
}

const poNumbers = [
  { poNumber: 4500847337, maxValue: 1429907.00, balance: 1429907.00 },
  { poNumber: 4500877502, maxValue: 663656.00, balance: 663656.00 },
  { poNumber: 4500847062, maxValue: 1084344.87, balance: 1084344.87 },
  { poNumber: 4500847338, maxValue: 14207999.99, balance: 14207999.99 },
  { poNumber: 4500848200, maxValue: 160000.00, balance: 160000.00 },
  { poNumber: 4500846867, maxValue: 200000.00, balance: 200000.00 },
  { poNumber: 4500894177, maxValue: 28037.38, balance: 28037.38 },
]

function formatNumber(value: number): string {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)
}

/** Booking Component */
import React, { ChangeEvent, useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const MapCanvas = dynamic(() => import('../Components/MapCanvas'), {
  ssr: false,
})

interface DropdownProps {
  options: string[]
  value: string
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

const Dropdown: React.FC<DropdownProps> = ({ options, value, onChange }) => (
  <select
    className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
    value={value}
    onChange={onChange}
  >
    <option value="" hidden>
      --select--
    </option>
    {options.map((option, index) => (
      <option key={index} value={option}>
        {option}
      </option>
    ))}
  </select>
)

const POSummaryTable: React.FC<{ poList: number[] }> = ({ poList }) => (
  <div className="w-full max-w-full overflow-hidden">
    <table className="table-fixed w-full border-collapse rounded-md bg-white shadow-sm">
      <thead>
        <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-600">
          <th className="w-1/4 px-2 py-2 break-words">PO Number</th>
          <th className="w-1/4 px-2 py-2 break-words">Max Value</th>
          <th className="w-1/4 px-2 py-2 break-words">Balance</th>
          <th className="w-1/4 px-2 py-2 break-words">Usage</th>
        </tr>
      </thead>
      <tbody>
        {poList.map((poNum) => {
          const po = poNumbers.find((p) => p.poNumber === poNum)
          return po ? (
            <tr key={po.poNumber} className="text-sm text-gray-700 hover:bg-gray-50">
              <td className="px-2 py-2 truncate">{po.poNumber}</td>
              <td className="px-2 py-2 truncate">{formatNumber(po.maxValue)}</td>
              <td className="px-2 py-2 truncate">{formatNumber(po.balance)}</td>
              <td className="px-2 py-2 truncate">{formatNumber(po.maxValue - po.balance)}</td>
            </tr>
          ) : (
            <tr key={poNum} className="text-sm text-gray-700">
              <td className="px-2 py-2 truncate">{poNum}</td>
              <td className="px-2 py-2" colSpan={3}>
                PO data not found
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  </div>
)

const Booking: React.FC = () => {
  const [selectedProjectName, setSelectedProjectName] = useState('')
  const [selectedRouteDescription, setSelectedRouteDescription] = useState('')
  const [selectedPoNumber, setSelectedPoNumber] = useState('')
  const [selectedOrigin, setSelectedOrigin] = useState('')
  const [selectedDestination, setSelectedDestination] = useState('')
  const [showDetails, setShowDetails] = useState(false)
  
  useEffect(() => {
  if (selectedRouteDescription) {
    setShowDetails(false)
    const timeout = setTimeout(() => setShowDetails(true), 50) // ให้ re-trigger animation
    return () => clearTimeout(timeout)
  }
}, [selectedRouteDescription])

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