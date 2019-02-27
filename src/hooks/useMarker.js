import { useState } from 'react'

// export const useMarker = ({point, googleMap, mapRef}) => {
//   const [marker, setMarker] = useState(null)
  
//   useEffect(() => {
//     if (!googleMap || !mapRef.current) {
//       return
//     }
//     setMarker(new googleMap.maps.Marker({position: point, map: mapRef}))
//   }, [point])

//   return marker
// }


export function useMarker(googleMap, mapRef) {
  const [marker, setMarker] = useState(null)
  const addMarker = (point) => {
    if (!googleMap || !mapRef.current) return
    setMarker(new googleMap.maps.Marker({position: point, map: mapRef.current}))
  } 
  return {marker, addMarker}
}


  // unction useCounter(initialState = 0) {
  //   const [count, setCount] = useState(initialState)
  //   const incrementCount = () => setCount(count + 1)
  //   return {count, incrementCount}