"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Discover() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 10

  const properties = [
    {
      id: 1,
      category: "Coastal Escapes - Where Waves Beckon",
      name: "Seaside Serenity Villa",
      description: "Wake up to the soothing melody of waves. This beachfront villa offers...",
      price: "$1,250,000",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image-XEndUW6g2i0bfzSgrp30eODcXBvGzN.png", 
      readMore: "#",
      details: "#",
    },
    {
      id: 2,
      category: "Urban Oasis - Life in the Heart of the City",
      name: "Metropolitan Haven",
      description: "Immerse yourself in the energy of the city. This modern apartment in the heart...",
      price: "$650,000",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%282%29-ZmmfVsKO7X9PirqKgOcMAdDWWtkdMZ.png", 
      readMore: "#",
      details: "#",
    },
    {
      id: 3,
      category: "Countryside Charm - Escape to Nature's Embrace",
      name: "Rustic Retreat Cottage",
      description: "Find tranquility in the countryside. This charming cottage is nestled amidst rolling hills...",
      price: "$350,000",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image%20%281%29-udS4lu7xZoP418NM5ULqRqdU5bg9gy.png", // Updated to use the correct URL
      readMore: "#",
      details: "#",
    },
  ]

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <div className="w-full bg-black text-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with star icon */}
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-70"
            >
              <path
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="ml-1 h-0.5 w-5 bg-gray-700"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Discover a World of Possibilities</h2>
          <p className="text-gray-400 max-w-3xl">
            Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the
            perfect property that resonates with your vision of home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {properties.map((property) => (
            <div key={property.id} className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden">
              {/* Property Image */}
              <div className="relative h-48 overflow-hidden">

                <Image
                  src={property.image || "/placeholder.svg"}
                  alt={property.name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  unoptimized={true}
                />
              </div>

              <div className="p-5">
                <div className="mb-3">
                  <p className="text-gray-400 text-sm mb-1">{property.category}</p>
                  <h3 className="text-xl font-semibold mb-2">{property.name}</h3>
                  <p className="text-gray-400 text-sm">
                    {property.description}
                    <a href={property.readMore} className="text-purple-500 hover:text-purple-400 ml-1">
                      Read More
                    </a>
                  </p>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div>
                    <p className="text-gray-400 text-xs mb-1">Price</p>
                    <p className="font-semibold">{property.price}</p>
                  </div>
                  <Button
                    className="bg-purple-600 hover:bg-purple-700 text-white border-none"
                    onClick={() => (window.location.href = property.details)}
                  >
                    View Property Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <p className="text-gray-400">
            {currentPage.toString().padStart(2, "0")} of {totalPages.toString().padStart(2, "0")}
          </p>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="border-gray-700 text-gray-400 hover:bg-gray-800 hover:text-white"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-gray-700 text-gray-400 hover:bg-gray-800 hover:text-white"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
