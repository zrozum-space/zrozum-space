import { graphql } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import Comments from '../components/Comments'
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import Page from '../components/Page'
import PageHeader from '../components/PageHeader'
import ReactionsWidget from '../components/ReactionsWidget'
import TagsList from '../components/TagsList'

const BlogPostWrapper = styled.div`
  ul:not(.tags-list) {
    list-style: circle inside;
  }
`

export const BlogPostTemplate = ({ id, date, content, contentComponent, description, tags, title, helmet }) => {
  const PostContent = contentComponent || Content

  return (
    <Page>
      <BlogPostWrapper>
        {helmet || ''}
        <ReactionsWidget postCreationDate={date} />
        <PageHeader title={title} description={description}>
          <div style={{ marginBottom: '2.5rem', marginTop: '1rem' }}>
            <TagsList tags={tags} />
          </div>
        </PageHeader>
        <PostContent content={content} />
        <span className="separator"></span>
        <Comments postId={date} postTitle={title} />
      </BlogPostWrapper>
    </Page>
  )
}

const BlogPost = ({
  data: {
    markdownRemark: { id, html, frontmatter },
    site,
  },
}) => (
  <Layout>
    <BlogPostTemplate
      id={id}
      date={new Date(frontmatter.date).getTime()}
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
