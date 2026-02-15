import Header from './components/Header'
import TabNavigation from './components/TabNavigation'
import SocialBar from './components/SocialBar'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <TabNavigation />
      <SocialBar />
    </div>
  )
}
