// components/site-header.tsx
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png" 
            alt="F. Logo"
            width={32}
            height={32}
          />
          <span className="font-semibold text-lg">frontend.io</span>
        </Link>
      </div>
    </header>
  )
}
