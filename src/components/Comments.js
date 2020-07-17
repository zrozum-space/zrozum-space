import { Disqus } from 'gatsby-plugin-disqus'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  iframe {
    width: 100% !important;
  }
`

const Comments = ({ postId, postTitle }) => {
  const [disqusConfig, setDisqusConfig] = useState({})

  useEffect(() => {
    setDisqusConfig({ url: window.location.href, identifier: `${postId}`, title: postTitle })
  }, [postId, postTitle])

  return (
    <Wrapper>
      <Disqus config={disqusConfig} />
    </Wrapper>
  )
}

export default Comments
