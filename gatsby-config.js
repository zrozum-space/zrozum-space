module.exports = {
  siteMetadata: {
    title: 'Zrozum Space',
    description: 'Klarowne odpowiedzi na nurtujące pytania o otaczającym nas świecie',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        // gfm: true,
        plugins: [
          { resolve: `gatsby-remark-autolink-headers`, options: { className: 'reference-button' } },
          {
            resolve: 'gatsby-remark-relative-images',
            options: { name: 'uploads' },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
              linkImagesToOriginal: true,
              showCaptions: true,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `zrozum-space`,
      },
    },
    // {
    //   resolve: 'gatsby-plugin-purgecss',
    //   options: {
    //     develop: true,
    //     purgeOnly: ['/all.sass'],
    //   },
    // },
    'gatsby-plugin-netlify',
  ],
}
