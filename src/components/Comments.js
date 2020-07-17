import { Disqus } from 'gatsby-plugin-disqus'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  iframe {
    width: 100% !important;
  }
`

const Comments = ({ postId, postTitle }) => {
  let disqusConfig = {
    url: `${window.location.href}`,
    identifier: postId,
    title: postTitle,
  }

  return (
    <Wrapper>
      <Disqus config={disqusConfig} />
    </Wrapper>
  )
}

export default Comments
