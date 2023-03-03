/* eslint-disable react/prop-types */
import React from 'react'
import { Wrapper } from '../Wrapper'

const Content = (props) => {
  return (
    <Wrapper activeContent={props.activeContent} />
  )
}

export default Content
