const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((edge) => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(`src/templates/${String(edge.node.frontmatter.templateKey)}.js`),
        context: {
          id,
        },
      })
    })

    let tags = []
    posts.forEach((edge) => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })

    tags = _.uniq(tags)

    tags.forEach((tag) => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags.js`),
        context: {
          tag,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node)

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { books } = require('./static/readings/books.json')

  books.forEach((book) => {
    const { name, link, image } = book

    const { name: imageName, ext } = path.parse(image)
    const absolutePath = path.resolve(__dirname, './src/img/', image)
    console.log(absolutePath)
    const imageData = { name: imageName, ext, absolutePath, extension: ext.substring(1) }
    const imageNode = {
      ...imageData,
      id: createNodeId(`my-plugin-image-${imageName}`),
      children: [],
      internal: {
        type: 'BookImage',
        contentDigest: createContentDigest(imageData),
      },
    }

    actions.createNode(imageNode)

    const node = {
      id: createNodeId(name),
      name,
      link,
      image: imageNode,
      internal: {
        type: 'Book',
        contentDigest: createContentDigest(book),
      },
    }

    actions.createNode(node)
  })
}
