// inicializar o contexto

import { createContext } from "react";

export const ThemeContext = createContext()

// Montar o provedor

export const ThemeProvider = ({ children }) => {

  return (
    <ThemeContext.Provider value={{
      color: 'dark',

    }}>
      {children}
    </ThemeContext.Provider>
  )
}
