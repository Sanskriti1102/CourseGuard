// app/page.tsx or pages/index.tsx
import Image from "next/image"
import React, { useState } from "react"
import Link from "next/link";

// Define the structure of error state
interface ErrorState {
  email: string
  password: string
}

export default function LoginPage() {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [error, setError] = useState<ErrorState>({ email: "", password: "" })
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const validateInput = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let emailValid = true
    let passwordValid = true

    const expectedEmail = "courseguard"
    const expectedPassword = "pass@123"

    let tempErrors: ErrorState = { email: "", password: "" }

    if (email.trim() === "") {
      tempErrors.email = "Please fill this field"
      emailValid = false
    } else if (email !== expectedEmail) {
      tempErrors.email = "Invalid email"
      emailValid = false
    }

    if (password.trim() === "") {
      tempErrors.password = "Please fill this field"
      passwordValid = false
    } else if (password !== expectedPassword) {
      tempErrors.password = "Wrong password"
      passwordValid = false
    }

    setError(tempErrors)

    if (emailValid && passwordValid) {
      console.log("Login successful")
      // Optionally navigate to a different page on successful login
      // For example:
      // window.location.href = '/dashboard';
    }
  }

  return (
    <div className="relative flex min-h-screen bg-cover bg-center bg-no-repeat">
      <div className="left z-20 flex flex-col justify-center p-8">
        <Link href="/">
          <Image src="/images/digi_logo.f906b744 3.png" alt="Logo" className="wl mb-4" />
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
            <Image src="/images/blueLogoo.png" alt="l" className="bl mb-5" />
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
          </div>
          <div className="relative mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full rounded border p-3 ${error.password ? "border-red-500" : "border-gray-300"}`}
              placeholder="Enter Password"
            />
            <i
              className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"} eye absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer`}
              onClick={() => setShowPassword(!showPassword)}
            ></i>
            {error.password && <p className="text-sm text-red-500">{error.password}</p>}
          </div>
          <div className="mb-6 flex justify-between text-sm">
            <label>
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <Link href="https://digiaccel.in/">
              <span className="text-blue-500 cursor-pointer">Forgot Password</span>
            </Link>
          </div>
          <button
            type="submit"
            className="block w-full rounded-lg bg-orange-500 p-3 font-bold text-white transition hover:bg-orange-600"
          >
            Sign In
          </button>
        </form>
      </div>
      <footer className="footer bg-opacity-55/55 fixed inset-x-0 bottom-0 bg-yellow-200 p-4 text-center">
        <div>Terms of Use | Privacy Policy | Legal Notices & Terms</div>
        <div>
          <b>©2023 digiaccel, All rights reserved</b>
        </div>
      </footer>
    </div>
  )
}
