import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const EMOTICONS = [
  {
    emote: '❤️',
    name: 'love',
  },
  {
    emote: '🙌',
    name: 'hurray',
  },
  {
    emote: '🔥',
    name: 'fire',
  },
]

const ReactionsWidget = ({ postId }) => {
  const [givenReactionsCount, setGivenReactionsCount] = useState({ love: 0, hurray: 0, fire: 0 })
  const [activeItem, setActiveItem] = useState(null)

  useEffect(() => {
    fetch({ url: `${process.env.GATSBY_API_URL}/zrozum-space/reactions/${postId}`, method: 'get' })
      .then((res) => res.json())
      .then(({ reactions, userReaction }) => {
        setActiveItem(userReaction)
        setGivenReactionsCount(reactions)
      })
  }, [postId])

  return (
    <Wrapper>
      {EMOTICONS.map((item) => (
        <Reaction
          key={item.name}
          active={item.name === activeItem}
          onClick={() => {
            if (!activeItem) {
              setGivenReactionsCount((prevState) => ({ ...prevState, [item.name]: prevState[item.name] + 1 }))
              setActiveItem(item.name)
            }
          }}
        >
          {item.emote} <span>{givenReactionsCount[item.name]}</span>
        </Reaction>
      ))}
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

  @media (max-width: 77.8125em) {
    display: none;
  }
`

const Reaction = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
  font-size: 2.25rem;
  cursor: pointer;
  transition: transform 0.3s;
  user-select: none;

  ${(props) =>
    props.active &&
    `
    &::before {
      content: '';
      position: absolute;
      background-color: rgba(0, 153, 218, 0.08);
      width: 5rem;
      height: 5rem;
      border-radius: 10rem;
      z-index: -1;
    }
  `}

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
