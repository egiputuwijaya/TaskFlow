import Link from "next/link";
import { FaXTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="py-10" style={{ backgroundColor: "#3B82F6" }}>
      <div className="px-3 md:px-30">
        <div className="flex flex-row justify-between text-white">
          <div className="flex flex-col gap-3">
            <div className="flex flex-row items-center gap-3">
              <h1 className="text-xl font-semibold">TaskFlow</h1>
              <img src="/logo_bg.svg" alt="" className="w-10" />
            </div>
            <div className="">
              <p className="max-w-md text-xs">
                With TaskFlow, chaos turns into clarity. Start simplifying your
                workflow today and experience a new level of productivity
              </p>
            </div>
            <div className="flex flex-row py-2 gap-5">
              <FaXTwitter className="text-2xl hover:text-gray-600" />
              <FaInstagram className="text-2xl hover:text-gray-600" />
              <FaLinkedin className="text-2xl hover:text-gray-600" />
              <FaGithub className="text-2xl hover:text-gray-600" />
            </div>
          </div>

          <div className="flex flex-row gap-15 text-white ">
            <div className="hidden md:block">
              <div className="flex flex-col gap-3">
                <h2 className="font-semibold">MENU</h2>
                <Link
                  href="/whytaskflow"
                  className="text-sm hover:text-gray-600"
                >
                  Why TaskFlow
                </Link>
                <Link href="/platform" className="text-sm hover:text-gray-600">
                  Platform
                </Link>
                <Link href="/contact" className="text-sm hover:text-gray-600">
                  Contact
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex flex-col gap-3">
                <h2 className="font-semibold">COMPANY</h2>
                <Link href="" className="text-sm hover:text-gray-600">
                  About
                </Link>
                <Link href="" className="text-sm hover:text-gray-600">
                  Blog
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="font-semibold">SUPPORT</h2>
              <Link href="" className="text-sm hover:text-gray-600">
                Help Center
              </Link>
              <Link href="" className="text-sm hover:text-gray-600">
                FAQs
              </Link>
              <Link href="" className="text-sm hover:text-gray-600">
                Privacy Policy
              </Link>
              <Link href="" className="text-sm hover:text-gray-600">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
        <hr className="border-t-2 border-gray-300 my-3" />
        <h2 className="text-xs">© 2025 TaskFlow. All rights reserved.</h2>
      </div>
    </div>
  );
}
