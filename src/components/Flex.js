import React from 'react'

const Flex = ({ element = 'div', flexDirection = 'row', justifyContent, alignItems, children }) => {
  return React.createElement(element, { style: { display: 'flex', flexDirection, justifyContent, alignItems }, children })
}

export default Flex
