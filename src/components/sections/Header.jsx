"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle
} from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import { FaLeaf } from "react-icons/fa"

const Header = () => {
  const [open, setOpen] = useState(false)

  const navLinks = ["Home", "About Us", "Properties", "Services"]

  return (
    <header className="relative z-50">
      {/* Верхняя полоска */}
      <div className="bg-black text-white text-sm py-2 px-4 text-center">
        ✨Discover Your Dream Property with Estatein{" "}
        <a href="#" className="underline">Learn More</a>
      </div>

      {/* Основная панель */}
      <div className="bg-[#161616] flex items-center justify-between px-4 py-4 md:px-10">
        {/* Логотип */}
        <div className="flex items-center gap-2">
          <FaLeaf className="text-[#7744FF] w-6 h-6" />
          <span className="text-2xl font-semibold text-white">Estatein</span>
        </div>

        {/* Меню для десктопа */}
        <nav className="hidden md:flex gap-6 text-white">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/ /g, '-')}`}
              className="hover:underline"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Кнопка Contact Us */}
        <div className="hidden md:block">
          <Button variant="outline" className="text-black border-white">
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
              {/* Добавлен заголовок для доступности */}
              <SheetTitle className="sr-only">Main Menu</SheetTitle>

              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-semibold">Menu</span>
                <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                  <X className="text-white" />
                </Button>
              </div>

              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replace(/ /g, '-')}`}
                    onClick={() => setOpen(false)}
                    className="hover:underline"
                  >
                    {link}
                  </a>
                ))}
                <Button variant="outline" className="mt-4 border-white text-white">
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
