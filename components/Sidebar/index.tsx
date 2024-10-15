import Image from "next/image"
import Link from "next/link"
import React from "react"
import { Button } from "../../components/ui/Button"
import { navs } from "./navs"

export default function Sidebar() {
  return (
    <div className="relative flex h-full w-64 flex-col justify-between pb-4 pl-6 text-white">
      <div className="flex items-center justify-center py-10">
        <Image src="/images/logo.png" alt="Logo" width={120} height={62} className="mb-4" />
      </div>
      {/* <div className="flex bg-red-200 py-2"> */}
      <nav>
        <Link
          href="#"
          className={`mb-2 flex items-center p-3 ${true && "rounded-l-full rounded-r-[50px] bg-[#ff9500]"}`}
        >
          <Image src={"/svg/home.svg"} width={20} height={20} className="mr-4" alt="home logo" />
          Home
        </Link>
        {navs.map((nav) => (
          <Link key={nav.id} href={nav.route} className={`mb-2 flex items-center p-3`}>
            <Image src={"/svg/home.svg"} width={20} height={20} className="mr-4" alt="home logo" />
            {nav.name}
          </Link>
        ))}
      </nav>
      <div className="w-full overflow-hidden">
        <div className="px-4 pt-4">
          <h3 className="mb-1 font-medium">Support 24/7</h3>
          <p className="mb-2 text-sm text-gray-400">Contact us anytime</p>
          <Button className="h-[36px] rounded-[10px] bg-[#ff9500] text-white hover:bg-yellow-500">Start</Button>
        </div>
        <div>
          <div className="relative flex justify-end">
            <div className="absolute -bottom-20 -right-20 z-0 size-[240px] rounded-full bg-white/30"></div>
            <Image src={"/images/coder.png"} width={124} height={175} alt="man in chair" className="z-10" />
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  )
}
