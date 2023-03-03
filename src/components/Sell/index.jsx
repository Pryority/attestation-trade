import React from 'react'
import styled from 'styled-components'

export const Sell = () => {
  const Card = styled.div`
    background-color: #df3340;
    width: 100%;
    height: 100vh;
    padding: 16px 20px;
    position: relative;
  `

  const Title = styled.h2`
  color: #711f25;
  text-align: right;
  display: flex;
  justify-content: end;
  margin-right: 48px;
`
  return (
    <Card>
      <Title>SELL</Title>
    </Card>
  )
}
