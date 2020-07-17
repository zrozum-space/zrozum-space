import React from 'react'
import { ReadingsPageTemplate } from '../../templates/readings-page'

const ReadingsPreview = ({ widgetFor }) => <ReadingsPageTemplate books={widgetFor('books')} />

export default ReadingsPreview
