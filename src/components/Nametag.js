import React from 'react'
import styled from 'styled-components'

const NametagContainer = styled.div`
    height: calc(100vh - 9rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h1 {
        font-size: 48px;
        font-weight: 700;
        margin: 4px;
    }

    h2 {
        color: white;
        font-size: 32px;
        font-weight: 700;
        margin-top: 8px;
        margin-bottom: 0px;
    }

    h3 {
        color: white;
        font-size: 18px;
        margin-top: 0px;
        margin-bottom: 4px;
    }
`

const Namecard = styled.div`
    height: 15em;
    width: 20em;
    background-color: #e24243;
    border-radius: 24px;
    box-shadow: 0px 5px 10px #555555;
    margin: auto;
    text-align: center;
    display: inline-block;
`

const Namebox = styled.div`
    background-color: white;
    padding: 4px;
`

const Nametag = () => (
    <NametagContainer>
        <Namecard>
        <h2>HELLO</h2>
        <h3>my name is</h3>
            <Namebox>
                <h1>ETHAN ZHAO</h1>
            </Namebox>
        </Namecard>
    </NametagContainer>
)

export default Nametag