/* global google */
import { useState } from 'react'

export const useGoogleMarker = (map) => {
  const [marker, setMarker] = useState(null)
  const addMarker = (point) => {
    var mark = new google.maps.Marker({position: point, map: map})
    debugger
  }
  return {marker, addMarker}
}
