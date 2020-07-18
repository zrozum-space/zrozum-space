import React from 'react'
import { BlogPostTemplate } from '../../templates/blog-post'
import StylesInjector from './StylesInjector'

const BlogPostPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags'])
  return (
    <StylesInjector>
      <BlogPostTemplate
        content={widgetFor('body')}
        description={entry.getIn(['data', 'description'])}
        tags={tags && tags.toJS()}
        title={entry.getIn(['data', 'title'])}
        preview={true}
      />
    </StylesInjector>
  )
}

export default BlogPostPreview
