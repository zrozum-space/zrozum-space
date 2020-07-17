import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'
import Flex from '../components/Flex'
import Layout from '../components/Layout'
import Page from '../components/Page'
import PageHeader from '../components/PageHeader'

export const ReadingsPageTemplate = ({ books }) => {
  return (
    <Page>
      <PageHeader title="Polecane książki" />
      <Flex flexWrap="wrap">
        {books.map((book) => (
          <Book key={book.name}>
            {book.image.childImageSharp ? (
              <Img fluid={book.image.childImageSharp.fluid} alt={book.name} />
            ) : (
              <img className="preview-image" src={require(`../img/${book.image}`)} alt={book.name} />
            )}
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
  width: 20rem;
  height: 36rem;
  font-size: 1.4rem;
  margin: 2.5rem;
  overflow: hidden;
  a {
    margin-top: 1rem;
  }

  .preview-image {
    width: 100%;
  }
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
            fluid(maxWidth: 200) {
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
