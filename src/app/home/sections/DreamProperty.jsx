import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import skyscraper from "@/app/home/image/skyscraper.png"

export default function DreamProperty() {
    return (
        <section className="bg-black text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen max-w-7xl mx-auto px-4 md:px-8 py-16 gap-8 items-center">
                {/* LEFT CONTENT */}
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        Discover Your Dream<br />
                        Property with Estatein
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-md">
                        Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Button
                            variant="outline"
                            className="text-white border-white hover:bg-white hover:text-black transition"
                        >
                            Learn More
                        </Button>
                        <Button className="bg-[#7744FF] hover:bg-[#6633ee] text-white">
                            Browse Properties
                        </Button>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-8">
                        <div className="bg-[#1c1c1c] px-6 py-4 rounded-xl text-center">
                            <p className="text-2xl font-bold">200+</p>
                            <p className="text-muted-foreground text-sm">Happy Customers</p>
                        </div>
                        <div className="bg-[#1c1c1c] px-6 py-4 rounded-xl text-center">
                            <p className="text-2xl font-bold">10k+</p>
                            <p className="text-muted-foreground text-sm">Properties For Clients</p>
                        </div>
                        <div className="bg-[#1c1c1c] px-6 py-4 rounded-xl text-center">
                            <p className="text-2xl font-bold">16+</p>
                            <p className="text-muted-foreground text-sm">Years of Experience</p>
                        </div>
                    </div>
                </div>

            {/* RIGHT IMAGE */}
            <div className="relative pl-4 md:pl-12 lg:pl-16">
              <div className="absolute top-1/2 left-[-40px] -translate-y-1/2 rotate-[-90deg] bg-black border border-[#222] rounded-full px-6 py-2 text-sm hidden lg:flex items-center gap-2">
                <span>Discover Your Dream Property</span>
                <ArrowUpRight size={14} />
              </div>
            
              <Image
                src={skyscraper}
                alt="Skyscraper"
                width={1000}
                height={1000}
                className="w-full h-auto object-contain ml-0 sm:ml-12 md:ml-20 lg:ml-24"
                priority
              />
            </div>
            </div>            


            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 md:px-8 py-10">
                {[
                    {
                        title: "Find Your Dream Home",
                        icon: "\u{1F3E0}"
                    },
                    {
                        title: "Unlock Property Value",
                        icon: "\u{1F4B0}"
                    },
                    {
                        title: "Effortless Property Management",
                        icon: "\u{1F3E2}"
                    },
                    {
                        title: "Smart Investments, Informed Decisions",
                        icon: "\u{2600}"
                    }
                ].map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-[#1a1a1a] rounded-xl p-6 flex flex-col gap-4 items-start hover:border hover:border-[#7744FF] transition-all"
                    >
                        <div className="text-2xl bg-[#222] rounded-full p-3 text-[#7744FF]">
                            {item.icon}
                        </div>
                        <div className="text-base font-medium leading-snug">
                            {item.title}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
