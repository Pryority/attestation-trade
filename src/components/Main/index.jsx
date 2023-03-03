import React from 'react'
import styled from 'styled-components'
import { NewAttestation } from '../NewAttestation' // import NewAttestation component

const BuyCard = styled.div`
  background-color: #84dd20;
  width: screen;
  height: 100vh;
  padding: 16px 20px;
`

const SellCard = styled.div`
  background-color: #df3340;
  width: screen;
  height: 100vh;
  padding: 16px 20px;
  text-align: end;
`

const CallWrapper = styled.div`
  width: screen;
  height: 80vh;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  overflow: hidden;
`

const HalfScreen = styled.div`
  height: 100%;
`

const Left = styled(HalfScreen)`
  width: 50%;
`

const Right = styled(HalfScreen)`
  width: 50%;
  background-color: #711f25;
`

const Centered = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  margin-top: 200px; /* adjust this value as needed */
`

const ShortTitle = styled.h2`
  color: #711f25;
  letter-spacing: -2px;
`

const LongTitle = styled.h2`
  color: #64942f;
  letter-spacing: -2px;
`

const BuyCallCard = styled.article`
  display: flex;
  align-items: start;
  justify-content: space-between;
  padding: 2px 12px;
  background-color: #507c16;
  border: 1.62px solid #a2e754;
  box-shadow: 0px 0px 8px -4px rgba(20, 23, 26, 0.12), 0px 4px 16px -1px rgba(20, 23, 26, 0.08);
  border-radius: 16px;
  color: #fff;
  width: screen;
  text-align: start;

  @media screen and (max-width: 600px) {
    padding: 10px 16px;
    border-radius: 8px;
  }
`

const SellCallCard = styled.article`
  display: flex;
  align-items: start;
  justify-content: space-between;
  padding: 2px 12px;
  background-color: #8d0a0a;
  border: 1.62px solid #ef5a5a;
  box-shadow: 0px 0px 8px -4px rgba(20, 23, 26, 0.12), 0px 4px 16px -1px rgba(20, 23, 26, 0.08);
  border-radius: 16px;
  color: #fff;
  width: screen;
  text-align: start;

  @media screen and (max-width: 600px) {
    padding: 10px 16px;
    border-radius: 8px;
  }
`

const CallCardText = styled.h4`
  font-weight: 300;
  letter-spacing: 1px;
`
const CallCardCaller = styled.h4`
  font-weight: 200;
  letter-spacing: 0px;
`

export const Main = () => {
  return (
    <Wrapper>
      <Left>
        <BuyCard>
          <LongTitle>LONG</LongTitle>
          <CallWrapper>
            <BuyCallCard>
              <CallCardText>OP.long.263</CallCardText>
              <CallCardCaller>vitalik.eth</CallCardCaller>
            </BuyCallCard>
            <BuyCallCard>
              <CallCardText>ETH.long.1560</CallCardText>
              <CallCardCaller>0x2453f...8068c</CallCardCaller>
            </BuyCallCard>
            <BuyCallCard>
              <CallCardText>PERP.long.114</CallCardText>
              <CallCardCaller>trade-crypto.eth</CallCardCaller>
            </BuyCallCard>
          </CallWrapper>
        </BuyCard>
      </Left>
      <Right>
      <SellCard>
      <ShortTitle>SHORT</ShortTitle>
      <SellCallCard>
        <CallCardText>ETH.short.1740</CallCardText>
        <CallCardCaller>bearman.eth</CallCardCaller>
      </SellCallCard>
      </SellCard>
      </Right>
      <Centered>
        <NewAttestation/>
      </Centered>
    </Wrapper>
  )
}
