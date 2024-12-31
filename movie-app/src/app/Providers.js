"use client"
import { ThemeProvider } from 'next-themes'
import React from 'react'

const Providers = ({children}) => {
  return (
    <ThemeProvider attribute="class" enableSystem={true} >
    {children}
  </ThemeProvider>
  )
}

export default Providers
