import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  span.separator {
    display: block;
    border-top: 0.1rem solid rgba(0, 0, 0, 0.1);

    &:last-of-type {
      margin-bottom: 5rem;
    }
  }

  h1 {
    margin-bottom: 2rem;
  }

  h3 {
    padding: 2.5rem 0;
    font-weight: normal;
  }
`

const PageHeader = ({ title, description }) => (
  <Wrapper>
    <h1>{title}</h1>
    {description && (
      <>
        <span className="separator"></span>
        <p>{description}</p>
        <span className="separator"></span>
      </>
    )}
  </Wrapper>
)

export default PageHeader
