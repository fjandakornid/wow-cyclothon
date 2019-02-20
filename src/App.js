import React, { useRef } from 'react'
import { useGoogleMap } from './hooks/useGoogleMap'
import { useMap } from './hooks/useMap'

const API_KEY = undefined

const initialConfig = {
  zoom: 12,
  center: { lat: 35.6432027, lng: 139.6729435 }
}

function App (props) {
  const googleMap = useGoogleMap(API_KEY)
  const mapContainerRef = useRef(null)
  useMap({ googleMap, mapContainerRef, initialConfig })
  return (
    <div
      style={{
        height: '100vh',
        width: '100%'
      }}
      ref={mapContainerRef}
    />
  )
}

export default App
