import React from 'react'
import PropTypes from 'prop-types'
import AboutAttestations from '../About'
import Main from '../Main'
import ReadAttestation from '../ReadAttesatation'
import { Buy } from '../Buy'
import NewAttestation from '../NewAttestation'
import { Sell } from '../Sell'

export const Wrapper = ({ activeContent }) => {
  switch (activeContent) {
    case 0:
      return <Main Buy={<Buy/>} Sell={<Sell/>} NewAttestation={<NewAttestation/>}/>
    case 1:
      return <ReadAttestation />
    case 2:
      return <AboutAttestations />
    default:
      return <div>How&apos;d you get here???</div>
  }
}

Wrapper.propTypes = {
  activeContent: PropTypes.shape({
    Buy: PropTypes.any
  })
}
