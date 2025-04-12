"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import skyscraper from "@/app/home/image/skyscraper.png";
import { motion } from "framer-motion";

export default function DreamProperty() {
  return (
    <section className="bg-black text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen max-w-7xl mx-auto px-4 md:px-8 py-16 gap-8 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Discover Your Dream<br />
            Property with Estatein
          </h1>
          <p className="text-muted-foreground text-lg max-w-md">
            Your journey to finding the perfect property begins here. Explore
            our listings to find the home that matches your dreams.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-black transition"
            >
              Learn More
            </Button>

            <Link href="/properties">
              <Button className="bg-[#7744FF] hover:bg-[#6633ee] text-white">
                Browse Properties
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap gap-4 pt-8">
            <StatCard value="200+" label="Happy Customers" />
            <StatCard value="10k+" label="Properties For Clients" />
            <StatCard value="16+" label="Years of Experience" />
          </div>
        </motion.div>

        {/* RIGHT IMAGE + ROTATING TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative min-w-[40%] pl-4 md:pl-12 lg:pl-16"
        >
          <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 hidden lg:block z-20">
            <div className="w-36 h-36 animate-spin-slow relative">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
                <defs>
                  <path
                    id="circlePath"
                    d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0"
                  />
                </defs>
                <text fontSize="12" fontWeight="bold">
                  <textPath href="#circlePath" startOffset="0%">
                    Discover Your Dream Property ✨
                  </textPath>
                </text>
              </svg>
              <ArrowUpRight
                size={20}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
              />
            </div>
          </div>

          <div className="relative w-full h-full bg-[#0f0f0f] rounded-xl overflow-hidden min-h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
            <Image
              src={skyscraper}
              alt="Skyscraper"
              fill
              className="object-cover z-0"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Features Section (4 Elements) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 md:px-8 py-10">
        {[
          {
            title: "Find Your Dream Home",
            icon: "🏠",
            type: "scroll",
          },
          {
            title: "Unlock Property Value",
            icon: "💰",
            href: "/about-us",
          },
          {
            title: "Effortless Property Management",
            icon: "🏢",
            href: "/services",
          },
          {
            title: "Smart Investments, Informed Decisions",
            icon: "✨",
            href: "/contact",
          },
        ].map((item, idx) => {
          const animationProps = {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6, delay: idx * 0.15 },
          };

          const className =
            "bg-[#1a1a1a] border border-transparent hover:border-[#7744FF] rounded-xl p-6 flex flex-col gap-4 items-start transition-colors duration-300 text-left w-full h-full";

          return item.type === "scroll" ? (
            <motion.button
              key={idx}
              {...animationProps}
              onClick={() => {
                const el = document.getElementById("featured-properties");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className={className}
            >
              <div className="text-2xl bg-[#222] rounded-full p-3 text-[#7744FF]">
                {item.icon}
              </div>
              <div className="text-base font-medium leading-snug">
                {item.title}
              </div>
            </motion.button>
          ) : (
            <motion.a
              key={idx}
              href={item.href}
              {...animationProps}
              className={className}
            >
              <div className="text-2xl bg-[#222] rounded-full p-3 text-[#7744FF]">
                {item.icon}
              </div>
              <div className="text-base font-medium leading-snug">
                {item.title}
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="bg-[#1c1c1c] px-6 py-4 rounded-xl text-center">
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
}
