import { graphql } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import BlogList from '../components/BlogList'

const TagsTemplate = ({
  data: {
    allMarkdownRemark: { edges: posts },
    site: {
      siteMetadata: { title },
    },
  },
  pageContext: { tag },
}) => (
  <Layout>
    <Helmet title={`${tag} | ${title}`} />
    <PageHeader title={`Artykuły #${tag}`} />
    <BlogList posts={posts} />
  </Layout>
)

export default TagsTemplate

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000, sort: { fields: [frontmatter___date], order: DESC }, filter: { frontmatter: { tags: { in: [$tag] } } }) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
