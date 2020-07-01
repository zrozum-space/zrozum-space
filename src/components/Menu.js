import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const MenuWrapper = styled.ul`
  list-style: none;
  font-family: var(--distincitveFont);
  font-size: 2.2rem;
  text-transform: uppercase;

  a {
    color: #2e3440;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

const Menu = () => (
  <MenuWrapper>
    <li>
      <Link to="/blog">Artykuły</Link>
    </li>
    <li>
      <Link to="/about">O stronie</Link>
    </li>
    <li>
      <Link to="/colophon">Kolofon</Link>
    </li>
  </MenuWrapper>
)

export default Menu
