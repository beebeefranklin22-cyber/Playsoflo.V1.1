import BottomNav from '@/components/BottomNav'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-md mx-auto p-6">
        <h1 className="text-4xl font-bold mb-4">Playsoflo</h1>
        <p className="text-gray-300 mb-8">Social entertainment platform</p>
      </div>
      <BottomNav />
    </main>
  )
}
