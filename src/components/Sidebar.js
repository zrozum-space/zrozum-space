import React from 'react'
import styled from 'styled-components'
import TagsList from './TagsList'
import Menu from './Menu'
import logo from '../img/staring-at-the-stars.svg'

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--sidebarColor);
  padding: 8rem;
  width: 30%;

  @media (max-width: 77.8125em) {
    padding: 8rem 3rem;
    width: 100%;
    align-items: center;
  }

  h1 {
    text-transform: uppercase;
    color: #2e3440;
  }

  h3 {
    font-weight: 100;
  }

  img {
    width: 40rem;

    @media (max-width: 77.8125em) {
      width: 100%;
    }
  }

  & > * {
    margin-bottom: 5rem;
  }
`

const Sidebar = () => (
  <SidebarWrapper>
    <div>
      <img src={logo} alt="Zrozum.space illustration"></img>
      <h1>Zrozum.Space</h1>
      <h3>Klarowne odpowiedzi na nurtujące pytania</h3>
    </div>
    <Menu />
    <TagsList />
  </SidebarWrapper>
)

export default Sidebar
