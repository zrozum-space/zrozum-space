import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'

const Wrapper = styled.div`
  span {
    color: #bf616a;
    font-family: var(--distinctiveFont);
    font-weight: bold;
  }
`

const NotFoundPage = () => (
  <Layout>
    <Wrapper>
      <h1>
        Don't <span>PANIC</span>!{' '}
      </h1>
      <p>Nie możemy znaleźć strony, której szukasz! :(</p>
    </Wrapper>
  </Layout>
)

export default NotFoundPage
