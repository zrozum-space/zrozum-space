import React from 'react'
import { ReadingsPageTemplate } from '../../templates/readings-page'
import StylesInjector from './StylesInjector'

const ReadingsPreview = ({ entry }) => {
  const books = JSON.parse(JSON.stringify(entry.getIn(['data']).getIn(['books'])))
  return (
    <StylesInjector>
      <ReadingsPageTemplate books={books} />
    </StylesInjector>
  )
}

export default ReadingsPreview
