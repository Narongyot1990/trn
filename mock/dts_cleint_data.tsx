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

export default clientData