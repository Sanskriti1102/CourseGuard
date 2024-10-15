/* eslint-disable prettier/prettier */
"use client"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import 'styles/global.css'

function SignInSuccess() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [router]);

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
        <div className="flex size-full flex-col items-center justify-between">
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
            <div className="flex justify-center mt-12 mb-4">
              <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M80.6664 40.6266V44C80.6618 51.9069 78.1015 59.6004 73.3672 65.9333C68.633 72.2662 61.9784 76.8991 54.396 79.1409C46.8136 81.3828 38.7096 81.1136 31.2927 78.3734C23.8758 75.6333 17.5434 70.569 13.2399 63.9359C8.93632 57.3028 6.89224 49.4562 7.41249 41.5665C7.93274 33.6767 10.9894 26.1665 16.1267 20.1559C21.264 14.1453 28.2066 9.95637 35.919 8.21384C43.6315 6.47131 51.7007 7.26854 58.923 10.4866" stroke="#6FCF97" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" className="circle" />
                <path d="M80.6667 14.6667L44 51.37L33 40.37" stroke="#6FCF97" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" className="tick" />
              </svg>
            </div>

            <h1 className="llll">
              <p className="text-center font-bold text-2xl">Successful</p>
            </h1>
            <p className="mb-4 text-center text-lg">You have successfully signed in.</p>
          </div>
        </div>
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

export default SignInSuccess
