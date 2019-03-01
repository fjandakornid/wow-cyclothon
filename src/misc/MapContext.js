import React from 'react'

// https://dev.to/oieduardorabelo/react-hooks-how-to-create-and-update-contextprovider-1f68

let MapContext = React.createContext()

let initialState = {
  map: null,
  googleMap: null,
  markers: []
}

let reducer = (state, action) => {
  switch (action.type) {
    case 'smuuu':
      return 'who is that?'
    default:
      return 'mom.. is that you?'
  }
}

function MapContextProvider (props) {
  let [state, dispatch] = React.useReducer(reducer, initialState)
  let value = { state, dispatch }

  return <MapContext.Provider value={value}>{props.children}</MapContext.Provider>
}

let MapContextConsumer = MapContext.Consumer

export { MapContext, MapContextProvider, MapContextConsumer }
