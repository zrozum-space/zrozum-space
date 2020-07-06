import { graphql } from 'gatsby'
import React from 'react'
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'

export const PlainPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <>
      <PageHeader title={title} />
      <PageContent className="content" content={content} />
    </>
  )
}

const PlainPage = ({
  data: {
    markdownRemark: { frontmatter, html },
  },
}) => (
  <Layout>
    <PlainPageTemplate contentComponent={HTMLContent} title={frontmatter.title} content={html} />
  </Layout>
)

export default PlainPage

export const plainPageQuery = graphql`
  query PlainPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
