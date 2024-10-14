"use client"
import Image from "next/image"
import Link from "next/link"
import Icons from "../../assets/icons"
import { useState } from "react"
import OTPInput from "react-otp-input"
import { useRouter } from "next/navigation"

// Define the structure of error state
interface ErrorState {
  otp: string
}

function VerifyEmailPage() {
  const [password, setPassword] = useState<string>("")
  const [otp, setOtp] = useState<string>("000000")
  const [error, setError] = useState<ErrorState>({ otp: "" })
  const router = useRouter();

  const validateInput = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let otpValid = true

    const expectedOtp = "000000"

    let tempErrors: ErrorState = { otp: "" }

    if (otp.trim() === "") {
      tempErrors.otp = "Please fill this field"
      otpValid = false
    } else if (otp !== expectedOtp) {
      tempErrors.otp = "Invalid otp"
      otpValid = false
    }

    setError(tempErrors)

    if (otpValid) {
      console.log("Otp valid")
    }
  }

  return (
    <div className="relative flex min-h-screen bg-cover bg-center bg-no-repeat">
      <div className="left flex flex-col justify-center p-8">
        <Link href="/" className="">
          <Image
            src="/images/digi_logo.f906b744 3.png"
            width={207}
            height={107}
            alt="Logo"
            className="wl mb-4 !h-[6.55rem] !w-52"
          />
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
        <form className="h-full" onSubmit={validateInput}>
          <div className="flex h-full w-full flex-col items-center justify-between">
            <div className="flex w-full flex-col">
              <Link href="/" className="flex justify-center">
                <Image
                  src="/images/blueLogoo.png"
                  alt="Logo"
                  width={138}
                  height={72}
                  className="bl mb-5 !h-[4.5rem] !w-[8.625rem] cursor-pointer"
                />
              </Link>
              <h1 className="llll">
                <b>Verify your email</b>
              </h1>
              <p className="mb-4 text-center">We have send you the validation code to </p>
              <div className="mb-6 flex items-center justify-center gap-3">
                <p className="text-center text-base font-bold">John@exmple.com</p>
                <div>
                  <Icons.EditIcon />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="mb-2 block text-gray-700">
                  Enter OTP
                </label>
                {/* <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full rounded border p-3 ${error.email ? "border-red-500" : "border-gray-300"}`}
                  placeholder="Enter Email"
                /> */}
                <OTPInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  inputStyle={`border !w-[3.5rem] h-[3.5rem] border-light-grey rounded`}
                  containerStyle={`flex items-center gap-2`}
                  renderInput={(props) => <input {...props} />}
                />
                {error.otp && <p className="text-sm text-red-500">{error.otp}</p>}
              </div>
            </div>
            <div className="flex w-full items-center justify-between gap-4">
              <button
                type="submit"
                className="block w-full rounded-full border-2 border-orange-500 bg-white p-3 font-bold text-orange-500 transition hover:bg-orange-600 hover:text-white"
                onClick={() => {router.push("/forget-password")}}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="block w-full rounded-full bg-orange-500 p-3 font-bold text-white transition hover:bg-orange-600"
              >
                Next
              </button>
            </div>
          </div>
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

export default VerifyEmailPage
