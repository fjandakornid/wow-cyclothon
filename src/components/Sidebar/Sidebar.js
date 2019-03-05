import React, { useState, useEffect, useContext } from 'react'
import { MapContext } from '../../misc/MapContext'
import RankTable from './RankTable'

import MarkerHandler from '../../misc/MarkerHandler'

const Sidebar = () => {
  const [solo, setSolo] = useState([])
  const [aflokkur, setAflokkur] = useState([])
  const [bflokkur, setBflokkur] = useState([])
  const [hjolakraftur, setHjolakraftur] = useState([])
  const { state, dispatch } = useContext(MapContext)

  useEffect(() => {
    setSolo(state.geoJson.filter(x => x.properties.hopurclass === 'flokkur1'))
    setAflokkur(state.geoJson.filter(x => x.properties.hopurclass === 'flokkur2'))
    setBflokkur(state.geoJson.filter(x => x.properties.hopurclass === 'flokkur3'))
    setHjolakraftur(state.geoJson.filter(x => x.properties.hopurclass === 'flokkur4'))
  }, [state.geoJson])

  const locateMarker = (markerId) => {
    MarkerHandler.moveToMarker(markerId, state.map)
    MarkerHandler.bounceMarker(markerId, state.googleMap)
  }

  return (
    <div>
      <RankTable list={solo} title={'Solo'} />
      <RankTable list={aflokkur} title={'4 manna lið'} />
      <RankTable list={bflokkur} title={'10 manna lið'} />
      <RankTable list={hjolakraftur} title={'Hjólakraftur'} />
      
      {/* {state.geoJson.map(item => (
        <div>{item.properties.name}</div>
      ))} */}
    </div>
  )
}

export default Sidebar
