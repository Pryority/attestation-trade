import styled from 'styled-components'

export const Page = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 60px;
  height: 100vh;
  @media screen and (max-width: 600px) {
    margin-top: 30px;
  }
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px 36px;
  background-color: red;
  box-shadow: 0px 0px 8px -4px rgba(20, 23, 26, 0.12), 0px 4px 16px -1px rgba(20, 23, 26, 0.08);
  border-radius: 16px;

  @media screen and (max-width: 600px) {
    padding: 16px 20px;
    border-radius: 8px;
  }
`

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 20px;
  background-color: #1e1e1e;
  box-shadow: 0px 0px 8px -4px rgba(20, 23, 26, 0.12), 0px 4px 16px -1px rgba(20, 23, 26, 0.08);
  border-radius: 16px;

  @media screen and (max-width: 600px) {
    padding: 10px 16px;
    border-radius: 8px;
  }
`

export const AboutCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 20px;
  background-color: #1e1e1e;
  box-shadow: 0px 0px 8px -4px rgba(20, 23, 26, 0.12), 0px 4px 16px -1px rgba(20, 23, 26, 0.08);
  border-radius: 16px;
  max-width: 80%;

  @media screen and (max-width: 600px) {
    padding: 10px 16px;
    border-radius: 8px;
  }
`

export const Textarea = styled.textarea`
align-items: center;
border: 1px solid #cbd5e0;
border-radius: 12px;
box-sizing: border-box;
font-size: 14px;
margin: 8px 0;
outline-style: none;
padding: 9px 12px;
width: 456px;
resize:none;
`
