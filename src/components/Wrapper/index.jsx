import React from 'react'
import PropTypes from 'prop-types'
import '../../styles/Wrapper.css'

function Wrapper ({ Buy, Sell, NewAttestation }) {
  return (
    <div className="wrapper">
      <div className="half-screen left">{Buy}</div>
      <div className="half-screen right">{Sell}</div>
      <div className="centered">{NewAttestation}</div>
    </div>
  )
}

Wrapper.propTypes = {
  Buy: PropTypes.element.isRequired,
  Sell: PropTypes.element.isRequired,
  NewAttestation: PropTypes.element.isRequired
}

export default Wrapper
