import React from 'react'

const Flex = ({ element = 'div', flexDirection = 'row', flexWrap = 'nowrap', justifyContent, alignItems, style, children }) => {
  return React.createElement(element, {
    style: { display: 'flex', flexDirection, justifyContent, flexWrap, alignItems, ...style },
    children,
  })
}

export default Flex
