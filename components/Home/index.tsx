import React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/Avatar"
import { Button } from "../../components/ui/Button"
import { Progress } from "../../components/ui/Progress"
import Image from "next/image"
import { stats, courses, community } from "./data"

export default function HomeScreen() {
  return (
    <main className="flex-1 overflow-auto p-6">
      <div className="rounded-[32px] bg-white/85 p-6 shadow">
        {/* Header */}
        <div className="mb-3 flex items-center justify-between">
          <div>
            <h2 className="mb-1 text-start text-sm text-gray-500">Hello John, Welcome back</h2>
            <h1 className="text-2xl font-bold text-[#0B00AE]">Your Dashboard today</h1>
          </div>
          <div className="flex items-center">
            <Avatar className="mr-2 size-[34px]">
              <AvatarImage src="/images/man.png" />
              <AvatarFallback>CE</AvatarFallback>
            </Avatar>
            <div className="mr-2">
              <p className="text-[16px] font-semibold text-[#102844]">Carl Esquer</p>
              <p className="text-[12px] text-[#767278]">Level 3</p>
            </div>
            <Image src="/svg/down.svg" width={10} height={10} className="text-[#102844]" alt="down icon" />
          </div>
        </div>

        {/* Dashboard Stats */}
        <div className="mb-6 grid grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="rounded-[16px] bg-gray-50 px-4 py-8">
              <div className="mb-6 flex items-center">
                <Image src={stat.icon} width={48} height={48} className="mr-2" alt="down icon" />

                <div>
                  <span className="text-[26px] font-bold text-[#102844]">{stat.count}</span>
                  <div className="mb-2 text-[12px] text-[#767278]">{stat.label}</div>
                </div>
              </div>

              <div className="flex items-center">
                <Progress value={stat.progress} className="h-[13px]" />
                <span>50%</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-start justify-between">
          {/* left side */}
          <div className="w-[70%] pr-8">
            {/* Unfinished Courses */}
            <div className="mb-6">
              <div className="flex items-center justify-between">
                <h2 className="text-[28px] font-bold text-[#181B1A]">Your unfinished Courses</h2>
                <Button className="h-[36px] rounded-[10px] bg-[#ff9500] text-white hover:bg-yellow-500">See All</Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {courses.map((course, index) => (
                  <div key={index} className="relative h-[390px] overflow-hidden rounded-[16px]">
                    <img src={course.image} alt={course.title} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 flex items-start justify-between bg-black bg-opacity-50 p-4 text-white">
                      <div className="flex items-center">
                        <Avatar className="mr-2 size-[48px] border-2 border-[#ff9500]">
                          <AvatarImage src="/images/man.png" />
                          <AvatarFallback>CE</AvatarFallback>
                        </Avatar>
                        <div className="mr-2 text-white">
                          <p className="text-[18px] font-bold">{course.instructor}</p>
                          <p className="text-[14px]">{course.user}</p>
                        </div>
                      </div>
                      <span className="rounded-[10px] bg-[#0B00AE] px-4 py-2 text-[16px] text-white">
                        {course.duration}
                      </span>
                    </div>
                    <div className="flex justify-center">
                      <div className="absolute bottom-4 rounded-[16px] bg-[#99A7A280] p-6">
                        <p className="text-semibold text-[18px] text-white">
                          Digital Marketing Pro: Mastering the Online Landscape
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Courses */}
            <div className="mb-6">
              <div className="flex items-center justify-between">
                <h2 className="text-[28px] font-bold text-[#181B1A]">Popular Courses</h2>
                <Button className="h-[36px] rounded-[10px] bg-[#ff9500] text-white hover:bg-yellow-500">See All</Button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    title: "Digital Marketing Ethics: Navigating the Ethical Landscape",
                    instructor: "Evan Lindsey",
                    price: "$155",
                    startDate: "Start: 17 April",
                    image: "/images/image 4.png",
                  },
                  {
                    title: "Pay-Per-Click Powerhouse: Crafting Profitable Campaigns",
                    instructor: "Roger Hamilton",
                    price: "$159",
                    startDate: "Start: 18 April",
                    image: "/images/image 4.png",
                  },
                ].map((course, index) => (
                  <div key={index} className="rounded-lg bg-white p-4">
                    <div className="flex items-center">
                      <Image
                        height={95}
                        width={95}
                        src={course.image}
                        alt={course.title}
                        className="mr-4 size-24 rounded-lg object-cover"
                      />
                      <div>
                        <h3 className="mb-1 text-[18px] text-[#10102D]">{course.instructor}</h3>
                        <p className="mb-1 text-[15px] text-gray-500">{course.startDate}</p>
                        <p className="text-[16px] text-[#FF9500]">{course.price}</p>
                      </div>
                    </div>
                    <p className="mt-2 text-[16px] font-bold text-[#666]">
                      Digital Marketing Ethics: Navigating the Ethical Landscape
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="w-[30%]">
            <h2 className="mb-4 text-start text-[24px] text-[#102844]">My Community</h2>
            <div className="space-y-2 rounded-[16px] bg-white">
              {community.map((community, index) => (
                <div key={index} className="flex items-end border-b border-gray-200 p-4">
                  <Avatar className="mr-2 rounded-[14px]">
                    <AvatarImage src={`/images/image 4.png`} className="rounded-[14px]" />
                    <AvatarFallback>{index + 1}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-[16px] font-semibold text-[#102844]">{community.name}</h3>
                    <p className="text-[12px] text-[#767278]">{community.members}</p>
                  </div>
                  <span
                    className={`text-bold text-[12px] ${community.status === "Private" ? "text-[#FF9500]" : "text-[#0B00AE]"}`}
                  >
                    {community.status}
                  </span>
                </div>
              ))}
            </div>
            <h2 className="mb-4 mt-6 text-start text-[24px] text-[#102844]">Activity</h2>
            <div className="space-y-4">
              {[1, 2].map((_, index) => (
                <div key={index} className="rounded-lg bg-gray-50 p-4">
                  <div className="flex items-center">
                    <Image src={"/svg/board2.svg"} width={36} height={36} alt="" className="mr-2" />
                    <p className="mb-2 text-[10px] font-bold text-[#272835]">
                      2 Assignment are pending of eCommerce Basics
                    </p>
                  </div>
                  <div className="flex justify-end">
                    <Button variant="link" size="sm" className="text-[12px] font-bold text-[#FF9500]">
                      Dismiss
                    </Button>
                    <Button size="sm" className="bg-[#FF9500] text-[12px] text-white">
                      Send Assignment
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
