import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Nav = styled.nav`
    width: calc(100% - 2rem);
    display: flex;
    justify-content: space-between;
    margin-left: 1rem;
    margin-right: 1rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    background-color: white;

    top:0;
    position: fixed;
    z-index:100;

  a {
    margin-right: 1rem;
    text-decoration: none;
    letter-spacing: 0.1em;
    color: inherit;

    &:hover,
    &.active {
      text-decoration: underline;
    }
  }
`

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default props => (
  <Nav>
    <NavLink exact to="/" type="no-underline">
      <b>Ethan Zhao</b>
    </NavLink>
    <div>
      <NavLink to="/about/">About</NavLink>
      <a href="https://drive.google.com/file/d/1VMxTaWhIm-txMZMhrfMyTMq4slt7o0Qp/view?usp=sharing">Resume</a>
    </div>
  </Nav>
)