import { ClerkProvider } from '@clerk/nextjs'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gen-Ai',
  description: 'Gen-Ai is a platform for experiencing ai models.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <link
          rel="preload"
          href="/hero_use_case_v5.riv"
          as="fetch"
          crossOrigin="anonymous"
        />
        <body className={inter.className}>
          <nav>
            <div className='flex p-10 items-center justify-between font-bold'>
              <div className='flex items-center gap-3'>
                <Link href="/" className='flex items-center '>
                  <Image src="/s.png" alt="Logo" width={35} height={35} className='mr-[-2px]'/>
                  <h1 className='text-xl'>wap-Ai</h1>
                </Link>
              </div>
              <div>

              </div>
              <div className='flex gap-8 items-center'>
                <ul className='flex gap-5'>
                  <li className='border-white border-b-2 hover:border-black'>
                    <Link href="/Home">Home</Link>
                  </li>
                  <li className='border-white border-b-2 hover:border-black'>
                    <Link href="/About">About</Link>
                  </li>
                  <li className='border-white border-b-2 hover:border-black'>
                    <Link href="/Pricing">Pricing</Link>
                  </li>
                  <li className='border-white border-b-2 hover:border-black'>
                    <Link href="https://kanugurajesh.github.io">Blog</Link>
                  </li>
                </ul>
                <UserButton />
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                  <Link href="/Contact">Contact Us</Link>
                </button>
              </div>
            </div>
          </nav>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
