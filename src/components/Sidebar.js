import { useStaticQuery, Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { kebabCase } from 'lodash'

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--sidebarColor);
  padding: 5rem;

  h1 {
    text-transform: uppercase;
    color: #2e3440;
  }

  img {
    width: 40rem;
  }

  & > * {
    margin-bottom: 5rem;
  }
`

const Sidebar = () => {
  const {
    allMarkdownRemark: { group },
  } = useStaticQuery(graphql`
    query TagsQuery {
      allMarkdownRemark {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  return (
    <SidebarWrapper>
      <div>
        <img src="/img/staring-at-the-stars.svg" alt="Zrozum.space illustration"></img>
        <h1>Zrozum.Space</h1>
        <h3>Klarowne odpowiedzi na nurtujące pytania</h3>
      </div>
      <ul>
        <li>Artykuły</li>
        <li>O stronie</li>
        <li>Kolofon</li>
      </ul>
      <ul>
        {Object.values(group).map((tag) => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </SidebarWrapper>
  )
}

export default Sidebar
