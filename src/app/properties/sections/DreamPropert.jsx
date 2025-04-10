"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Building, DollarSign, SquareIcon, Calendar, Search, ChevronDown, X, Filter } from "lucide-react"

export default function DreamProperty() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState(null)
  const [selectedFilters, setSelectedFilters] = useState({
    location: "",
    propertyType: "",
    priceRange: "",
    propertySize: "",
    buildYear: "",
  })
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const dropdownRefs = useRef({})

  useEffect(() => {
    function handleClickOutside(event) {
      if (activeFilter && !dropdownRefs.current[activeFilter]?.contains(event.target)) {
        setActiveFilter(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [activeFilter])

  const toggleDropdown = (filter) => {
    setActiveFilter(activeFilter === filter ? null : filter)
  }

  const selectOption = (filter, value, label) => {
    setSelectedFilters({ ...selectedFilters, [filter]: label })
    setActiveFilter(null)
  }

  const clearFilter = (filter) => {
    setSelectedFilters({ ...selectedFilters, [filter]: "" })
  }

  const filterOptions = {
    location: [
      { value: "new-york", label: "New York" },
      { value: "los-angeles", label: "Los Angeles" },
      { value: "miami", label: "Miami" },
      { value: "chicago", label: "Chicago" },
      { value: "san-francisco", label: "San Francisco" },
    ],
    propertyType: [
      { value: "apartment", label: "Apartment" },
      { value: "house", label: "House" },
      { value: "condo", label: "Condo" },
      { value: "villa", label: "Villa" },
      { value: "penthouse", label: "Penthouse" },
    ],
    priceRange: [
      { value: "0-100000", label: "$0 - $100,000" },
      { value: "100000-300000", label: "$100,000 - $300,000" },
      { value: "300000-500000", label: "$300,000 - $500,000" },
      { value: "500000-1000000", label: "$500,000 - $1,000,000" },
      { value: "1000000-plus", label: "$1,000,000+" },
    ],
    propertySize: [
      { value: "0-1000", label: "0 - 1,000 sq ft" },
      { value: "1000-2000", label: "1,000 - 2,000 sq ft" },
      { value: "2000-3000", label: "2,000 - 3,000 sq ft" },
      { value: "3000-5000", label: "3,000 - 5,000 sq ft" },
      { value: "5000-plus", label: "5,000+ sq ft" },
    ],
    buildYear: [
      { value: "before-1990", label: "Before 1990" },
      { value: "1990-2000", label: "1990 - 2000" },
      { value: "2000-2010", label: "2000 - 2010" },
      { value: "2010-2020", label: "2010 - 2020" },
      { value: "after-2020", label: "After 2020" },
    ],
  }

  const filterIcons = {
    location: <MapPin className="h-4 w-4" />,
    propertyType: <Building className="h-4 w-4" />,
    priceRange: <DollarSign className="h-4 w-4" />,
    propertySize: <SquareIcon className="h-4 w-4" />,
    buildYear: <Calendar className="h-4 w-4" />,
  }

  const filterLabels = {
    location: "Location",
    propertyType: "Property Type",
    priceRange: "Pricing Range",
    propertySize: "Property Size",
    buildYear: "Build Year",
  }

  return (
    <div className="w-full bg-gradient-to-b from-black to-gray-900 text-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 relative">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 relative">
            Find Your{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Dream Property
            </span>
          </h1>

          <p className="text-gray-300 max-w-3xl relative">
            Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our
            curated selection of properties, each offering a unique story and a chance to redefine your life. With
            categories to suit every dreamer, your journey begins here.
          </p>
        </div>

        <div className="mb-8 relative">
          <div
            className={`flex flex-col md:flex-row gap-2 transition-all duration-300 ${isSearchFocused ? "scale-[1.01]" : ""}`}
          >
            <div className="relative flex-grow group">
              <div
                className={`absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-md blur-md transition-opacity duration-300 ${isSearchFocused ? "opacity-100" : "opacity-0"}`}
              ></div>
              <Input
                type="text"
                placeholder="Search For A Property"
                className="w-full h-14 bg-gray-900/80 backdrop-blur-sm border-gray-800 rounded-md pl-4 pr-4 text-white relative z-10 transition-all duration-300 focus:border-purple-500 focus:ring-purple-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
              {searchQuery && (
                <button
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white z-10"
                  onClick={() => setSearchQuery("")}
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            <Button className="h-14 px-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-md relative z-10 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
              <Search className="mr-2 h-5 w-5" /> Find Property
            </Button>
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-2 items-center">
          <span className="text-sm text-gray-400">Popular:</span>
          {["Luxury Villa", "Beachfront", "Modern Apartment", "Mountain View", "City Center"].map((term) => (
            <button
              key={term}
              onClick={() => setSearchQuery(term)}
              className="px-3 py-1 text-sm bg-gray-800/50 hover:bg-gray-700/50 rounded-full text-gray-300 transition-all duration-200 hover:text-white"
            >
              {term}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
          {Object.keys(filterLabels).map((filter) => (
            <div key={filter} className="relative" ref={(el) => (dropdownRefs.current[filter] = el)}>
              <button
                className={`flex items-center justify-between w-full h-14 px-4 bg-gray-900/80 backdrop-blur-sm border ${activeFilter === filter ? "border-purple-500" : "border-gray-800"} rounded-md text-white transition-all duration-200 hover:border-gray-700 group`}
                onClick={() => toggleDropdown(filter)}
              >
                <div className="flex items-center">
                  <span
                    className={`mr-2 ${selectedFilters[filter] ? "text-purple-500" : "text-gray-400"} group-hover:text-purple-400 transition-colors duration-200`}
                  >
                    {filterIcons[filter]}
                  </span>
                  <span className={selectedFilters[filter] ? "text-white" : "text-gray-400"}>
                    {selectedFilters[filter] || filterLabels[filter]}
                  </span>
                </div>
                <div className="flex items-center">
                  {selectedFilters[filter] && (
                    <button
                      className="mr-2 text-gray-400 hover:text-white"
                      onClick={(e) => {
                        e.stopPropagation()
                        clearFilter(filter)
                      }}
                    >
                      <X className="h-3 w-3" />
                    </button>
                  )}
                  <ChevronDown
                    className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${activeFilter === filter ? "rotate-180" : ""}`}
                  />
                </div>
              </button>

              {activeFilter === filter && (
                <div className="absolute z-50 w-full mt-1 py-1 bg-gray-900 border border-gray-800 rounded-md shadow-lg shadow-black/50 backdrop-blur-sm animate-in fade-in-50 zoom-in-95 slide-in-from-top-5">
                  {filterOptions[filter].map((option) => (
                    <button
                      key={option.value}
                      className="flex items-center w-full px-4 py-2 text-left text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                      onClick={() => selectOption(filter, option.value, option.label)}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {Object.values(selectedFilters).some((value) => value) && (
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="flex items-center text-sm text-gray-400">
              <Filter className="h-3 w-3 mr-1" /> Active filters:
            </span>
            {Object.entries(selectedFilters).map(([key, value]) =>
              value ? (
                <div
                  key={key}
                  className="flex items-center px-2 py-1 bg-purple-900/30 border border-purple-800/50 rounded-full text-sm text-purple-300"
                >
                  {filterIcons[key]}
                  <span className="mx-1">{value}</span>
                  <button className="text-purple-400 hover:text-white" onClick={() => clearFilter(key)}>
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ) : null,
            )}
            <button
              className="text-sm text-gray-400 hover:text-white underline"
              onClick={() =>
                setSelectedFilters({
                  location: "",
                  propertyType: "",
                  priceRange: "",
                  propertySize: "",
                  buildYear: "",
                })
              }
            >
              Clear all
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
