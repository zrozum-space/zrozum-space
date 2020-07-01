import React from 'react'
import styled from 'styled-components'
import TagsList from './TagsList'
import Menu from './Menu'

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--sidebarColor);
  padding: 5rem;
  width: 50rem;

  h1 {
    text-transform: uppercase;
    color: #2e3440;
  }

  h3 {
    font-weight: 100;
  }

  img {
    width: 40rem;
  }

  & > * {
    margin-bottom: 5rem;
  }
`

const Sidebar = () => (
  <SidebarWrapper>
    <div>
      <img src="/img/staring-at-the-stars.svg" alt="Zrozum.space illustration"></img>
      <h1>Zrozum.Space</h1>
      <h3>Klarowne odpowiedzi na nurtujące pytania</h3>
    </div>
    <Menu />
    <TagsList />
  </SidebarWrapper>
)

export default Sidebar
