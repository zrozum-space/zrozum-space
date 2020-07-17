import { withPrefix } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import GlobalStyle from './GlobalStyle'
import Sidebar from './Sidebar'
import useSiteMetadata from './SiteMetadata'

const LayoutWrapper = styled.div`
  display: flex;
  height: 100vh;

  @media (max-width: 77.8125em) {
    flex-direction: column;
    height: 100%;
  }
`

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="PL" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="theme-color" content="#fff" />
        <link rel="apple-touch-icon" sizes="180x180" href={`${withPrefix('/')}img/apple-touch-icon.png`} />
        <link rel="icon" type="image/png" href={`${withPrefix('/')}img/favicon-32x32.png`} sizes="32x32" />
        <link rel="icon" type="image/png" href={`${withPrefix('/')}img/favicon-16x16.png`} sizes="16x16" />
        <link href="https://fonts.googleapis.com/css2?family=Jura&family=Quicksand&display=swap" rel="stylesheet"></link>

        <meta property="og:site_name" content={title} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={`${withPrefix('/')}img/favicon-512x512.png`} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
      </Helmet>
      <LayoutWrapper>
        <Sidebar />
        {children}
      </LayoutWrapper>
      <GlobalStyle />
    </div>
  )
}

export default Layout
