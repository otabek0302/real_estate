"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import symbol from "@/app/home/image/Symbol.png";
import {
  Linkedin,
  Twitter,
  Youtube,
  SendHorizonal,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* CTA Section */}
      <div
        className="px-6 md:px-12 py-16 bg-cover bg-center"
        style={{ backgroundImage: `url(${symbol.src})` }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Start Your Real Estate Journey Today
            </h2>
            <p className="text-gray-400 text-base md:text-lg">
              Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.
            </p>
          </div>
          <Button className="bg-[#7B61FF] text-white px-8 py-3 rounded-full text-base font-semibold">
            Explore Properties
          </Button>
        </div>
      </div>

      {/* Footer Main */}
      <div className="px-6 md:px-12 py-14 border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-12">
          {/* Logo + Newsletter */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-6">
              <img src={symbol.src} alt="Logo" className="w-6 h-6" />
              <span className="text-xl font-semibold">Estatein</span>
            </div>
            <div className="flex items-center bg-[#1a1a1a] rounded-md px-3 py-2 max-w-sm">
              <Input
                placeholder="Enter Your Email"
                className="bg-transparent border-0 focus-visible:ring-0 text-white placeholder:text-gray-400"
              />
              <Button variant="ghost" size="icon" className="text-white">
                <SendHorizonal className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-sm">
            {[
              {
                title: "Home",
                links: ["Hero Section", "Features", "Properties", "Testimonials", "FAQ’s"],
              },
              {
                title: "About Us",
                links: ["Our Story", "Our Works", "How It Works", "Our Team", "Our Clients"],
              },
              {
                title: "Properties",
                links: ["Portfolio", "Categories"],
              },
              {
                title: "Services",
                links: [
                  "Valuation Mastery",
                  "Strategic Marketing",
                  "Negotiation Wizardry",
                  "Closing Success",
                  "Property Management",
                ],
              },
              {
                title: "Contact Us",
                links: ["Contact Form", "Our Offices"],
              },
            ].map((section, i) => (
              <div key={i}>
                <h4 className="font-semibold mb-4 text-gray-400">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, j) => (
                    <li key={j}>{link}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 px-2">
          <p>©2023 Estatein. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">Terms & Conditions</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            {[Linkedin, Twitter, Youtube].map((Icon, i) => (
              <Button
                key={i}
                variant="ghost"
                size="icon"
                className="bg-[#1a1a1a] rounded-full text-white"
              >
                <Icon className="w-4 h-4" />
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
