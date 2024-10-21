import React from "react"
import Sidebar from "components/Sidebar"
import HomeScreen from "components/Home"

export default function Dashboard() {
  return (
    <div className="flex h-screen flex-1 overflow-auto bg-gray-100 bg-[linear-gradient(118.99deg,#0B00AE_0.59%,#FF9500_100%)]">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <HomeScreen />
    </div>
  )
}
