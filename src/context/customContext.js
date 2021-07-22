import React, {useState} from 'react'

const Context = React.createContext({})

export function ContextProvider ({children}) {
  const [contextProvider, setContextProvider] = useState({})

  return <Context.Provider value={{contextProvider, setContextProvider}}>
    {children}
  </Context.Provider>
}

export default Context
