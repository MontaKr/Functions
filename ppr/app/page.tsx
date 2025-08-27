import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black flex flex-col items-center justify-center w-screen h-[100dvh]">
      <h1 className="text-white text-[clamp(1rem,-0.25rem_+_3.333vw,2.75rem)]">
        This page is for SSG
      </h1>
      <div className="flex justify-between gap-[50px]">
        <Link href="/blog" className="text-blue-400">
          To Blog Page
        </Link>
        <Link href="/" className="text-blue-400">
          Login
        </Link>
      </div>
    </div>
  );
}
