"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import { FaLeaf } from "react-icons/fa"

const Header = () => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Properties", href: "/properties" },
    { label: "Services", href: "/services" },
  ]

  return (
    <header className="relative z-50">
      {/* Верхняя полоска */}
      <div className="bg-black text-white text-sm py-2 px-4 text-center">
        ✨ Discover Your Dream Property with Estatein{" "}
        <a href="#" className="underline">
          Learn More
        </a>
      </div>

      {/* Основная панель */}
      <div className="bg-[#161616] flex items-center justify-between px-4 py-4 md:px-10">
        {/* Логотип */}
        <Link href="/" className="flex items-center gap-2">
  <FaLeaf className="text-[#7744FF] w-6 h-6" />
  <span className="text-2xl font-semibold text-white">Estatein</span>
</Link>


        {/* Меню для десктопа */}
        <nav className="hidden md:flex gap-6 text-white">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={`px-2 py-1 border-b-2 ${
                pathname === href
                  ? "border-[#7744FF] text-[#7744FF]"
                  : "border-transparent hover:border-[#7744FF] transition-colors"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Кнопка Contact Us */}
        <div className="hidden md:block">
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black transition">
            Contact Us
          </Button>
        </div>

        {/* Мобильное меню */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#161616] text-white">
              <SheetTitle className="sr-only">Main Menu</SheetTitle>

              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-semibold">Menu</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setOpen(false)}
                >
                  <X className="text-white" />
                </Button>
              </div>

              <nav className="flex flex-col gap-4">
                {navLinks.map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`px-2 py-1 border-l-4 ${
                      pathname === href
                        ? "border-[#7744FF] text-[#7744FF]"
                        : "border-transparent hover:border-[#7744FF] transition-colors"
                    }`}
                  >
                    {label}
                  </Link>
                ))}
                <Button
                  variant="outline"
                  className="mt-4 border-white text-white hover:bg-white hover:text-black transition"
                >
                  Contact Us
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Header
