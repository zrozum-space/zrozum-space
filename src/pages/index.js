import { StaticQuery } from 'gatsby'
import React from 'react'
import BlogList from '../components/BlogList'
import Layout from '../components/Layout'
import Page from '../components/Page'
import PageHeader from '../components/PageHeader'

const ArticlesPage = () => {
  return (
    <Layout>
      <Page>
        <PageHeader title="Wszystkie artykuły" />
        <StaticQuery
          query={graphql`
            query ArticlesQuery {
              allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] }
                filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
              ) {
                edges {
                  node {
                    excerpt(pruneLength: 250)
                    id
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      templateKey
                      date(formatString: "DD.MM.YYYY HH:mm")
                      tags
                    }
                  }
                }
              }
            }
          `}
          render={({ allMarkdownRemark: { edges } }) => <BlogList posts={edges} />}
        />
      </Page>
    </Layout>
  )
}

export default ArticlesPage
