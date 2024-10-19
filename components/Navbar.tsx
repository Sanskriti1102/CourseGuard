import Link from "next/link"
import React from "react"

const Navbar = () => {
  const menuItem = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Courses",
      link: "/courses",
    },
    {
      name: "Messages",
      link: "/messages",
    },
  ]
  return (
    <div className="fixed flex h-screen w-64 flex-col justify-between">
      {/* Logo */}
      <div className="flex items-center justify-center p-6">
        <Link href="/">
          <img src="../public/images/logo.png" alt="Logo" className="h-12 w-12 cursor-pointer" />
        </Link>
      </div>

      {/* Main Navigation */}
      <nav className="flex flex-col gap-6 px-6">
        {menuItem.map((menu, index) => (
          <Link href={menu.link} key={menu.link}>
            <div className="group relative cursor-pointer">
              {/* Bubble Effect */}
              <span className="absolute inset-0 scale-0 rounded-full bg-orange-500 transition-transform duration-300 group-hover:scale-100"></span>
              <p className="group-hover:text-white-300 relative z-10 px-4 py-3 transition-colors duration-300">
                {menu.name}
              </p>
            </div>
          </Link>
        ))}
      </nav>

      {/* Contact Support at the bottom */}
      <div className="flex items-center justify-center p-6">
        <div className="text-center">
          <button className="rounded-lg bg-orange-700 px-4 py-2 text-white transition-colors hover:bg-orange-500">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
