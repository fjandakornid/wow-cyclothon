import React, { useState, useEffect, useContext } from 'react'
import { MapContext } from '../../misc/MapContext'
import RankTable from './RankTable'

const Sidebar = () => {
  const [solo, setSolo] = useState([])
  const [aflokkur, setAflokkur] = useState([])
  const [bflokkur, setBflokkur] = useState([])
  const [hjolakraftur, setHjolakraftur] = useState([])
  const { state, dispatch } = useContext(MapContext)

  useEffect(() => {
    setSolo(state.geoJson.filter(x => x.properties.hopurclass === 'flokkur1').sort(sortDist))
    setAflokkur(state.geoJson.filter(x => x.properties.hopurclass === 'flokkur2').sort(sortDist))
    setBflokkur(state.geoJson.filter(x => x.properties.hopurclass === 'flokkur3').sort(sortDist))
    setHjolakraftur(state.geoJson.filter(x => x.properties.hopurclass === 'flokkur4').sort(sortDist))
  }, [state.geoJson])

  function sortDist (a, b) {
    if (parseFloat(a.properties.nearest.Distance) > parseFloat(b.properties.nearest.Distance)) return -1
    if (parseFloat(a.properties.nearest.Distance) < parseFloat(b.properties.nearest.Distance)) return 1
    return 0
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
