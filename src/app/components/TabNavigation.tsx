'use client'

import { useState, useEffect } from 'react'
import DeveloperTab from './DeveloperTab'
import BeatsTab from './BeatsTab'
import AboutTab from './AboutTab'

type TabType = 'developer' | 'beats' | 'about'

export default function TabNavigation() {
  const [activeTab, setActiveTab] = useState<TabType>('developer')

  // Handle URL hash on mount and hash changes
  useEffect(() => {
    const getTabFromHash = (): TabType => {
      const hash = window.location.hash.slice(1) as TabType
      if (['developer', 'beats', 'about'].includes(hash)) {
        return hash
      }
      return 'developer'
    }

    setActiveTab(getTabFromHash())

    const handleHashChange = () => {
      setActiveTab(getTabFromHash())
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleTabClick = (tab: TabType) => {
    setActiveTab(tab)
    window.location.hash = tab
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Desktop Tab Navigation */}
      <nav className="hidden border-b border-gray-800 bg-black md:block">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button
              onClick={() => handleTabClick('developer')}
              className={`border-b-2 px-4 py-4 text-sm font-medium transition-colors ${
                activeTab === 'developer'
                  ? 'border-red-500 text-red-500'
                  : 'border-transparent text-gray-400 hover:border-gray-600 hover:text-gray-200'
              }`}
            >
              💻 Developer
            </button>
            <button
              onClick={() => handleTabClick('beats')}
              className={`border-b-2 px-4 py-4 text-sm font-medium transition-colors ${
                activeTab === 'beats'
                  ? 'border-red-500 text-red-500'
                  : 'border-transparent text-gray-400 hover:border-gray-600 hover:text-gray-200'
              }`}
            >
              🎵 Beats
            </button>
            <button
              onClick={() => handleTabClick('about')}
              className={`border-b-2 px-4 py-4 text-sm font-medium transition-colors ${
                activeTab === 'about'
                  ? 'border-red-500 text-red-500'
                  : 'border-transparent text-gray-400 hover:border-gray-600 hover:text-gray-200'
              }`}
            >
              👤 About
            </button>
          </div>
        </div>
      </nav>

      {/* Tab Content */}
      <main className="flex-1 pb-32 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {activeTab === 'developer' && <DeveloperTab />}
          {activeTab === 'beats' && <BeatsTab />}
          {activeTab === 'about' && <AboutTab />}
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-16 left-0 right-0 border-t border-gray-200 bg-white md:hidden">
        <div className="grid grid-cols-3">
          <button
            onClick={() => handleTabClick('developer')}
            className={`flex flex-col items-center py-3 text-xs font-medium transition-colors ${
              activeTab === 'developer'
                ? 'text-red-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <span className="text-2xl">💻</span>
            <span className="mt-1">Developer</span>
          </button>
          <button
            onClick={() => handleTabClick('beats')}
            className={`flex flex-col items-center py-3 text-xs font-medium transition-colors ${
              activeTab === 'beats'
                ? 'text-red-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <span className="text-2xl">🎵</span>
            <span className="mt-1">Beats</span>
          </button>
          <button
            onClick={() => handleTabClick('about')}
            className={`flex flex-col items-center py-3 text-xs font-medium transition-colors ${
              activeTab === 'about'
                ? 'text-red-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <span className="text-2xl">👤</span>
            <span className="mt-1">About</span>
          </button>
        </div>
      </nav>
    </div>
  )
}
