import React from 'react'
import ErrorBoundary from 'react-error-boundary'

import { MapContextProvider } from './misc/MapContext'
import MapContainer from './components/MapContainer'

function App () {
  const myErrorHandler = (error, componentStack) => {
    console.warn(error)
  }

  const MyFallbackComponent = ({ componentStack, error }) => {
    return (
      <div className='container'>
        <div className='alert alert-danger' role='alert'>
          <h4 className='alert-heading'>BOOM !!!!!!!!</h4>
          <p>You haven't gotten any error messages recently, so here is a random one just to let you know that we haven't started caring... just joking...</p>
          <hr />
          <p className='mb-0'>Go get yourself a coffee and waste some time on the internet while we try to find out what went wrong here...</p>
        </div>
      </div>
    )
  }

  return (
    <ErrorBoundary onError={myErrorHandler} FallbackComponent={MyFallbackComponent}>
      <MapContextProvider>
        <div className='container-fluid'>
          <div className='row'>
            <main id='mapContainer' className='col'>
              <MapContainer />
            </main>
            <aside className='col-3'>
              <div>This is some sidebar</div>
            </aside>
          </div>
        </div>
      </MapContextProvider>
    </ErrorBoundary>
  )
}

export default App
