import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="absolute inset-0 flex flex-col justify-center items-center">
      <h2 className="text-4xl mb-4">Creative Chakra Spa Customer Support</h2>
      <h1 className="text-6xl mb-10">AI Chatbot Beta</h1>
    </main>
  )
}
