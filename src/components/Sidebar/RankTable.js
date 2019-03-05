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
      <table class="table table-hover table-dark table-sm">
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
              <th scope="row">{index}</th>
              <td>{item.properties.name}</td>
              <td>? km</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default RankTable
