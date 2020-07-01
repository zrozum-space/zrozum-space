import { StaticQuery } from 'gatsby'
import React from 'react'
import BlogRoll from '../../components/BlogRoll'
import Layout from '../../components/Layout'
import PageHeader from '../../components/PageHeader'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <PageHeader title="Wszystkie artykuły" />
        <StaticQuery
          query={graphql`
            query BlogRollQuery {
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
                      date(formatString: "MMMM DD, YYYY")
                      tags
                    }
                  }
                }
              }
            }
          `}
          render={(data) => <BlogRoll posts={data.allMarkdownRemark.edges} />}
        />
      </Layout>
    )
  }
}
