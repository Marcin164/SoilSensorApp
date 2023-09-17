import React, { createContext, useState, useContext } from 'react'

type Props = {
  children: any
}

const Context = createContext()

export const NotificationContextProvider = ({ children }: Props) => {
  const [data, setData] = useState({ type: 'info' })

  return <Context.Provider value={{ data, setData }}>{children}</Context.Provider>
}

export const useNotificationContext = () => {
  return useContext(Context)
}
