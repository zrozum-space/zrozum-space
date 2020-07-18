import React from 'react'
import { StyleSheetManager } from 'styled-components'
import GlobalStyle from '../../components/GlobalStyle'

const StylesInjector = ({ children }) => {
  const iframe = document.querySelector('iframe[class*="PreviewPaneFrame"]')
  const iframeHeadElement = iframe.contentDocument.head
  return (
    <>
      <StyleSheetManager target={iframeHeadElement}>
        <div style={{ marginTop: '5rem' }}>
          <GlobalStyle />
          <link href="https://fonts.googleapis.com/css2?family=Jura&family=Quicksand&display=swap" rel="stylesheet"></link>
          {children}
        </div>
      </StyleSheetManager>
    </>
  )
}

export default StylesInjector
