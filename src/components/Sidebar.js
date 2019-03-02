import React, { useState, useEffect, useContext } from 'react'
import { MapContext } from '../misc/MapContext'

const Sidebar = () => {
  const [solo, setSolo] = useState([])
  const { state, dispatch } = useContext(MapContext)

  useEffect(() => {
    const solo = state.geoJson.filter(x => x.properties.hopurClass === 'flokkur1')
    setSolo(solo)
  })

  return (
    <div>
      <h2>Solo</h2>
      {solo.map(item => (
        <div>{item.properties.name}</div>
      ))}
      {state.geoJson.map(item => (
        <div>{item.properties.name}</div>
      ))}
    </div>
  )
}

export default Sidebar
