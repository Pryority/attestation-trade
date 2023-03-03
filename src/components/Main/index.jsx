import React from 'react'
import PropTypes from 'prop-types'
import '../../styles/Main.css'

function Main ({ Buy, Sell, NewAttestation, activeContent, setActiveContent }) {
  return (
    <div className="wrapper">
      <div className="half-screen left">{Buy}</div>
      <div className="half-screen right">{Sell}</div>
      <div className="centered">{NewAttestation}</div>
    </div>
  )
}

Main.propTypes = {
  Buy: PropTypes.element.isRequired,
  Sell: PropTypes.element.isRequired,
  NewAttestation: PropTypes.element.isRequired,
  activeContent: PropTypes.element.isRequired,
  setActiveContent: PropTypes.element.isRequired
}

export default Main
