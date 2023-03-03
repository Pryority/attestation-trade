import React from 'react'
import PropTypes from 'prop-types'
import AboutAttestations from '../About'

import ReadAttestation from '../ReadAttesatation'
import { Main } from '../Main'

export const Wrapper = ({ activeContent }) => {
  switch (activeContent) {
    case 0:
      return <Main/>
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
