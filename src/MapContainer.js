import React from 'react'

const MapContainer = React.memo(function Mapp (props) {
  return (
    <div>
       <div
        style={{ height: '100vh', width: '100%' }}
        ref={props.ref}
        />
    </div>
  )
})

export default MapContainer
