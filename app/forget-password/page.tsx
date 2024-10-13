"use client"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { email_validation } from "../../constants/regex"

// Define the structure of error state
interface ErrorState {
    email: string
}

function ForgetPasswordPage() {
    const [email, setEmail] = useState<string>("")
    const [error, setError] = useState<ErrorState>({ email: "" })
    const [emailValid, setEmailValid] = useState<boolean>(false)
    const emailValidation = new RegExp(email_validation)
    const router = useRouter()

    const validateInput = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const expectedEmail = "courseguard@gmail.com"

        let validInput = true

        let tempErrors: ErrorState = { email: "" }

        if (email.trim() === "") {
            tempErrors.email = "Please fill this field"
            validInput = false
        } 
        else if (!emailValidation.test(email)) {
            console.log("Email :: ", email)
            tempErrors.email = "Invalid email"
            validInput = false
        }
        setError(tempErrors)
        setEmailValid(validInput)

        if (validInput) {
            console.log("Login successful")
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
                            <Link href="/" className="flex w-full justify-center">
                                <Image
                                    src="/images/blueLogoo.png"
                                    alt="Logo"
                                    width={138}
                                    height={72}
                                    className="bl mb-5 !h-[4.5rem] !w-[8.625rem] cursor-pointer"
                                />
                            </Link>
                            <h1 className="llll">
                                <b>Forgot Password</b>
                            </h1>
                            <p className="mb-6 text-center max-w-[25rem] self-center">Enter the email you used when you joined and we”ll send you a new password. </p>
                            {/* <div className="mb-6 flex items-center justify-center gap-3">
                                <p className="text-center text-base font-bold">John@exmple.com</p>
                                <div>
                                    <Icons.EditIcon />
                                </div>
                            </div> */}
                            <div className="mb-4">
                                <label htmlFor="email" className="mb-2 block text-gray-700">
                                    Email ID
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
                        </div>
                        <div className="flex w-full items-center justify-between gap-4">
                            <button
                                type="submit"
                                className={`block w-full rounded-full border-2 border-orange-500 bg-white p-3 font-bold text-orange-500 transition hover:bg-orange-600 hover:text-white `}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className={`block w-full rounded-full bg-orange-500 p-3 font-bold text-white transition hover:bg-orange-600 }`}
                                onClick={() => { if (emailValid) router?.push("/verify ") }}
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

export default ForgetPasswordPage
