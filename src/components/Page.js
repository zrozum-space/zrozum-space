import React from 'react'
import styled from 'styled-components'

const PageWrapper = styled.div`
  padding: 5rem 20rem;
  overflow-y: auto;
  overflow-x: hidden;
`

const Page = ({ children }) => <PageWrapper>{children}</PageWrapper>

export default Page
