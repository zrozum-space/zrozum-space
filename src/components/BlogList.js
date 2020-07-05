import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Flex from './Flex'
import TagsList from './TagsList'

const Wrapper = styled.div`
  a {
    color: #5e81ac;
  }

  .date {
    font-family: var(--distinctiveFont);
  }

  &:not(:first-of-type) {
    margin-top: 5rem;
  }

  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`

const BlogList = ({ posts }) =>
  posts &&
  posts.map(({ node: { id, excerpt, frontmatter: { title, date, tags }, fields: { slug } } }) => (
    <Wrapper key={id}>
      <Flex element="article" justifyContent="space-between">
        <Link to={slug}>{title}</Link>
        <span className="date">{date}</span>
      </Flex>
      <p>{excerpt}</p>
      {tags && <TagsList tags={tags} />}
    </Wrapper>
  ))

export default BlogList
