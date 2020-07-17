import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Page from '../components/Page'

const Wrapper = styled.div`
  span {
    color: #bf616a;
    font-family: var(--distinctiveFont);
    font-weight: bold;
  }
`

const NotFoundPage = () => (
  <Layout>
    <Page>
      <Wrapper>
        <h1>
          Don't <span>PANIC</span>!{' '}
        </h1>
        <p>Nie możemy znaleźć strony, której szukasz! :(</p>
      </Wrapper>
    </Page>
  </Layout>
)

export default NotFoundPage
