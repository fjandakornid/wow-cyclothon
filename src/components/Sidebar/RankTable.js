import React, { useContext } from 'react'
import MarkerHandler from '../../misc/MarkerHandler'
import { MapContext } from '../../misc/MapContext'

const RankTable = ({list, title}) => {
  const { state, dispatch } = useContext(MapContext)

  const locateMarker = (markerId) => {
    MarkerHandler.moveToMarker(markerId, state.map)
    MarkerHandler.bounceMarker(markerId, state.googleMap)
  }

  return (
    <>
      <div className='title'>{title}</div>
      <table className="table table-hover table-dark table-sm">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Team</th>
            <th scope="col">Distance</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr key={item.properties.markerid} onClick={() => locateMarker(item.properties.markerid)}>
              <th scope="row">{index + 1}</th>
              <td>{item.properties.name}</td>
              <td className='text-right'>{parseFloat(item.properties.nearest.Distance).toFixed(1)} km</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default RankTable
