// app/providers.jsx
'use client'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

interface props {
    children: React.ReactNode
}
export default function ReactQueryProvider({ children }: props) {
    const [queryClient] = React.useState(() => new QueryClient())

    return (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
}