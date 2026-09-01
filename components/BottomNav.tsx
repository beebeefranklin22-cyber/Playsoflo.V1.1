'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function BottomNav() {
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/discover', label: 'Discover', icon: '🔍' },
    { href: '/apps', label: 'Apps', icon: '📱' },
    { href: '/profile', label: 'Profile', icon: '👤' },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 max-w-md mx-auto">
      <div className="flex justify-around">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex-1 py-3 text-center text-sm font-medium transition-colors ${
              pathname === item.href
                ? 'text-blue-500'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <div className="text-xl mb-1">{item.icon}</div>
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
