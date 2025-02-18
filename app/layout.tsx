import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Background from '../components/UI/Background'
import AuthProvider from '../components/Provider'
import { getServerSession } from "next-auth";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EMA - Wishes',
  description: 'Write your own EMA',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession()

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider session={session}>
          <Background>
            {children}
          </Background>
        </AuthProvider>
      </body>
    </html>
  )
}
