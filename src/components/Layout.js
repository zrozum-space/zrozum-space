import { withPrefix } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import './all.sass'
import Menu from './Menu'
import useSiteMetadata from './SiteMetadata'
import GlobalStyle from './GlobalStyle'

const ImageSection = styled.section``
const ContentSection = styled.section``
const LayoutWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
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

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={`${withPrefix('/')}img/og-image.jpg`} />
      </Helmet>
      <LayoutWrapper>
        <Menu />
        <ContentSection>{children}</ContentSection>
        <ImageSection />
      </LayoutWrapper>
      <GlobalStyle />
    </div>
  )
}

export default Layout
