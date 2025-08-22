import React from 'react'
import Routes from './Routes'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/react-query'

export default function App() {
  return(
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  )
}