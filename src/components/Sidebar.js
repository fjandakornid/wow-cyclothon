import React, { useState, useEffect, useContext } from 'react'
import { MapContext } from '../misc/MapContext'

const Sidebar = () => {
  const [solo, setSolo] = useState([])
  const [aflokkur, setAflokkur] = useState([])
  const [bflokkur, setBflokkur] = useState([])
  const [hjolakraftur, setHjolakraftur] = useState([])
  const { state, dispatch } = useContext(MapContext)

  useEffect(() => {
    console.log('filter and stuff')
    setSolo(state.geoJson.filter(x => x.properties.hopurclass === 'flokkur1'))
    setAflokkur(state.geoJson.filter(x => x.properties.hopurclass === 'flokkur2'))
    setBflokkur(state.geoJson.filter(x => x.properties.hopurclass === 'flokkur3'))
    setHjolakraftur(state.geoJson.filter(x => x.properties.hopurclass === 'flokkur4'))
  }, [state.geoJson])

  return (
    <div>
      <h2>Solo</h2>
      {solo.map(item => (
        <div key={item.properties.markerid}>{item.properties.name}</div>
      ))}
      <h2>4 manna lið</h2>
      {aflokkur.map(item => (
        <div key={item.properties.markerid}>{item.properties.name}</div>
      ))}
      <h2>10 manna lið</h2>
      {bflokkur.map(item => (
        <div key={item.properties.markerid}>{item.properties.name}</div>
      ))}
      <h2>Hjólakraftur</h2>
      {hjolakraftur.map(item => (
        <div key={item.properties.markerid}>{item.properties.name}</div>
      ))}
      {/* {state.geoJson.map(item => (
        <div>{item.properties.name}</div>
      ))} */}
    </div>
  )
}

export default Sidebar
