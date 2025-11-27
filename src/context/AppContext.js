import React from 'react'

const AppContext = React.createContext({
  contextUsername: '',
  enterUsername: () => {},
})

export default AppContext
