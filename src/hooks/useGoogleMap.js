import { useEffect, useState } from 'react'
import GoogleMapsApiLoader from 'google-maps-api-loader'

export const useGoogleMap = apiKey => {
  const [googleMap, setGoogleMap] = useState(null)
  useEffect(() => {
    GoogleMapsApiLoader({ apiKey }).then(google => {
      setGoogleMap(google)
      console.log('effect useGoogleMap')
    })
  }, [])
  return googleMap
}
