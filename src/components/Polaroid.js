import React from 'react'
import styled from 'styled-components'

import portrait from '../components/img/portrait.jpeg'

const PolaroidContainer = styled.div`
    width: 200px;
    height: 260px;
    background-color: white;
    box-shadow: 0px 5px 10px #555555;
    margin: 5px 0px;
    padding-top: 20px;
    text-align: center;
    float: none;
    margin-left: auto;
    margin-right: auto;

    @media(min-width: 768px) {
        float: left;
    }
`

const Portrait = styled.img`
    max-width: 170px;
    display: block;
    margin-left: auto;
    margin-right: auto;
`

const Polaroid = () => (
    <PolaroidContainer>
        <Portrait src={portrait} />
        <p>Me!</p>
    </PolaroidContainer>
)

export default Polaroid