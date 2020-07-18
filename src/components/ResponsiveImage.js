import React from 'react'
import Img from 'gatsby-image'

const ResponsiveImage = ({ image, alt }) => {
  return image.childImageSharp ? (
    <Img fluid={image.childImageSharp.fluid} alt={alt} />
  ) : (
    <img style={{ display: 'table', maxWidth: '100%', margin: 'auto' }} src={require(`../img/${image}`)} alt={alt} />
  )
}

export default ResponsiveImage
