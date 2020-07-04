import React from 'react'
import styled from 'styled-components'

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;

  padding: 5rem 18rem;
  overflow-y: auto;
  overflow-x: hidden;
  counter-reset: firstLevelHeadings;

  @media (max-width: 77.8125em) {
    padding: 0 4rem;
    width: 100%;
  }

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

  table {
    border: 1px solid #ccc;
    border-collapse: collapse;
    margin: auto;
    padding: 0;
    width: 100%;
    table-layout: fixed;
  }

  table caption {
    font-size: 1.5em;
    margin: 0.5em 0 0.75em;
  }

  table tr {
    background-color: #e5e9f0;
    border: 1px solid #d8dee9;
    padding: 0.35em;
  }

  table th,
  table td {
    padding: 0.625em;
  }

  table th {
    background-color: #d8dee9;
    font-size: 0.85em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  iframe {
    display: table;
    margin: 3rem auto;
    width: 56rem;

    @media (max-width: 37.5em) {
      width: 100% !important;
    }
  }

  a {
    text-decoration: none;
    color: #5e81ac;

    &:hover {
      text-decoration: underline;
    }
  }
`

const Page = ({ children }) => <PageWrapper>{children}</PageWrapper>

export default Page
