import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Swap Ai',
  description: 'Swap Ai is an application to swap your face with your favourite avatar.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} h-screen`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
  
}
