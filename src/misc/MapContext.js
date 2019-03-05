import React from 'react'

// https://dev.to/oieduardorabelo/react-hooks-how-to-create-and-update-contextprovider-1f68

let MapContext = React.createContext()

let initialState = {
  map: null,
  googleMap: null,
  geoJson: []
}

let reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_MAP':
      return { ...state, map: action.data }
    case 'UPDATE_GOOGLE_MAP':
      return { ...state, googleMap: action.data }
    case 'UPDATE_GEO_JSON':
      return { ...state, geoJson: action.data }
    default:
      return state
  }
}

function MapContextProvider (props) {
  let [state, dispatch] = React.useReducer(reducer, initialState)
  let value = { state, dispatch }

  return <MapContext.Provider value={value}>{props.children}</MapContext.Provider>
}

let MapContextConsumer = MapContext.Consumer

export { MapContext, MapContextProvider, MapContextConsumer }
