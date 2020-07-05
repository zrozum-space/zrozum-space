import { graphql, Link, StaticQuery } from 'gatsby'
import { kebabCase } from 'lodash'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  list-style: none;

  @media (max-width: 77.8125em) {
    justify-content: center;
  }

  & > * {
    margin-right: 2rem;
  }

  li {
    font-size: 1.5rem;

    a {
      text-decoration: none;
      color: #5e81ac;

      &:hover {
        text-decoration: underline;
      }
    }

    span {
      font-weight: bold;
    }

    &::before {
      content: '';
      width: 2rem;
      height: 2rem;
      background-color: red;
    }
  }
`

const TagsList = ({ tags, fetched: isFetched }) => {
  const currentTags = isFetched ? tags : tags.map((tag) => ({ fieldValue: tag }))

  return (
    <Wrapper className="tags-list">
      {currentTags.map((tag) => (
        <li key={tag.fieldValue}>
          <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
            #{tag.fieldValue} {isFetched && <span>({tag.totalCount})</span>}
          </Link>
        </li>
      ))}
    </Wrapper>
  )
}

export default ({ tags }) =>
  tags ? (
    <TagsList tags={tags} />
  ) : (
    <StaticQuery
      query={graphql`
        query TagsQuery {
          allMarkdownRemark {
            group(field: frontmatter___tags) {
              fieldValue
              totalCount
            }
          }
        }
      `}
      render={({ allMarkdownRemark: { group: tags } }) => <TagsList tags={tags} fetched />}
    />
  )
