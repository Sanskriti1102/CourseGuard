<<<<<<< Updated upstream
import { Metadata } from "next"
import { Button } from "components/Button/Button"
import { LP_GRID_ITEMS } from "lp-items"
=======
// app/page.tsx (or pages/index.tsx if using pages directory)
"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
>>>>>>> Stashed changes

export const metadata: Metadata = {
  title: "Next.js Enterprise Boilerplate",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://next-enterprise.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/.github/assets/project-logo.png",
      },
    ],
  },
}

export default function Web() {
  return (
<<<<<<< Updated upstream
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              Next.js Enterprise Boilerplate
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              Jumpstart your enterprise project with our feature-packed, high-performance Next.js boilerplate!
              Experience rapid UI development, AI-powered code reviews, and an extensive suite of tools for a smooth and
              enjoyable development process.
            </p>
            <Button href="https://github.com/Blazity/next-enterprise" className="mr-3">
              Get started
            </Button>
            <Button
              href="https://vercel.com/new/git/external?repository-url=https://github.com/Blazity/next-enterprise"
              intent="secondary"
            >
              Deploy Now
            </Button>
=======
    <div className="relative flex min-h-screen bg-cover bg-center bg-no-repeat">
      <div className="left z-20 flex flex-col justify-center p-8">
        <Link href="/">
          <Image src="/images/digi_logo.f906b744 3.png" width={40} height={40} alt="Logo" className="wl mb-4" />
        </Link>
        <h1 className="text-4xl font-bold text-orange-500">
          <b>India&apos;s first eCommerce</b>
        </h1>
        <h3 className="text-2xl text-white">
          <b>and Applied Marketing Academy</b>
        </h3>
        <p className="mt-2 text-white">
          <b>
            Industry backend programs designed by <br /> professionals to accelerate your digital career
          </b>
        </p>
      </div>
      <div className="wrapper z-20 w-96 rounded-lg bg-white p-10 shadow-lg">
        <form onSubmit={validateInput}>
          <Link href="/">
            <Image src="/images/blueLogoo.png" alt="Logo" width={40} height={40} className="bl mb-5 cursor-pointer" />
          </Link>
          <h1 className="llll">
            <b>Learners Login</b>
          </h1>
          <p className="mb-8 text-center">Sign into your account</p>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full rounded border p-3 ${error.email ? "border-red-500" : "border-gray-300"}`}
              placeholder="Enter Email"
            />
            {error.email && <p className="text-sm text-red-500">{error.email}</p>}
>>>>>>> Stashed changes
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
            {LP_GRID_ITEMS.map((singleItem) => (
              <div key={singleItem.title} className="flex flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 p-1.5 text-blue-700 dark:bg-primary-900 lg:h-12 lg:w-12">
                  {singleItem.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">{singleItem.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{singleItem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
