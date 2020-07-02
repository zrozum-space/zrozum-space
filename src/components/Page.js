import React from 'react'
import styled from 'styled-components'

const PageWrapper = styled.div`
  padding: 5rem 20rem;
  overflow-y: auto;
  overflow-x: hidden;
  counter-reset: firstLevelHeadings;

  .gatsby-resp-image-figure {
    margin: 2rem 0;
  }

  .gatsby-resp-image-figcaption {
    font-size: 1.4rem;
    text-align: center;
  }

  h2,
  h3,
  h4 {
    font-family: var(--distinctiveFont);
    color: #4c566a;
    text-transform: uppercase;
    font-weight: 100;
    letter-spacing: 0.15rem;

    &::before {
      color: #5e81ac;
      margin-right: 1rem;
      font-weight: bold;
    }
  }

  h2 {
    margin: 3rem 0;
    counter-reset: secondLevelHeadings;
    counter-increment: firstLevelHeadings;
    font-size: 2.8rem;

    &::before {
      content: counter(firstLevelHeadings) '.';
    }
  }

  h3 {
    margin: 2rem 2rem;
    counter-reset: thirdLevelHeadings;
    counter-increment: secondLevelHeadings;
    font-size: 2.4rem;

    &::before {
      content: counter(secondLevelHeadings) '.';
    }
  }

  h4 {
    margin: 1rem 4rem;
    counter-increment: thirdLevelHeadings;
    font-size: 1.9rem;

    &::before {
      content: counter(thirdLevelHeadings) '.';
    }
  }
`

const Page = ({ children }) => <PageWrapper>{children}</PageWrapper>

export default Page
