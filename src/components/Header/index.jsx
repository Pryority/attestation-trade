import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ConnectButton } from '@rainbow-me/rainbowkit'

const Nav = styled.nav`
  background: #1e1e1e;
  box-shadow: 0px 6px 8px -6px rgba(20, 23, 26, 0.06), 0px 8px 16px -6px rgba(20, 23, 26, 0.04);
  height: 72px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 0px 0px 32px;

  @media (max-width: 900px) {
    width: 40%;
  }
  @media (max-width: 600px) {
    display: none;
    width: 30%;
  }
  @media (max-width: 380px) {
    width: 25%;
  }
`

const Right = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 32px 0px 0px;
  justify-content: space-between;
  width: 50%;
  @media (max-width: 600px) {
    width: 100%;
    padding: 32px;
  }
`

const Title = styled.h1`
  font-family: Rubik;
  font-style: italic;
  font-weight: 700;
  color: rgb(255, 4, 32);
  letter-spacing: 0.1rem;

  @media (max-width: 800px) {
    font-size: medium;
  }

  @media (max-width: 600px) {
    display: none;
  }
`

const TitleAccent = styled.span`
  color: #c0b9b9;
  font-weight: 400;
`

const Link = styled.a`
  cursor: pointer;
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #b0acac;
  @media (max-width: 800px) {
    font-size: small;
  }

  ${({ active }) =>
    active &&
    `
    color: #f2e6e6;
    border-bottom: 3px solid #FF0420;
    border-radius: 100px 100px 0px 0px;
  `}
`

const Header = ({ activeContent, setActiveContent }) => (
  <Nav>
    <Left>
      <Title>
        ATTESTATIONSTATION <TitleAccent>TRADE</TitleAccent>
      </Title>
    </Left>

    <Right>
      <Link
        active={activeContent === 0}
        onClick={() => setActiveContent(0)}
      >
        New call
      </Link>
      <Link
        active={activeContent === 1}
        onClick={() => setActiveContent(1)}
      >
        Query calls
      </Link>
      <Link
        active={activeContent === 2}
        onClick={() => setActiveContent(2)}
      >
        About
      </Link>
      <ConnectButton
        accountStatus="avatar"
        chainStatus="icon"
        showBalance={false} />
    </Right>
  </Nav>
)

Header.propTypes = {
  activeContent: PropTypes.number.isRequired,
  setActiveContent: PropTypes.func.isRequired
}

export default Header
