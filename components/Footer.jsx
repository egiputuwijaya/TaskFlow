import Link from "next/link";
import { FaXTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="py-10" style={{ backgroundColor: "#3B82F6" }}>
      <div className="px-3 md:px-30">
        <div className="flex flex-row justify-between">
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
              <FaXTwitter className="text-2xl" />
              <FaInstagram className="text-2xl" />
              <FaLinkedin className="text-2xl" />
              <FaGithub className="text-2xl" />
            </div>
          </div>

          <div className="flex flex-row gap-15">
            <div className="hidden md:block">
              <div className="flex flex-col gap-3">
                <h2 className="font-semibold">MENU</h2>
                <Link href="/whytaskflow" className="text-sm">
                  Why TaskFlow
                </Link>
                <Link href="/platform" className="text-sm">
                  Platform
                </Link>
                <Link href="/contact" className="text-sm">
                  Contact
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex flex-col gap-3">
                <h2 className="font-semibold">COMPANY</h2>
                <Link href="" className="text-sm">
                  About
                </Link>
                <Link href="" className="text-sm">
                  Blog
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="font-semibold">SUPPORT</h2>
              <Link href="" className="text-sm">
                Help Center
              </Link>
              <Link href="" className="text-sm">
                FAQs
              </Link>
              <Link href="" className="text-sm">
                Privacy Policy
              </Link>
              <Link href="" className="text-sm">
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
