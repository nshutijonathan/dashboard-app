'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import LoginForm from './components/LoginForm'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      router.push('/dashboard')
    }
  }, [router])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Dashboard Login</h1>
      <LoginForm />
    </main>
  )
}