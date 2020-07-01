import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import TagsList from './TagsList'

const BlogRollWrapper = styled.div`
  a {
    color: #5e81ac;
  }

  .date {
    font-family: var(--distincitveFont);
  }

  &:not(:first-of-type) {
    margin-top: 5rem;
  }

  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`

class BlogRoll extends React.Component {
  render() {
    const { posts } = this.props
    console.log(posts)

    return (
      posts &&
      posts.map(({ node: post }) => (
        <BlogRollWrapper key={post.id}>
          <article style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
            <span className="date">{post.frontmatter.date}</span>
          </article>
          <p>{post.excerpt}</p>
          {post.frontmatter.tags && <TagsList tags={post.frontmatter.tags} />}
        </BlogRollWrapper>
      ))
    )
  }
}

export default BlogRoll
