import React from 'react'
import styled from 'styled-components'

const ReactionsWidget = () => {
  return (
    <Wrapper>
      <Reaction>
        ❤️ <span>0</span>
      </Reaction>
      <Reaction>
        🙌 <span>0</span>
      </Reaction>
      <Reaction>
        🔥 <span>0</span>
      </Reaction>
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  width: 5rem;
  border-radius: 5rem;
  top: 15rem;
  right: 5rem;
  padding: 3rem;
  /* background-color: #eceff4; */

  @media (max-width: 77.8125em) {
    display: none;
  }
`

const Reaction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
  font-size: 2.25rem;
  cursor: pointer;
  transition: transform 0.3s;
  user-select: none;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: translateY(-0.5rem);
  }

  span {
    border-radius: 10rem;
    background-color: #e5e9f0;
    display: inline-block;
    padding: 0.25rem 0.75rem;
    font-size: 1.2rem;
  }
`

export default ReactionsWidget
