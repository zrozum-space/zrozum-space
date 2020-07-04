import { graphql } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import TagsList from '../components/TagsList'

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

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate={`%s | ${data.site.siteMetadata.title}`}>
            <title>{`${post.frontmatter.title}`}</title>
            <meta name="description" content={`${post.frontmatter.description}`} />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

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
