import { graphql } from 'gatsby'
import React from 'react'
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <>
      <PageHeader title={title} />
      <PageContent className="content" content={content} />
    </>
  )
}

const AboutPage = ({
  data: {
    markdownRemark: { frontmatter, html },
  },
}) => (
  <Layout>
    <AboutPageTemplate contentComponent={HTMLContent} title={frontmatter.title} content={html} />
  </Layout>
)

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
