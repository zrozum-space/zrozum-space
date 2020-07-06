import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const MenuWrapper = styled.ul`
  list-style: none;
  font-size: 2.2rem;

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
      <Link to="/">Artykuły</Link>
    </li>
    <li>
      <Link to="/about">O stronie</Link>
    </li>
    <li>
      <Link to="/readings">Książki</Link>
    </li>
    <li>
      <Link to="/colophon">Kolofon</Link>
    </li>
  </MenuWrapper>
)

export default Menu
