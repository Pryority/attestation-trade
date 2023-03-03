import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ethers } from 'ethers'
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
  useNetwork
} from 'wagmi'
import { AttestationStationAddress } from '../../constants/addresses'
import AttestationStationABI from '../../constants/abi.json'

import { AttestForm, FormRow, FormLabel, StyledNonBreakingSpace, FormButton } from '../StyledFormComponents'
import Tooltip from '../Tooltip'
import { H2 } from '../OPStyledTypography'
import { TextInput } from '../OPStyledTextInput'
import { PrimaryButton } from '../OPStyledButton'
import { CallCard } from '../LayoutComponents'
// import { Select } from '../OPStyledSelect'

// const AttestationTypeSelect = styled(Select)`
//   color: ${props => (props.value === 'default' ? '#8496AE' : 'inherit')}
// `

const HashedKey = styled.textarea`
  align-items: center;
  border: 1px solid #cbd5e0;
  border-radius: 12px;
  box-sizing: border-box;
  font-size: 14px;
  margin: 8px 0;
  outline-style: none;
  padding: 9px 12px;
  height: 48px;
  width: 456px;
  resize:none;
`

const Link = styled.a`
  color: #f01a37;
`

const FeedbackMessage = styled.span`
  padding: 0px 36px;
`

const NewAttestation = () => {
  const { chain } = useNetwork()
  const [etherscanBaseLink, setEtherscanBaseLink] = useState('')
  const [about, setAbout] = useState('')
  const [key, setKey] = useState('')
  const [hashedKey, setHashedKey] = useState('')
  const [val, setVal] = useState('')
  const [attestation, setAttestation] = useState({
    about,
    key,
    val
  })

  const [isAboutValid, setIsAboutValid] = useState(false)
  const [isKeyValid, setIsKeyValid] = useState(false)
  const [isValValid, setIsValValid] = useState(false)

  const {
    config,
    error: prepareError,
    isError: isPrepareError
  } = usePrepareContractWrite({
    address: AttestationStationAddress,
    abi: AttestationStationABI,
    functionName: 'attest',
    args: [
      [attestation]
    ],
    enabled: Boolean(about) && Boolean(key) && Boolean(val)
  })
  const { data, error, isError, write } = useContractWrite(config)

  useEffect(() => {
    try {
      if (chain.name === 'Optimism') {
        setEtherscanBaseLink('https://optimistic.etherscan.io/tx/')
      }
      if (chain.name === 'Optimism Goerli') {
        setEtherscanBaseLink('https://goerli-optimism.etherscan.io/tx/')
      }
    } catch (e) {
      console.error(e)
    }
  }, [chain])

  useEffect(() => {
    try {
      let attest
      if (key.length > 31) {
        attest = {
          about,
          key: hashedKey,
          val: ethers.utils.toUtf8Bytes(val === '' ? '0x' : val)
        }
      } else {
        attest = {
          about,
          key: ethers.utils.formatBytes32String(key === '' ? '0x' : key),
          val: ethers.utils.toUtf8Bytes(val === '' ? '0x' : val)
        }
      }
      setAttestation(attest)
    } catch (e) {
      console.error(e)
    }
    setIsAboutValid(ethers.utils.isAddress(about))
    // todo: make this more robust
    setIsKeyValid(key !== '')
    setIsValValid(val !== '')
  }, [about, key, val])

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash
  })

  return (
    <CallCard>
      <H2>MAKE A CALL</H2>
      <AttestForm
        onSubmit={(e) => {
          e.preventDefault()
          write?.()
        }}
      >
        <>
            <FormRow>
              <FormLabel>
                Token address
              </FormLabel>
              <TextInput
                type="text"
                placeholder="Which token are you trading?"
                onChange={(e) => setAbout(e.target.value)}
                value={about}
                valid={isAboutValid}
              />
            </FormRow>

            <FormRow>
              <FormLabel>
                Call key<StyledNonBreakingSpace/>
                <Tooltip>
                  <ul style={{ listStyle: 'none' }}>
                    <li>
                      A key that describes the trade attestation
                    </li>
                    <li>
                      Example: ETH.1600.long:bool
                    </li>
                  </ul>
                </Tooltip>
              </FormLabel>
              <TextInput
                type="text"
                onChange={(e) => {
                  const key = e.target.value
                  if (key.length > 31) {
                    setKey(key)
                    const bytesLikeKey = ethers.utils.toUtf8Bytes(key)
                    const keccak256HashedKey = ethers.utils.keccak256(bytesLikeKey)
                    setHashedKey(keccak256HashedKey)
                  } else {
                    setKey(key)
                    setHashedKey('')
                  }
                }}
                placeholder="Enter a call"
                value={key}
                valid={isKeyValid}
              />
            </FormRow>

            {key.length > 31
              ? <FormRow>
                  <FormLabel>
                    Hashed key&nbsp;
                    <Tooltip>
                      <ul style={{ listStyle: 'none' }}>
                        <li>
                          The key in the smart contract is limited to 32 bytes.
                        </li>
                        <li>
                          When a key is 32 characters or longer, it is hashed with
                          keccack256 to fit in the 32 bytes, and this is the result.
                        </li>
                        <li>
                          This will be the key recorded and used for the AttestationStation.
                        </li>
                      </ul>
                    </Tooltip>
                  </FormLabel>
                  <HashedKey
                    type="text"
                    readOnly
                    value={hashedKey}
                    />
                </FormRow>
              : <span></span>
            }
            <FormRow>
              <FormLabel>
                Attestation value<StyledNonBreakingSpace/>
                <Tooltip>
                  <ul style={{ listStyle: 'none' }}>
                    <li>
                      The value that is associated with the key.
                    </li>
                    <li>
                      {'Example: \'true\', \'340\', \'vitalik.eth\''}
                    </li>
                  </ul>
                </Tooltip>
              </FormLabel>
              <TextInput
                type="text"
                placeholder="Amount of Ether (e.g. 5)"
                onChange={(e) => setVal(e.target.value)}
                value={val}
                valid={isValValid}
              />
            </FormRow>
            <FormButton>
              <PrimaryButton disabled={!write || isLoading || !(isAboutValid && isKeyValid && isValValid)}>
                {isLoading ? 'Making attestion' : 'Make attestation'}
              </PrimaryButton>
            </FormButton>
            {isSuccess && (
              <FeedbackMessage>
                Successfully made attestation:&nbsp;
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`${etherscanBaseLink}${data?.hash}`}>
                    etherscan transaction
                </Link>
              </FeedbackMessage>
            )}
          </>
        {(isPrepareError || isError) && (
          <FeedbackMessage>
              Error: {(prepareError || error)?.message}
          </FeedbackMessage>
        )}
      </AttestForm>
    </CallCard>
  )
}

export default NewAttestation
