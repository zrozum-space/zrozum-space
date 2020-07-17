import React from 'react'
import { ReadingsPageTemplate } from '../../templates/readings-page'

const ReadingsPreview = ({ entry }) => {
  const books = JSON.parse(JSON.stringify(entry.getIn(['data']).getIn(['books'])))
  return <ReadingsPageTemplate books={books} />
}

export default ReadingsPreview
