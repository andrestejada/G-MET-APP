import React from 'react'
import { Spinner } from 'reactstrap'
import styled from 'styled-components'
const SpinnerContainer = styled.div`
    width: 100%;
    margin: 1em auto;
    text-align: center;
`

const SpinnerCustom = ({color='primary'}) => {
    return (
        <SpinnerContainer>
            <Spinner
                color={color}                
            />
        </SpinnerContainer>
    )
}

export default SpinnerCustom
