import { withPrefix } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import GlobalStyle from './GlobalStyle'
import Page from './Page'
import Sidebar from './Sidebar'
import useSiteMetadata from './SiteMetadata'

const LayoutWrapper = styled.div`
  display: flex;
  height: 100vh;
`

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="pl" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="theme-color" content="#fff" />

        <link rel="apple-touch-icon" sizes="180x180" href={`${withPrefix('/')}img/apple-touch-icon.png`} />
        <link rel="icon" type="image/png" href={`${withPrefix('/')}img/favicon-32x32.png`} sizes="32x32" />
        <link rel="icon" type="image/png" href={`${withPrefix('/')}img/favicon-16x16.png`} sizes="16x16" />
        <link rel="mask-icon" href={`${withPrefix('/')}img/safari-pinned-tab.svg`} color="#ff4400" />
        <link href="https://fonts.googleapis.com/css2?family=Jura&family=Quicksand&display=swap" rel="stylesheet"></link>

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={`${withPrefix('/')}img/og-image.jpg`} />
      </Helmet>
      <LayoutWrapper>
        <Sidebar />
        <Page>{children}</Page>
      </LayoutWrapper>
      <GlobalStyle />
    </div>
  )
}

export default Layout
