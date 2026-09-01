'use client'

import { useParams } from 'next/navigation'

export default function Profile() {
  const params = useParams()
  const username = params.username as string

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pb-20">
      <div className="max-w-md mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">@{username}</h1>
        <p className="text-gray-300">User profile</p>
      </div>
    </main>
  )
}
