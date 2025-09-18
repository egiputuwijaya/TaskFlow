import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-blue-200">
      <img src="/404.svg" alt="" className="max-w-md" />
      <Link
        href="/"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
