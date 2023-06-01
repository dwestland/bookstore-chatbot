import Chat from '@/components/Chat'
import './globals.css'
import { Inter } from 'next/font/google'
import Providers from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AI Chatbot Beta',
  description: 'Customer support AI Chatbot using OpenAI\'s gpt-3.5-turbo API, using Next JS 13, TypeScript and Tailwind. Features include rate limiting, optimistic UI updates with error handling',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <Providers>
        <body className={inter.className}>
          <Chat />
          {children}
        </body>
      </Providers>
    </html>
  )
}
