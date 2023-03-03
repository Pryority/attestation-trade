import React from 'react'
import styled from 'styled-components'

export const Buy = () => {
  const Card = styled.div`
    background-color: #84dd20;
    width: 100%;
    height: 100vh;
    padding: 16px 20px;
  `
  return (
    <Card>
      <h2 style={{ color: '#64942f' }}>BUY</h2>
    </Card>
  )
}
