import Link from "next/link";

export default function ContactHero() {
  return (
    <div className="bg-white px-30 py-10">
      <div className="flex flex-row justify-center items-center gap-10 bg-gray-200 py-5">
        <div className="flex flex-col gap-5">
          <h1 className="text-black font-semibold text-5xl max-w-200">
            Whether you have a question, need support, or
            just want to say hello
          </h1>
          <div className="">
            <Link href="" className="bg-blue-600 px-6 py-3 rounded-xl">
              Let’s talk
            </Link>
          </div>
        </div>
        <div className="">
          <img src="/ContactHero.svg" alt="" className="w-70" />
        </div>
      </div>
    </div>
  );
}
