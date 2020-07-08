import { graphql } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import TagsList from '../components/TagsList'
import ReactionsWidget from '../components/ReactionsWidget'

const BlogPostWrapper = styled.div`
  ul:not(.tags-list) {
    list-style: circle inside;
  }
`

export const BlogPostTemplate = ({ content, contentComponent, description, tags, title, helmet }) => {
  const PostContent = contentComponent || Content

  return (
    <BlogPostWrapper>
      {helmet || ''}
      <ReactionsWidget />
      <PageHeader title={title} description={description} />
      <PostContent content={content} />
      {tags && tags.length > 0 && (
        <section className="section-with-break">
          <TagsList tags={tags} />
        </section>
      )}
    </BlogPostWrapper>
  )
}

const BlogPost = ({
  data: {
    markdownRemark: { html, frontmatter },
    site,
  },
}) => (
  <Layout>
    <BlogPostTemplate
      content={html}
      contentComponent={HTMLContent}
      description={frontmatter.description}
      helmet={
        <Helmet titleTemplate={`%s | ${site.siteMetadata.title}`}>
          <title>{`${frontmatter.title}`}</title>
          <meta name="description" content={`${frontmatter.description}`} />
          {/* todo og for blog post */}
        </Helmet>
      }
      tags={frontmatter.tags}
      title={frontmatter.title}
    />
  </Layout>
)

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
