import React from "react";
import Link from "next/link";

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
  ];
  return (
    <div className="h-screen flex flex-col justify-between  w-64 fixed">
      {/* Logo */}
      <div className="flex items-center justify-center p-6">
        <Link href="/">
          <img
            src="../public/images/logo.png"
            alt="Logo"
            className="cursor-pointer h-12 w-12"
          />
        </Link>
      </div>

      {/* Main Navigation */}
      <nav className="flex flex-col gap-6 px-6">
        {menuItem.map((menu, index) => (
          <Link href={menu.link} key={menu.link}>
            <div className="relative group cursor-pointer">
              {/* Bubble Effect */}
              <span className="absolute inset-0 rounded-full scale-0 group-hover:scale-100 bg-orange-500  transition-transform duration-300"></span>
              <p className="relative z-10 py-3 px-4 group-hover:text-white-300 transition-colors duration-300">
                {menu.name}
              </p>
            </div>
          </Link>
        ))}
      </nav>

      {/* Contact Support at the bottom */}
      <div className="p-6 flex items-center justify-center">
        <div className="text-center">
          <button className="bg-orange-700 text-white py-2 px-4 rounded-lg hover:bg-orange-500 transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
