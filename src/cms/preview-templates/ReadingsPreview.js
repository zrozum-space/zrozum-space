import React from 'react'
import { PlainPageTemplate } from '../../templates/plain-page'

const ReadingsReview = ({ entry, widgetFor }) => <PlainPageTemplate content={widgetFor('body')} title={entry.getIn(['data', 'title'])} />

export default ReadingsReview
