import styled from 'styled-components'

export const AttestForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 12px 0px;
  width: 100%;
  height: 48px;
`

export const FormLabel = styled.div`
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 500;
  text-align: left;
  color: #b0acac;
  margin-bottom: 8px;
`

export const StyledNonBreakingSpace = styled.span`
  ::before {
    color: #b0acac;
    content: '\u00A0';
  }
`
