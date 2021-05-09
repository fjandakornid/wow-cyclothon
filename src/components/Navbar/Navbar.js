import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSunRain, faCrown } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

import { calculateDistanceTest } from '../../misc/mapFunctions'
import route from '../../data/route.json'

function Navbar() {
  useEffect(() => {
    calculateDistanceTest(route)
  }, [])

  return (
    <nav className='navbar navbar-expand navbar-dark'>
      <span className='navbar-brand mb-0 h1'>WOW Cyclothon</span>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <FontAwesomeIcon icon={faCrown} size='2x' />
          </li>
          <li className="nav-item">
            <FontAwesomeIcon icon={faCloudSunRain} size='2x' />
          </li>
          <li className="nav-item">
            <FontAwesomeIcon icon={faTwitter} size='2x' />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar