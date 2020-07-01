import React from 'react'
import styled from 'styled-components'

const PageWrapper = styled.div`
  padding: 5rem 15rem;
  overflow-y: auto;
`

const Page = ({ children }) => <PageWrapper>{children}</PageWrapper>

export default Page
