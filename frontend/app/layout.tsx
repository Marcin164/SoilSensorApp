'use client'

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from 'react-query'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Gardener',
  description: 'Water and manage your plants!',
}

const queryClient = new QueryClient()

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </body>
    </html>
  )
}
