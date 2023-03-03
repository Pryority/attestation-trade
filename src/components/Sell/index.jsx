import React from 'react'
import styled from 'styled-components'

export const Sell = () => {
  const Card = styled.div`
    background-color: #df3340;
    width: 100%;
    height: 100vh;
    padding: 16px 20px;
  `
  return (
    <Card>
      <h2 style={{ color: '#711f25' }}>SELL</h2>
    </Card>
  )
}
