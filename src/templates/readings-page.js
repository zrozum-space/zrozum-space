import { graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Flex from '../components/Flex'
import Layout from '../components/Layout'
import Page from '../components/Page'
import PageHeader from '../components/PageHeader'
import ResponsiveImage from '../components/ResponsiveImage'

export const ReadingsPageTemplate = ({ books }) => {
  return (
    <Page>
      <PageHeader title="Polecane książki" />
      <Flex flexWrap="wrap" justifyContent="space-between" alignItems="baseline">
        {books.map((book) => (
          <Book>
            <ResponsiveImage image={book.image} alt={book.name} />
            <a href={book.link}>{book.name}</a>
          </Book>
        ))}
      </Flex>
    </Page>
  )
}

const Book = styled.article`
  display: flex;
  flex-direction: column;
  width: 18rem;
  height: 36rem;
  font-size: 1.4rem;
  overflow: hidden;
  a {
    margin-top: 1rem;
  }

  margin: 1rem 0;
`

const ReadingsPage = ({
  data: {
    allBook: { nodes: books },
  },
}) => {
  return (
    <Layout>
      <ReadingsPageTemplate books={books} />
    </Layout>
  )
}

export default ReadingsPage

export const readingsPageQuery = graphql`
  query {
    allBook {
      nodes {
        id
        image {
          childImageSharp {
            fluid(maxWidth: 180) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        name
        link
      }
    }
  }
`
