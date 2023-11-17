'use client'
import { GlobalStyle } from '../styles/global'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StyleRegistry from '@/lib/styleRegistry'
import Head from './head'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head />
      <body>
        <StyleRegistry>
          <div>
            {children}
          </div>
        </StyleRegistry>
      </body>
      <GlobalStyle />
    </html>
  )
}
