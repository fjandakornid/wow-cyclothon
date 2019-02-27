import { useEffect, useState } from 'react'

export const useMap = ({ googleMap, mapContainerRef, initialConfig }) => {
  const [map, setMap] = useState(null)
  useEffect(
    () => {
      if (!googleMap || !mapContainerRef.current) {
        return
      }
      const map = new googleMap.maps.Map(
        mapContainerRef.current,
        initialConfig
      )
      setMap(map)
      console.log('effect useMap')
    },
    [googleMap, mapContainerRef]
  )
  return map
}
